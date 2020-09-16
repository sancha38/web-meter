import enum
import sqlite3

import uuid 

from sqlalchemy.exc import IntegrityError
from uuid import uuid4
import uuid

from sqlalchemy import PrimaryKeyConstraint,Boolean ,REAL, Column,TEXT, String, Float, Integer, VARCHAR, TIMESTAMP, BigInteger,Numeric,Date
from sqlalchemy.ext.declarative import declarative_base

from sqlalchemy import desc

TXNBase = declarative_base()
import math
import datetime
from decimal import Decimal 
import pytz
from datetime import datetime
ist = pytz.timezone('Asia/Kolkata')
data_options ={
    "displayLength": 15,
    "paginationType": "full_numbers",
    "processing": True,
    "lengthChange": False,
    "buttons": [ 'copy', 'excel', 'csv', 'pdf','print', 'colvis' ]
}
class GlobalProductCfg(TXNBase):
    __tablename__ = 'global_cfg'
    id = Column(Integer,primary_key = True)
    product_type = Column(String(100))
    raw_material_arr = Column(String(100))
    
    @classmethod
    def list_global_product_cfg(cls,session):
        query = session.query(cls).all()
      
        cfgJson = {}
        for obj in query:
            cfgJson[obj.product_type]=obj.raw_material_arr.split(",")
        return cfgJson
    
    def toJson(self):
        return 


class RAW_PRODUCT_TXN_MPG(TXNBase):
    __tablename__= 'finished_product_raw_mpg'
    id = Column(Integer,primary_key=True)
    product_txn_id = Column(String(100))
    raw_txn_id = Column(String(100))

    @classmethod
    def insert_mpg(cls,prod_txn,raw_txn_id):
        obj = RAW_PRODUCT_TXN_MPG()
        obj.product_txn_id = prod_txn
        obj.raw_txn_id = raw_txn_id
        return obj


class Table_manager(TXNBase):
    __tablename__ = 'tb_id_manager'
    table_name = Column(VARCHAR(20),primary_key=True)
    industry_type = Column(String(20))
    generated_id = Column(BigInteger)
    
    @classmethod
    def get_next_id (cls,session,table_name,industry):
        result = session.query(cls.generated_id).filter_by(table_name= table_name,industry_type = industry).one()
        print(result)
        return result[0]
    
    @classmethod
    def increase_id(cls,session,table_name,industry):
        id = Table_manager.get_next_id(session,table_name,industry)
        query = session.query(cls).filter_by(table_name= table_name,industry_type = industry)
        query.update({"generated_id": id + 1})
    
class RAW_STOCK_IN_HAND(TXNBase):
    __tablename__= 'raw_material_tb'
    id = Column(Integer,primary_key=True)
    industry = Column(String(15))
    material_name = Column(String(100))
    size = Column(String(20))
    available_weight = Column(Numeric(3,3))
    updated_date = Column(TIMESTAMP)

    @classmethod 
    def show_data_options(cls):
        col = []
        
        col.append({"data": "id","title": "ID","visible": True})
        col.append({"data": "industry","title": "Industry","visible": True})
        col.append({"data": "material","title": "Material","visible": True})       
        col.append({"data": "size","title": "Size","visible": True})
        col.append({"data": "stock","title": "Weight(kg)","visible": True})
        col.append({"data": "ltd","title": "Last Transaction Record Date","visible": True})
        
        return  col
    
   
    @classmethod
    def get_raw_stock_in_hand(cls,session,industryType):
        query = session.query(cls).filter_by(industry = industryType).all()
        data= [ raw.toJson() for raw in query]
      
        return {"data":data,"recordsTotal":len(data),"recordsFiltered":len(data)}
    
    def toJson(self):
        return {
            "id": self.id,
            "material" : self.material_name,
            "size" : self.size,
            "stock":self.available_weight,
            "industry":self.industry,
            "ltd": self.updated_date
        }
        
        
    
    @classmethod
    def listRawItemSize(cls,session,industryType):
        result =  session.query(cls.material_name,cls.size).filter_by(industry=industryType).order_by(cls.material_name.asc(),cls.size.asc()).all()
        
        size = {}
        for obj in result:
            size_arr = size.get(obj.material_name,[])
            size_arr.append(obj.size)
            size[obj.material_name]=size_arr
        return size

    @classmethod
    def delete_stock_in_hand(cls,session,obj,weight,consumed_by=None):        
        result = session.query(cls).filter_by(material_name=obj.material,size=obj.size).one()
        print(result)
        if consumed_by:            
            result.available_weight = result.available_weight + weight
        else:            
            result.available_weight = result.available_weight - weight
        return result
        
    @classmethod
    def get_stock_and_update(cls,session,obj,weight):       
        result = session.query(cls).filter_by(material_name=obj.material,size=obj.size).one()
        
        if obj.txn_type == "addraw":            
            result.available_weight = result.available_weight + weight
        elif obj.txn_type == "consume":           
            result.available_weight = result.available_weight - weight            
        result.updated_date  = datetime.now(ist)
        return result

class RAW_MATERIAL_TXN(TXNBase):
    __tablename__ = 'raw_txn_tb'
    txnid = Column(BigInteger,primary_key= True)
    challan_no = Column(VARCHAR(100))
    industry = Column(String(15))
    recdate = Column(Date)
    material = Column(String(40))
    size = Column(String(20))
    weight = Column(Numeric(3,4))
    txn_type = Column(String(30)) # consume / add
    consumed_by_id = Column(Integer)
    
    @classmethod
    def insert_raw_txn(cls,session,json,industry,txn_type,consumed_by=None):
       
        obj = RAW_MATERIAL_TXN()
        obj = cls.setObj(obj,json,industry,txn_type)
        if consumed_by:
            obj.consumed_by_id = consumed_by
        session.add(obj)
        session.flush
        return obj
    
    @classmethod
    def update_raw(cls,session,txn_id,challan,json):
        obj = session.query(cls).filter_by(txnid = txn_id,challan_no=challan).first()
        last_txn_weight = obj.weight
        obj = cls.setObj(obj,json,obj.industry,obj.txn_type)
        return last_txn_weight,obj
    
    @classmethod
    def formateDate(cls,dateObj):
        date= "{0}-{1}-{2}".format(dateObj['day'],dateObj['month'],dateObj['year'])
        return datetime.strptime(date, "%d-%m-%Y").date()
    
    
    def dateToJson(self):
        return {'day':self.recdate.day,'month':self.recdate.month,'year':self.recdate.year}
        
    @classmethod 
    def setObj (cls,obj,json,industry,txn_type):
        print("===========setObj========",json)
        obj.recdate = cls.formateDate(json['recdate'])
        obj.material = json['material']
        obj.weight = json['weight']
        obj.size  = json['size']
        obj.txn_type = txn_type
        obj.challan_no = json['challan']
        obj.industry = industry     
        return obj

    @classmethod
    def show_data_options(cls):
        col = []
        
        col.append({"data": "txn","title": "ID","visible": True})
        col.append({"data": "industry","title": "Industry","visible": True})
        col.append({"data": "challan","title": "Challan#","visible": True})       
        col.append({"data": "recdate","title": "Record date","visible": True})
        col.append({"data": "material","title": "Material","visible": True})       
        col.append({"data": "size","title": "Size","visible": True})
        col.append({"data": "weight","title": "Weight(kg)","visible": True})
        col.append({"data": "txn_type","title": "Type of Transaction","visible": True})
        
        return  col
        
    @classmethod
    def get_txn_raw_by_challan_no(cls,session,challan_no,industry,consumed_by_id=None):
        if consumed_by_id == None:
            result = session.query(cls).filter_by(challan_no = challan_no,industry=industry).all()
        else:
            result = session.query(cls).filter_by(challan_no = challan_no,industry=industry,consumed_by_id=consumed_by_id).all()
            
        if len(result)>0:
            return [obj.json() for obj in result]
        else:
            return []

    
    def json(self):
        return {
            'industry':self.industry,
            'recdate':self.dateToJson(),
            'material':self.material,
            'size': self.size,
            'weight':self.weight,
            'challan':self.challan_no,
            'txn':self.txnid,
            'txn_type':self.txn_type,
            'status':'pristine'
        }
    @classmethod
    def get_raw_txn(cls,session,txn_id,challan,industry,consumed_by_id=None):
        print("get_raw_txn",txn_id,challan,industry)
        query = session.query(cls).filter(cls.txnid == txn_id).\
            filter(cls.challan_no ==challan).\
                filter(cls.industry == industry)
        if consumed_by_id:
           query.filter(cls.consumed_by_id == consumed_by_id) 
        print(query)
        return query.first()
    
    @classmethod
    def get_transaction_report(cls,session,industryType,fromDate,ToDate):
        fromDate= cls.formateDate(fromDate)
        ToDate = cls.formateDate(ToDate)
        
        query = session.query(cls).filter(cls.recdate.between(fromDate,ToDate),cls.industry==industryType)
        
        result = query.all()
        data = [row.json() for row in result]
        return {
            "data":data
        }
class SEMI_PRODUCT_IN_HAND(TXNBase):
    __tablename__ = 'semi_finished_product'
    id = Column(Integer,primary_key=True)
    product = Column(String(50))
    size = Column(String(10))
    stock = Column(BigInteger)
    raw_material_id = Column (Integer)
    weight_per_product = Column(Numeric(3,3))
    wastage_in_percentage =  Column (Integer)
    industry = Column(String(15))
    updated_date = Column(TIMESTAMP)
    
    
    @classmethod
    def get_semi_finished_product_map(cls,session,industryType):
        
        result = session.query(cls).filter_by(industry = industryType).order_by(cls.product.asc(),cls.size.asc()).all()
        print(result)
        product_map = {}
        for obj in result:
            sizelist = product_map.get(obj.product,[])
            sizelist.append(obj.size)
            product_map[obj.product] = sizelist
        return product_map
    
    @classmethod
    def get_semi_product_cfg(cls,session,product,size):
        semiprod = session.query(cls).filter_by(product = product,size=size).one()
        rawproduct = session.query(RAW_STOCK_IN_HAND).filter_by(id = semiprod.raw_material_id).one()
        return {
            'raw':rawproduct.material_name,
            'raw_size':rawproduct.size,
            'wastage_in_percetage':semiprod.wastage_in_percentage,
            'weight_per_product':semiprod.weight_per_product,
            'available_product_stock':semiprod.stock
        }
    
    @classmethod
    def update_semi_product(cls,session,product,size,qty,action):
        
        semiprod = session.query(cls).filter_by(product = product,size=size).one()
        
        if action == 'add':
            semiprod.stock = semiprod.stock + int(qty)
        elif action == 'deduct':
            semiprod.stock = semiprod.stock - int(qty)
        semiprod.updated_date = datetime.now(ist)
        session.add(semiprod)
    @classmethod
    def show_data_options(cls):
        
        col = []
        col.append({"data": "id","title": "ID","visible": True})
        col.append({"data": "industry","title": "Industry","visible": True})
        col.append({"data": "product","title": "Product","visible": True})       
        col.append({"data": "size","title": "Size","visible": True})
        col.append({"data": "stock","title": "Available Stock)","visible": True})
        col.append({"data": "ltd","title": "Last Transaction Record Date","visible": True})
        
        return col
    
    @classmethod
    def get_stock_in_hand(cls,session,industryType):
        result = session.query(cls).filter_by(industry = industryType).all()
        data= [semi.toJson() for semi in result]
        return {"data":data}
    def toJson(self):
        return {
            "id": self.id,
            "industry":self.industry,
            "product": self.product,
            "size":self.size,
            "stock":self.stock,
            "ltd":self.updated_date
        }        
    
    @classmethod
    def get_semi_product(cls,session,product,size,industry):
        return session.query(cls).filter_by(product=product,size=size,industry = industry).first()
        
class SEMI_PRODUCT_TXN(TXNBase):
    __tablename__ = 'semi_finished_txn_tb'
    txn_id = Column(Integer,primary_key= True)
    challan = Column(VARCHAR(100))
    industry = Column(String(15))
    date = Column(Date)
    product = Column(String(40))
    size = Column(String(20))
    qty = Column(Integer)
    wastage = Column(Numeric(3,4))
    txn_type = Column(String(30)) # consume / add
    consumed_by_id = Column(Integer)
    
    @classmethod
    def formateDate(cls,dateObj):
        date= "{0}-{1}-{2}".format(dateObj['day'],dateObj['month'],dateObj['year'])
        return datetime.strptime(date, "%d-%m-%Y").date()
    def dateToJson(self):
        return {'day':self.date.day,'month':self.date.month,'year':self.date.year}
        
    @classmethod
    def insert_semi_txn(cls,session,json,industry,txn_type,consumed_by=None):
        
        obj = SEMI_PRODUCT_TXN()
        #obj.txnid = "SEMI{0}{1}".format(uuid.uuid4().hex[:6].upper(),"".join(cls.formateDate(json['recdate']).split("-")))
        obj = cls.setObj(obj,json,industry,txn_type)
        if consumed_by:
            obj.consumed_by_id = consumed_by
        session.add(obj)
        session.flush()        
        return obj
    
    @classmethod 
    def setObj (cls,obj,json,industry,txn_type):
        print("============= semi setObj=============")
        obj.date = cls.formateDate(json['recdate'])
        obj.product = json['product']
        obj.size = json['size']
        obj.qty  = json['qty']
        obj.txn_type = txn_type
        obj.challan = json['challan']
        obj.industry = industry
        obj.wastage = Decimal(json.get('wastage',0))
        print("============= semi return setObj=============")
        return obj

    
    @classmethod
    def show_data_options(cls):
        col = []
        
        col.append({"data": "txn","title": "ID","visible": True})
        col.append({"data": "industry","title": "Industry","visible": True})
        col.append({"data": "challan","title": "Challan#","visible": True})       
        col.append({"data": "recdate","title": "Record date","visible": True})
        col.append({"data": "product","title": "Product","visible": True})       
        col.append({"data": "size","title": "Size","visible": True})
        col.append({"data": "qty","title": "Quantity","visible": True})
        col.append({"data": "wastage","title": "Calculated Wastage","visible": True})
        col.append({"data": "txn_type","title": "Type of Transaction","visible": True})
        
        return  col
    
    @classmethod
    def get_transaction_report(cls,session,industryType,fromDate,ToDate):
        fromDate= cls.formateDate(fromDate)
        ToDate = cls.formateDate(ToDate)
       
        query = session.query(cls).filter(cls.date.between(fromDate,ToDate),cls.industry==industryType)
        
        result = query.all()
        data = [row.json() for row in result]
        return {
            "data":data
        }
    
    @classmethod
    def get_txn_by_challanNo(cls,sesion,challanId,industry,consumed_by=None):
        if consumed_by == None:
            print("if ",challanId, industry)
            result = sesion.query(cls).filter_by(challan=challanId,industry=industry).all()
        else:
            result = sesion.query(cls).filter_by(challan=challanId,industry=industry,consumed_by_id=consumed_by).all()
            print("else ")
        print("result ",result)
        if len(result)>0:
            return [cls.searchChild(sesion,obj,industry) for obj in result]
        else:
            return []
    
    @classmethod
    def searchChild(cls,session,obj,industry):
        Json = obj.json()
        result = RAW_MATERIAL_TXN.get_txn_raw_by_challan_no(session,obj.challan,industry,consumed_by_id=obj.txn_id)
        print("result======",result)
        if result != None and len(result)>0:
            raw =    result[0]
            raw['weight'] = raw['weight'] - obj.wastage
            Json['rawMaterial']=raw
        return Json
    def json(self):
        return {
            "txn" : self.txn_id,
            "challan" : self.challan,
            "industry" : self.industry,
            "recdate" : self.dateToJson(),
            "product" : self.product,
            "size" : self.size,
            "qty" : self.qty,
            "wastage" : self.wastage,
            "status":"pristin",
            "txn_type" : self.txn_type
        }
    @classmethod
    def get_semi_by_challan_txn_id(cls,session,txn,challan):
        return session.query(cls).filter_by(txn_id=txn,challan=challan).first()
        
        
class IN2_PROD_STOCK_IN_HAND(TXNBase):
    __tablename__= 'finished_prod_ind2_tb'
    id = Column(Integer,primary_key=True)
    industry = Column(String(15))    
    product = Column(String(40))
    size = Column(String(10))
    stock = Column(Integer)
    cosumed_semi_products = Column(String(100))
    consumed_semi_sizes = Column(String(60))
    counsumed_raw = Column(String(100))
    consumed_raw_sizes = Column(String(60))
    raw_weight_per_product_in_percent = Column(String(60))
    updated_date = Column(TIMESTAMP)
    
    @classmethod
    def get_finished_prod_list(cls,session,industryType):
        result = session.query(cls).filter_by(industry = industryType).all()
      
        size = {}
        for obj in result:
            size_arr = size.get(obj.product,[])
            size_arr.append(obj.size)
            size[obj.product]=size_arr
        return size
    
    @classmethod
    def get_mapped_raw_semi(cls,session,product,size,industryType):
        result = session.query(cls).filter_by(product=product,size=size).one()
        semi_prod = result.cosumed_semi_products.split(",")
        
        semi_prod_size = result.consumed_semi_sizes.split(",")
        
        semi_prod_list =[]
        for prod,size in zip(semi_prod,semi_prod_size):
            semi_prod_list.append({
                "product":prod,
                "size":size
            })
        raw_mat = result.counsumed_raw.split(",")
        raw_mat_size = result.consumed_raw_sizes.split(",")
        raw_weight_per = result.raw_weight_per_product_in_percent.split(",")
       
        raw_material_list = []
        for raw ,size,weight_per_product in zip(raw_mat,raw_mat_size,raw_weight_per):
            raw_material_list.append({
                "material":raw,
                "size":size,
                "weight_per_product":weight_per_product
            })
            
       
        return {
            "stock" : result.stock,
            "consumed_semi_product":semi_prod_list,
            "consumed_raw_material":raw_material_list
        }
    
    @classmethod
    def update_finished_product_stock(cls,session,product,size,qty,action):       
        finishprod = session.query(cls).filter_by(product=product,size=size).one()       
        if action == 'produce':
            finishprod.stock = finishprod.stock + int(qty)
        elif action == 'sell':
            finishprod.stock = finishprod.stock - int(qty)
        finishprod.updated_date = datetime.now(ist)
        session.add(finishprod)
    @classmethod
    def show_data_options(cls):
       
        col = []
        col.append({"data": "id","title": "ID","visible": True})
        col.append({"data": "industry","title": "Industry","visible": True})
        col.append({"data": "product","title": "Product","visible": True})       
        col.append({"data": "size","title": "Size","visible": True})
        col.append({"data": "stock","title": "Available Stock)","visible": True})
        col.append({"data": "ltd","title": "Last Transaction Record Date","visible": True})
        
        return col
    @classmethod
    def get_stock_in_hand(cls,session,industryType):
        result = session.query(cls).filter_by(industry = industryType).all()
        data= [semi.toJson() for semi in result]
        
        return {
            "data":data}
        

    def toJson(self):
        return {
            "id": self.id,
            "industry":self.industry,
            "product": self.product,
            "size":self.size,
            "stock":self.stock,
            "ltd":self.updated_date
        }    
    
    
        

class Finished_PRODUCT_TXN(TXNBase):
    __tablename__ = 'finished_product_txn_tb'
    id = Column(Integer,primary_key=True)
    date = Column(Date)
    challan = Column(String(100))
    industry = Column(String(15))    
    product = Column(String(30))
    size = Column(String(15))
    quantity = Column(Integer)
    txn_type = Column(String(50)) # produce /sell
    vehicle_number = Column(VARCHAR(60))
    description = Column(TEXT)  
    
    @classmethod
    def formateDate(cls,dateObj):
        date= "{0}-{1}-{2}".format(dateObj['day'],dateObj['month'],dateObj['year'])
        return datetime.strptime(date, "%d-%m-%Y").date()
    
    def dateToJson(self):
        return {'day':self.date.day,'month':self.date.month,'year':self.date.year}
        
    
    @classmethod
    def get_txn_by_challanNo(cls,sesion,challanId,industry):
        result = sesion.query(cls).filter_by(challan=challanId,industry=industry).all()
        if len(result)>0:
            return [cls.searchChild(sesion,obj,industry) for obj in result]
        else:
            return []
        
    @classmethod
    def searchChild(cls,session,obj,industry):
        json = obj.Json()
        json['semiProdList']=SEMI_PRODUCT_TXN.get_txn_by_challanNo(session,obj.challan,industry,consumed_by=obj.id)
        json['rawMaterialList']=RAW_MATERIAL_TXN.get_txn_raw_by_challan_no(session,obj.challan,industry,consumed_by_id=obj.id)
        return json
        
        
    @classmethod
    def upsert_finish_txn(cls,obj,json,industry,txn_type):        
        obj.date = cls.formateDate(json['recdate'])
        obj.challan = json['challan']
        obj.industry = industry
        obj.product = json['product']
        obj.size = json['size'] 
        obj.quantity = json['stock']
        obj.txn_type = txn_type
        if txn_type == "sell":
            obj.vehicle_number = json['vehicleNumber']
            obj.description = json['description']
        return obj
    
    @classmethod
    def insert_finishprd_txn(cls,session,json,industry,txn_type,consumed_by=None):
       
        obj = Finished_PRODUCT_TXN()
        obj = cls.upsert_finish_txn(obj,json,industry,txn_type)
        if consumed_by:
            obj.consumed_by_id = consumed_by
        session.add(obj)
        session.flush()
        return obj
        
    @classmethod
    def update_finishprd_txn(cls,session,json,industry,txn_type):
        #obj = session.query(cls).filter_by(challan=,id=).one()
        obj ={}
        session.add(cls.upsert_finish_txn(obj,json,industry,txn_type))
        
    @classmethod
    def get_transaction_report(cls,session,industryType,fromDate,ToDate):
        fromDate= cls.formateDate(fromDate)
        ToDate = cls.formateDate(ToDate)
        
        query = session.query(cls).filter(cls.date.between(fromDate,ToDate),cls.industry==industryType)
        
        result = query.all()
        data = [row.Json() for row in result]
        return {
            "data":data
        }
    
    @classmethod
    def get_Sales_report(cls,session,industryType,fromDate,ToDate):
        fromDate= cls.formateDate(fromDate)
        ToDate = cls.formateDate(ToDate)
       
        query = session.query(cls).filter(cls.date.between(fromDate,ToDate),cls.industry==industryType,cls.txn_type=="sell")
       
        result = query.all()
        data = [row.Json() for row in result]
        return {
            "data":data
        }
    
    @classmethod
    def getSalesData(cls,sesion,challanId,industry):
        print("challanId===",challanId)
        result = sesion.query(cls).filter_by(challan=challanId,industry=industry).all()
        if len(result)>0:
            return [obj.Json() for obj in result]
        else:
            return []
        
        
    def Json(self):
        return {
            "txn" : self.id,
            "recdate": self.dateToJson(),
            "challan" :self.challan,
            "industry" :self.industry, 
            "product" : self.product,
            "size" : self.size,
            "stock" : self.quantity,
            "txn_type" : self.txn_type ,
            "vehicleNumber" : self.vehicle_number,
            "description" : self.description,
            "status":"pristine"
        }
    @classmethod
    def show_data_options(cls):
        col = []
        
        col.append({"data": "txn","title": "ID","visible": True})
        col.append({"data": "industry","title": "Industry","visible": True})
        col.append({"data": "challan","title": "Challan#","visible": True})       
        col.append({"data": "recdate","title": "Record date","visible": True})
        col.append({"data": "product","title": "Product","visible": True})       
        col.append({"data": "size","title": "Size","visible": True})
        col.append({"data": "stock","title": "Quantity","visible": True})
        col.append({"data": "txn_type","title": "Type of Transaction","visible": True})
        
        return  col

    @classmethod
    def show_data_options_sales(cls):
        col = cls.show_data_options()
        col.append({"data": "vehicleNumber","title":"Vehicle#","visible": True})
        col.append({"data": "description","title":"Description","visible": True})
        return col

class USER(TXNBase):
    __tablename__= 'user'
    username = Column(VARCHAR(100),primary_key=True)
    password = Column(VARCHAR(100))
    role = Column(VARCHAR(100))#operator
    industry = Column(VARCHAR(100)) #industry1 #industry2

    @classmethod
    def get_user_by_name(cls,session,username):
       
        query = session.query(cls).filter_by(username=username)
        
        result = query.one()
        
        return result
    
    def json(self):
        return {
            'username':self.username,
            'role':self.role,
            'industry':self.industry
        }
