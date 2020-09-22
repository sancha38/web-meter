#from flask_restful import Api, Resource
from flask import request, Response, json

from app.models import GlobalProductCfg,RAW_MATERIAL_TXN,RAW_PRODUCT_TXN_MPG
from app.models import RAW_STOCK_IN_HAND,IN2_PROD_STOCK_IN_HAND,USER,Finished_PRODUCT_TXN
from app.models import Table_manager,SEMI_PRODUCT_IN_HAND,SEMI_PRODUCT_TXN,FINISH_PRODUCT_IND1
from app.service_layer import Finish_Product_Service,Sales_Service
from sqlalchemy.orm.exc import NoResultFound


from app.service_layer_industry1 import Finish_Product_IN1_Service
from decimal import Decimal,getcontext
getcontext().prec = 3
import sys, traceback
import jwt
conf = {
                "raw": RAW_STOCK_IN_HAND.__tablename__,
                "semifinished":SEMI_PRODUCT_IN_HAND.__tablename__,
                "sales":"sales_tb",
                "finishprod":"finish_prod_tb"
    }

import time
from datetime import datetime

class RegisterAPI:
    def __init__(self, wsgi_path,application):
        API = "/v1/api/" 
        print(API)
        self.txndb = application.config['txndb']
        application.add_url_rule(API+'challan/<action>',"challan",self.get_unique_challan,methods=['GET'])
        application.add_url_rule(API+'rawproduct','rawproduct',self.rawproduct, methods=['GET'])
        application.add_url_rule(API+'semifinishedoduct','semifinishedoduct',self.getsemifinished, methods=['GET'])
        application.add_url_rule(API+'mappedraw','mappedraw',self.getmappedraw, methods=['POST'])
        application.add_url_rule(API+'semifinishedoduct','semifinishedoductp',self.save_semi_product,methods=['POST'])
       
        application.add_url_rule(API+'finishedproduct','finishedproduct',self.finished_Product,methods=['GET'])
        application.add_url_rule(API+'finishedcfg','finishedcfg',self.mapped_raw_semi_product,methods=['POST'])
       
        application.add_url_rule(API+'rawproduct','rawproductp',self.post_rawproduct,methods=['POST'])
        application.add_url_rule(API+'finishedproduct','finishedproductp',self.post_finishedproduct,methods=['POST'])
        application.add_url_rule(API+'isales','isales',self.save_sales,methods=['POST'])
        application.add_url_rule(API+"users/authenticate","authenticate",self.login,methods=['POST'])
        application.add_url_rule(API+"searchChallan/<ctype>/<challanId>","challanRaw",self.challanRaw,methods=['GET'])
        
        application.add_url_rule(API+"reportoption","reportoption",self.getReportSearchOption,methods=['GET'])

        application.add_url_rule(API+"stockinhand/<id>","stockinhand/<id>",self.fetchStockinHand,methods=['GET'])
        application.add_url_rule(API+"dataoptions/<id>/<lookingforId>","dataoptions/<id>",self.getDataOptions,methods=['GET'])
        application.add_url_rule(API+"transactions/<id>","transactions/<id>",self.getTransactions,methods=['POST'])
    def get_unique_challan(self,action):
        try:
            session = self.txndb.getSession()
            headerPayload = self.getRequest_header()            
          
            table_name = conf[action]          
            nextid = Table_manager.get_next_id(session,table_name,headerPayload['industry'])
            resp = {"challan_no":nextid}
            code =200
        except Exception as e:
            print(e)
            resp = {"error": "there are some issue"}
            code = 504
        finally:
            self.txndb.closeSession(session)
            return Response(response=json.dumps(resp),status=code,mimetype='application/json')
        
    def challanRaw(self,ctype,challanId):
        try:
            sesion = self.txndb.getSession()
            listd =[]
            headerPayload = self.getRequest_header()
            if ctype == 'RAW':
                listd = RAW_MATERIAL_TXN.get_txn_raw_by_challan_no(sesion,challanId,headerPayload['industry'])
                code =200
            elif ctype =='FINIS':
                listd = Finished_PRODUCT_TXN.get_txn_by_challanNo(sesion,challanId,headerPayload['industry'])
                code =200
            elif ctype =='SEMI':
                listd = SEMI_PRODUCT_TXN.get_txn_by_challanNo(sesion,challanId,headerPayload['industry'])
                print("listd======",listd)
                code = 200
            elif ctype =='SALE':
                listd = Finished_PRODUCT_TXN.getSalesData(sesion,challanId,headerPayload['industry'])                
                code =200
            else:
                code =404
            
                
            
            
        except Exception as e:
            print(e)
            listd = {"error": "there are some issue"}
            code = 504
        finally:
            self.txndb.closeSession(sesion)
            return Response(response=json.dumps(listd),status=code,mimetype='application/json')
        
        
        

    def challanFin(self,challanId):
        challanId = 'Fin{}'.format(challanId)

    def challanSal(self,challanId):
        challanId = 'Sal{}'.format(challanId)


    def getRequest_header(self):
        header = request.headers
        print(header)
        authorization = request.headers.get("Authorization")
        token = authorization.split(" ")[1]
        payload = jwt.decode(token,key='secret', algorithm="HS256")
        return payload

    def login(self):
        try:
            sesion = self.txndb.getSession()
            params = self.get_params()
            print("login ",params)
            username = params['username']
            password = params['password']
            userObj = USER.get_user_by_name(sesion,username)
            if userObj.password == password:
                encoded = jwt.encode(userObj.json(), 'secret', algorithm='HS256').decode('utf-8')
                body = userObj.json()
                body['token']= encoded
                body['industry']= userObj.industry
                
                code =200
            else:
                body = { "error": { "message": 'Username or password is incorrect' } }
                code = 400
        except NoResultFound:
            body = { "error": { "message": 'Username or password is incorrect' } }
            code = 400
        except Exception as e:
            print(e)
            body = { "error": { "message": 'there are backend issue' } }
            code = 500
        finally:
            self.txndb.closeSession(sesion)
            return Response(response=json.dumps(body),status=code,mimetype='application/json')
    

    def get_params(self):
        return request.json if (request.method == 'POST') else request.args


    def save_sales(self):
        try:
            sesion = self.txndb.getSession()
            params = self.get_params()

            headerPayload = self.getRequest_header()
            print(params)
            record_status = params['status']
            industry = headerPayload['industry']
            
            if record_status == 'new':
                Table_manager.increase_id(sesion,'sales_tb',industry)
                
                #sesion.add(result)
                for sales_txn in params['data']:
                    Sales_Service.insert_sales(sesion,sales_txn,industry)
                    
            
            elif record_status == 'update':
                for sales_txn in params['data']:
                    status  = sales_txn['status']
                    if status == 'new':
                        Sales_Service.insert_sales(sesion,sales_txn,industry)
                    elif status == 'update':
                        Sales_Service.update_sales(sesion,sales_txn,industry)
                for sales_txn in params['delete']:
                    Sales_Service.delete_sales(sesion,sales_txn,industry)
            sesion.commit()
            sesion.flush()
            
            
            listd={"message": "successfully saved"}
            code =200
        except:
            print("Exception in user code:")
            print('-'*60)
            traceback.print_exc(file=sys.stdout)
            print('-'*60)

            listd = {"message": "there are some issue"}
            code = 504
        finally:
            self.txndb.closeSession(sesion)
            return Response(response=json.dumps(listd),status=code,mimetype='application/json')
        

    def raw_get_stock_in_hand(self):
        try:
            sesion = self.txndb.getSession()
            headerPayload = self.getRequest_header()
            listd = RAW_STOCK_IN_HAND.get_raw_stock_in_hand(sesion,headerPayload['industry'])            
            print(listd)
            code =200
        except Exception as e:
            print(e)
            listd = {"error": "there are some issue"}
            code = 504
        finally:
            self.txndb.closeSession(sesion)
            return Response(response=json.dumps(listd),status=code,mimetype='application/json')

    def post_rawproduct(self):
        try:
            print("post_rawproduct")
            sesion = self.txndb.getSession()
            params = self.get_params()

            headerPayload = self.getRequest_header()
            print(params)
            record_status = params['status']
            
            
                    
            if record_status == 'new':
                Table_manager.increase_id(sesion,RAW_STOCK_IN_HAND.__tablename__,headerPayload['industry'])
                
                #sesion.add(result)
                for d in params['data']:
                    self.raw_insert_new(sesion,d,headerPayload['industry'])
                    
            
            elif record_status == 'update':
                for d in params['data']:
                    status  = d['status']
                    if status == 'new':
                        self.raw_insert_new(sesion,d,headerPayload['industry'])
                    elif status == 'update':
                        self.raw_update(sesion,d,headerPayload['industry'])
                for d in params['delete']:
                    txn_id = d['txn']
                    challan = d['challan']
                    self.raw_delete(sesion,txn_id,challan,headerPayload['industry'])
            sesion.commit()
            #sesion.flush()
            listd={"message": "successfully saved"}
            code =200
        except Exception as e:
            print("exception",e)
            sesion.rollback()
            listd = {"message": "there are some issue"}
            code = 504
        finally:
            self.txndb.closeSession(sesion)
            return Response(response=json.dumps(listd),status=code,mimetype='application/json')

        
    def raw_insert_new(self,session,data,industry):
        obj = RAW_MATERIAL_TXN.insert_raw_txn(session,data,industry,"addraw")        
        session.add(RAW_STOCK_IN_HAND.get_stock_and_update(session,obj,Decimal(obj.weight)))  
    
    def raw_delete(self,session,txn_id,challan,industry,consumed_by_id=None):
        print("delete ",txn_id,challan)
        obj = RAW_MATERIAL_TXN.get_raw_txn(session,txn_id,challan,industry)
        print("objobj ",obj)
        RAW_STOCK_IN_HAND.delete_stock_in_hand(session,obj,Decimal(obj.weight))
        print("delete ",txn_id,challan)
        session.delete(obj)
        
        
    
    def raw_update(self,session,data,industry):
        txn_id = data['txn']
        challan = data['challan']
        last_txn_weight, obj = RAW_MATERIAL_TXN.update_raw(session,txn_id,challan,data)
        net_updated_weight = Decimal(obj.weight) -last_txn_weight
        session.add(RAW_STOCK_IN_HAND.get_stock_and_update(session,obj,net_updated_weight))  
    
        print("raw_update ",data)
    
    def rawproduct(self):
        try:
            sesion = self.txndb.getSession()
            headerPayload = self.getRequest_header()
            size_map = RAW_STOCK_IN_HAND.listRawItemSize(sesion,headerPayload['industry'])
            listd ={
                "material":list(size_map.keys()),
                "size_map":size_map
            }
            
            #print(listd)
            code =200
        except Exception as e:
            print(e)
            listd = {"error": "there are some issue"}
            code = 504
        finally:
            self.txndb.closeSession(sesion)
            return Response(response=json.dumps(listd),status=code,mimetype='application/json')

    def getsemifinished(self):
        try:
            sesion = self.txndb.getSession()
            headerPayload = self.getRequest_header()
            product_map = SEMI_PRODUCT_IN_HAND.get_semi_finished_product_map(sesion,headerPayload['industry'])
            listd = {
                 "product":list(product_map.keys()),
                "sizes":product_map
            }
            code =200
        except Exception as e:
            print(e)
            listd = {"error": "there are some issue"}
            code = 504
        finally:
            self.txndb.closeSession(sesion)
            return Response(response=json.dumps(listd),status=code,mimetype='application/json')

    def save_semi_product(self):
        try:
            sesion = self.txndb.getSession()
            params = self.get_params()

            headerPayload = self.getRequest_header()
            #print(params)
            record_status = params['status']
            
            if record_status == 'new':
                Table_manager.increase_id(sesion,SEMI_PRODUCT_IN_HAND.__tablename__,headerPayload['industry'])
                
                #sesion.add(result)
                for d in params['data']:
                    self.semi_insert_new(sesion,d,headerPayload['industry'])
                    
         
            elif record_status == 'update':
                for d in params['data']:
                    status  = d['status']
                    if status == 'new':
                        self.semi_insert_new(sesion,d,headerPayload['industry'])
                    elif status == 'update':
                        self.update_semi(sesion,d,headerPayload['industry'])
                for d in params['delete']:                    
                    
                    self.delete_semi(sesion,d,headerPayload['industry'])
                
           
            print("comming here")
            sesion.commit()
            sesion.flush()
            listd={"message": "successfully saved"}
            code =200
        except Exception as e:
            print("exception",e)
            listd = {"message": "there are some issue"}
            code = 504
        finally:
            self.txndb.closeSession(sesion)
            return Response(response=json.dumps(listd),status=code,mimetype='application/json')

    def semi_insert_new(self,sesion,data,industry):
            raw = data['rawMaterial']
            raw['weight'] = Decimal(raw['weight']) +Decimal(data['wastage'])                    
            semi_obj = SEMI_PRODUCT_TXN.insert_semi_txn(sesion,data,industry,"add")
            print("semi_obj",semi_obj)
            obj = RAW_MATERIAL_TXN.insert_raw_txn(sesion,raw,industry,"consume",consumed_by=semi_obj.txn_id)
            sesion.add(obj)
            sesion.add(semi_obj)
            sesion.add(RAW_STOCK_IN_HAND.get_stock_and_update(sesion,obj,Decimal(obj.weight)))
            SEMI_PRODUCT_IN_HAND.update_semi_product(sesion,semi_obj.product,semi_obj.size,semi_obj.qty,semi_obj.txn_type)
            
        
    
    def update_semi(self,session,data,industry):
        print("for update =========",data)
        txn_id = data['txn']
        challan = data['challan']
        raw = data['rawMaterial']
        oldTxnObj = SEMI_PRODUCT_TXN.get_semi_by_challan_txn_id(session,txn_id,challan)
        shobjold = SEMI_PRODUCT_IN_HAND.get_semi_product(session,oldTxnObj.product,oldTxnObj.size,oldTxnObj.industry)
        shobjold.stock = shobjold.stock - int(oldTxnObj.qty)
        #session.update(shobjold)
        oldTxnObj =SEMI_PRODUCT_TXN.setObj (oldTxnObj,data,oldTxnObj.industry,oldTxnObj.txn_type)
        
        newSemi = SEMI_PRODUCT_IN_HAND.get_semi_product(session,oldTxnObj.product,oldTxnObj.size,oldTxnObj.industry)
        newSemi.stock = newSemi.stock + int(oldTxnObj.qty)
        
        raw = data['rawMaterial']
        raw['weight'] = Decimal(raw['weight']) +Decimal(oldTxnObj.wastage) 
        rawOldObj = RAW_MATERIAL_TXN.get_raw_txn(session,raw['txn'],challan,industry,oldTxnObj.txn_id)
        updated = RAW_STOCK_IN_HAND.delete_stock_in_hand(session,rawOldObj,Decimal(rawOldObj.weight),consumed_by=oldTxnObj.txn_id)
        rawOldObj = RAW_MATERIAL_TXN.setObj(rawOldObj,raw,rawOldObj.industry,rawOldObj.txn_type)
        newR = RAW_STOCK_IN_HAND.get_stock_and_update(session,rawOldObj,Decimal(rawOldObj.weight))
              
        
    
    def delete_semi(self,session,data,industry):
        txn_id = data['txn']
        challan = data['challan']
        raw = data['rawMaterial']
        oldTxnObj = SEMI_PRODUCT_TXN.get_semi_by_challan_txn_id(session,txn_id,challan)
        shobjold = SEMI_PRODUCT_IN_HAND.get_semi_product(session,oldTxnObj.product,oldTxnObj.size,oldTxnObj.industry)
        shobjold.stock = shobjold.stock - int(oldTxnObj.qty)
        rawOldObj = RAW_MATERIAL_TXN.get_raw_txn(session,raw['txn'],challan,industry,oldTxnObj.txn_id)
        updated = RAW_STOCK_IN_HAND.delete_stock_in_hand(session,rawOldObj,Decimal(rawOldObj.weight),consumed_by=oldTxnObj.txn_id)
        session.delete(rawOldObj)
        session.delete(oldTxnObj)
        
        
    def getmappedraw(self):
        try:
            sesion = self.txndb.getSession()
            headerPayload = self.getRequest_header()
            params = self.get_params()
            #print(params)
            cfg = SEMI_PRODUCT_IN_HAND.get_semi_product_cfg(sesion,params['product'],params['size'])
            code = 200
        except Exception as e:
            print(e)
            cfg = {"error": "there are some issue"}
            code = 504
        finally:
            self.txndb.closeSession(sesion)
            return Response(response=json.dumps(cfg),status=code,mimetype='application/json')

            
        
    def finished_Product(self):
        try:
            sesion = self.txndb.getSession()
            headerPayload = self.getRequest_header()
            industry = headerPayload['industry']
            print("inside finished product",industry)
             
            if industry == 'industry2':
                size_map = IN2_PROD_STOCK_IN_HAND.get_finished_prod_list(sesion,industry)
                listd ={
                    "product":list(size_map.keys()),
                    "sizes":size_map}
            elif industry =='industry1':
                print("innside else ==")
                plist = Finish_Product_IN1_Service.get_product_list(sesion)
                raw = Finish_Product_IN1_Service.get_raw_product_conf(sesion)
                print("plist-==",plist)              
                listd ={
                   "product": plist,
                   "raw":raw
                }
            code =200
        except Exception as e:
            #print(e)
            listd = {"error": "there are some issue"}
            code = 504
        finally:
            self.txndb.closeSession(sesion)
            return Response(response=json.dumps(listd),status=code,mimetype='application/json')


    def mapped_raw_semi_product(self):
        try:
            sesion = self.txndb.getSession()
            headerPayload = self.getRequest_header()
            params = self.get_params()
            
            listd = IN2_PROD_STOCK_IN_HAND.get_mapped_raw_semi(sesion,params['product'],params['size'],headerPayload['industry'])
            
            code =200
        except Exception as e:
            #print(e)
            listd = {"error": "there are some issue"}
            code = 504
        finally:
            self.txndb.closeSession(sesion)
            return Response(response=json.dumps(listd),status=code,mimetype='application/json')

    def post_finishedproduct(self):
        try:
            print("post_rawproduct")
            sesion = self.txndb.getSession()
            params = self.get_params()

            headerPayload = self.getRequest_header()           
            record_status = params['status']          

            if record_status == 'new':
                Table_manager.increase_id(sesion,"finish_prod_tb",headerPayload['industry'])
                for d in params['data']:
                    Finish_Product_Service.insert_finish_product_txn(sesion,d,headerPayload['industry'])
            elif record_status == 'update':
                for d in params['data']:
                    status  = d['status']
                    if status == 'new':
                        Finish_Product_Service.insert_finish_product_txn(sesion,d,headerPayload['industry'])
                    elif status == 'update':
                        Finish_Product_Service.update_finish_product(sesion,d,headerPayload['industry'])
                for d in params['delete']:
                    Finish_Product_Service.delete_finish_product(sesion,d,headerPayload['industry'])

           
            sesion.flush()
            sesion.commit()
            
            listd={"message": "successfully saved"}
            code =200
        except:
            print("Exception in user code:")
            print('-'*60)
            traceback.print_exc(file=sys.stdout)
            print('-'*60)

            listd = {"message": "there are some issue"}
            code = 504
        finally:
            self.txndb.closeSession(sesion)
            return Response(response=json.dumps(listd),status=code,mimetype='application/json')
        
        

    def getReportSearchOption(self):
        #sesion = self.txndb.getSession()
        #params = self.get_params()
        headerPayload = self.getRequest_header()
        industry = headerPayload['industry']
        reportType =[{"item_id": 1, "item_text": 'Raw Material' },
                     { "item_id": 3, "item_text": 'Finished Product' }]

        if industry == "industry2":
            reportType.append({ "item_id": 2, "item_text": 'Semi Finished Product' })
        
        lookingForOption = [{"item_id": 1, "item_text":'Stock In Hand'},{"item_id": 2, "item_text":'Transactions'}]
        item2reportType = list(reportType)
        item2reportType.append({ "item_id": 4, "item_text": 'Sales' })
      
        listd= {
            "options_search1" : lookingForOption,
            "reportType":{
                1: reportType,
                2: item2reportType   
            }
            
        }
        return Response(response=json.dumps(listd),status=200,mimetype='application/json')
    
    def fetchStockinHand(self,id):
        try:
            sesion = self.txndb.getSession()
            headerPayload = self.getRequest_header()
            listd ={}
            print('id ',id)
            if id == '1':
                
                listd = RAW_STOCK_IN_HAND.get_raw_stock_in_hand(sesion,headerPayload['industry'])
                
            elif id =='2':
                listd = SEMI_PRODUCT_IN_HAND.get_stock_in_hand(sesion,headerPayload['industry'])
            elif id =='3':
                if headerPayload['industry'] == 'industry2':
                    listd = IN2_PROD_STOCK_IN_HAND.get_stock_in_hand(sesion,headerPayload['industry'])
                else:
                    listd=FINISH_PRODUCT_IND1.get_stock_in_hand(sesion)
            code =200
        except Exception as e:
            print(e)
            listd = {"error": "there are some issue"}
            code = 504
        finally:
            self.txndb.closeSession(sesion)
            return Response(response=json.dumps(listd),status=code,mimetype='application/json')

    def  getDataOptions(self,id,lookingforId):
        print("id ~{0} lookingforId {1} ".format(id,lookingforId))
        try:
            if lookingforId =='1':
                if id == '1':
                    options = RAW_STOCK_IN_HAND.show_data_options()
                elif id =='2':
                    options = SEMI_PRODUCT_IN_HAND.show_data_options()
                elif id =='3':
                    options = IN2_PROD_STOCK_IN_HAND.show_data_options()
            #options['ajax']="v1/api/stockinhand/{}".format(id)
            elif lookingforId =='2':
                if id == '1':
                    options = RAW_MATERIAL_TXN.show_data_options()
                elif id =='2':
                    options = SEMI_PRODUCT_TXN.show_data_options()
                elif id =='3':
                    options = Finished_PRODUCT_TXN.show_data_options()
                elif id =='4':
                    options = Finished_PRODUCT_TXN.show_data_options_sales()
                    
                
            code =200
        except Exception as e:
            print(e)
            code = 504
            options ={}
        finally:
            return Response(response=json.dumps(options),status=code,mimetype='application/json')

    def getTransactions(self,id):
        try:
            sesion = self.txndb.getSession()
            headerPayload = self.getRequest_header()
            listd ={}
            params = self.get_params()
            fromDate = params['fromDate']
            toDate = params['toDate']
            print('id ',id)
            if id == '1':
                print("entered")
                listd = RAW_MATERIAL_TXN.get_transaction_report(sesion,headerPayload['industry'],fromDate,toDate)
            elif id =='2':
                listd = SEMI_PRODUCT_TXN.get_transaction_report(sesion,headerPayload['industry'],fromDate,toDate)
            elif id =='3':
                listd = Finished_PRODUCT_TXN.get_transaction_report(sesion,headerPayload['industry'],fromDate,toDate)
            elif id =='4':
                listd =Finished_PRODUCT_TXN.get_Sales_report(sesion,headerPayload['industry'],fromDate,toDate)
                
            code =200
        except Exception as e:
            print(e)
            listd = {"error": "there are some issue"}
            code = 504
        finally:
            self.txndb.closeSession(sesion)
            return Response(response=json.dumps(listd),status=code,mimetype='application/json')

    
    def post_finishedproduct_stream(self):
        try:
            print("post_rawproduct")
            sesion = self.txndb.getSession()
            params = self.get_params()

            headerPayload = self.getRequest_header()
           
            record_status = params['status']
            
            if record_status == 'new':
                query = sesion.query(Table_manager).filter_by(table_name= "finish_prod_tb",industry_type = headerPayload['industry'])
                
                result = query.one()
                result.generated_id = result.generated_id + 1
                sesion.add(result)
            
    

            for d in params['data']:
                status = d['status']
                start = time.process_time()

                if status == "new":                   
                    
                    #prod txn insert
                    #update finish prod
                    finiTxn = Finished_PRODUCT_TXN.insert_finishprd_txn(sesion,d,headerPayload['industry'],'produce')
                    
                    IN2_PROD_STOCK_IN_HAND.update_finished_product_stock(sesion,finiTxn.product,finiTxn.size,finiTxn.quantity,finiTxn.txn_type)
                    #semi txn insert
                    semi_prod_list = d['semiProdList']
                    for semi_prod in semi_prod_list:
                        semi_obj = SEMI_PRODUCT_TXN.insert_semi_txn(sesion,semi_prod,headerPayload['industry'],"deduct",consumed_by=finiTxn.id)
                        
                        SEMI_PRODUCT_IN_HAND.update_semi_product(sesion,semi_obj.product,semi_obj.size,semi_obj.qty,semi_obj.txn_type)
            
                    #raw prd insert
                    raw_material_list = d['rawMaterialList']
                    for raw in raw_material_list:
                        obj = RAW_MATERIAL_TXN.insert_raw_txn(sesion,raw,headerPayload['industry'],"consume",consumed_by=finiTxn.id)                    
                        sesion.add(RAW_STOCK_IN_HAND.get_stock_and_update(sesion,obj,Decimal(obj.weight)))
                    
                print("timeTaken {0} for {1}".format(time.process_time() - start,loop))
                loop = loop+1             
            sesion.flush()
            sesion.commit()
            
            listd={"message": "successfully saved"}
            code =200
        except:
            print("Exception in user code:")
            print('-'*60)
            traceback.print_exc(file=sys.stdout)
            print('-'*60)

            listd = {"message": "there are some issue"}
            code = 504
        finally:
            self.txndb.closeSession(sesion)
            return Response(response=json.dumps(listd),status=code,mimetype='application/json')
        