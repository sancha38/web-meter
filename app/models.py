import enum
import sqlite3

import uuid 

from sqlalchemy.exc import IntegrityError
from uuid import uuid4
import uuid

from sqlalchemy import PrimaryKeyConstraint,Boolean ,REAL, Column,TEXT, String, Float, Integer, VARCHAR, TIMESTAMP, BigInteger
from sqlalchemy.ext.declarative import declarative_base

ConfigBase = declarative_base()
TXNBase = declarative_base()
import math
import datetime

class RawProductConfig(ConfigBase):
    __tablename__ = 'raw_product'
    id = Column(Integer,primary_key = True) 
    industry = Column(String(100)) 
    material = Column(String(100))
    size = Column(Float)
    @classmethod
    def list_raw_product_cfg(cls,session,industryType):
        print(session)
        print(industryType)
        query =  session.query(cls).filter_by(industry=industryType).all()
        
        return [ obj.toJson() for obj in query]
    
    @classmethod
    def listRawItemSize(cls,session,industryType):
        result =  session.query(cls.material,cls.size).filter_by(industry=industryType).all()
        itemsizemap = {}
        materials = {}
        for item,size in result:
            try:
                itemlist = itemsizemap[item]
            except Exception:
                itemlist = {}
            materials[item]=item
            itemlist["{0}-{1}".format(item,size)] = size
            itemsizemap[item] = itemlist
            
        
        return materials,itemsizemap

    def toJson(self):
        return {
            "id": self.id,
            "industry": self.industry,
            "material": self.material,
            "size" : self.size
        }

class FinishedProductConfig(ConfigBase):
    __tablename__ = 'finished_product_cfg'
    id = Column(Integer,primary_key = True)
    industry = Column(String(100))
    item_name = Column(String(100))
    unit =Column(String(100))
    cfg = Column(String(100))

    @classmethod
    def list_finished_product_cfg(cls,session,industryType):
        query = session.query(cls).filter_by(industry = industryType).all()
        print(query)
        return [ obj.toJson() for obj in query]
    
    
    def toJson(self):
        return {
            "id": self.id,
            "industry": self.industry,
            "item_name": self.item_name,
            "unit" : self.unit,
            "product_type": self.cfg
        }

class GlobalProductCfg(ConfigBase):
    __tablename__ = 'global_cfg'
    id = Column(Integer,primary_key = True)
    product_type = Column(String(100))
    raw_material_arr = Column(String(100))
    
    @classmethod
    def list_global_product_cfg(cls,session):
        query = session.query(cls).all()
        print(query)
        cfgJson = {}
        for obj in query:
            cfgJson[obj.product_type]=obj.raw_material_arr.split(",")
        return cfgJson
    
    def toJson(self):
        return 

class RAW_MATERIAL_TXN(TXNBase):
    __tablename__ = 'raw_txn_tb'
    txnid = Column(String(100),primary_key= True)
    date = Column(String(100))
    raw_material = Column(String(100))
    weight = Column(Float)
    txn_type = Column(String(50)) # consume / add

    @classmethod
    def insert_raw_txn(cls,json,industry,txn_type):
        obj = RAW_MATERIAL_TXN()
        obj.txnid = "Raw{0}{1}".format(uuid.uuid4().hex[:6].upper(),"".join(json['date'].split("/")))
        obj.date = json['date']
        obj.raw_material = json['material']
        obj.weight = json['weight']
        obj.txn_type = txn_type
        return obj


class Finished_PRODUCT_TXN(TXNBase):
    __tablename__ = 'finished_product_txn_tb'
    txnid = Column(String(100),primary_key=True)
    date = Column(String(100))
    product_name = Column(String(100))
    weight = Column(String(100))
    txn_type = Column(String(50)) # produce /sell
    nos = Column(String(30))

    @classmethod
    def insert_prd_txn(cls,json,txn_type):
        obj = Finished_PRODUCT_TXN()
        obj.txnid = "Prd{0}{1}".format(uuid.uuid4().hex[:6].upper(),"".join(json['date'].split("/")))
        obj.date = json['date']
        obj.product_name = json['product']
        if json['unit'] == 'KGS.':
            obj.weight = json['value']
        else:
            obj.nos = json['value']
        obj.txn_type = txn_type #produce
        return obj

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

class PROD_STOCK_IN_HAND(TXNBase):
    __tablename__= 'finished_product_stock_tb'
    product_code = Column(VARCHAR(100),primary_key=True)
    industry = Column(String(100))
    product = Column(String(100))
    available_stock = Column(Integer)
    units = Column(String(100))
    updated_date = Column(TIMESTAMP)
    @classmethod
    def get_finished_prod_stock_in_hand(cls,session,industryType):
        query = session.query(cls).filter_by(industry = industryType).all()
        print(query)
        
        stockinhand = {}
        for obj in query:
            obj.toJson(stockinhand) 
        return stockinhand
    
    def toJson(self,stock_in_hand_dict):
        if self.product in stock_in_hand_dict:
            codelist = stock_in_hand_dict[self.product]
        else:
             codelist = []
        codelist.append({
            "item": self.product,
            "code":self.product_code,
            "stock":self.available_stock,
            "unit":self.units
            })
        stock_in_hand_dict[self.product]= codelist
    
    @classmethod
    def get_stock_and_update(cls,session,obj):
        result = session.query(cls).filter_by(product_code=obj.product_name).one()
        print(result)
        print(result.units)
        if result.units == 'KGS.':
            stock = float(obj.weight)
        else:
            stock = float(obj.nos)
        print(stock)
        print(obj.txn_type)
        if obj.txn_type == "produce":  
            print("obj.txn_type : produce")       
            result.available_stock = result.available_stock + stock
        elif obj.txn_type == "consume":
            print("obj.txn_type : consume")
            result.available_stock = result.available_stock - stock
        return result
               

class RAW_STOCK_IN_HAND(TXNBase):
    __tablename__= 'raw_stock_sih'
    material_code = Column(VARCHAR(100),primary_key=True)
    industry = Column(String(100))
    material = Column(String(100))
    size = Column(Integer)
    available_weight = Column(Float)
    unit = Column(String(100))
    updated_date = Column(TIMESTAMP)

    @classmethod
    def get_raw_stock_in_hand(cls,session,industryType):
        query = session.query(cls).filter_by(industry = industryType).all()
        print(query)
        stockinhand = {}
        for obj in query:
            obj.toJson(stockinhand) 
        return stockinhand
    
    def toJson(self,stock_in_hand_dict):
        if self.material in stock_in_hand_dict:
            codelist = stock_in_hand_dict[self.material]
        else:
             codelist = []
        codelist.append({
            "item": self.material,
            "code":self.material_code,
            "stock":self.available_weight,
            "unit":self.unit
            })
        stock_in_hand_dict[self.material]= codelist
    
    
    @classmethod
    def upate_stock_in_hand(cls,session):
        pass

    @classmethod
    def get_stock_and_update(cls,session,obj):
        result = session.query(cls).filter_by(material_code=obj.raw_material).one()
        print(result)
        if obj.txn_type == "addraw":
            print(result.available_weight,type(result.available_weight))
            print(obj.weight,type(obj.weight))
            result.available_weight = result.available_weight + float(obj.weight)
        elif obj.txn_type == "consume":
            result.available_weight = result.available_weight - float(obj.weight)
        return result


class USER(TXNBase):
    __tablename__= 'user'
    id = Column(Integer,primary_key=True)
    username = Column(VARCHAR(100))
    password = Column(VARCHAR(100))
    role = Column(VARCHAR(100))#operator
    industry = Column(VARCHAR(100)) #industry1 #industry2

    @classmethod
    def get_user_by_name(cls,session,username):
        result = session.query(cls).filter_by(username=username).one()
        return result
    
    def json(self):
        return {
            'username':self.username,
            'role':self.role,
            'industry':self.industry
        }
