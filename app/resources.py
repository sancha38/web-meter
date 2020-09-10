#from flask_restful import Api, Resource
from flask import request, Response, json

from app.models import GlobalProductCfg,RAW_MATERIAL_TXN,RAW_PRODUCT_TXN_MPG
from app.models import RAW_STOCK_IN_HAND,IN2_PROD_STOCK_IN_HAND,USER,Finished_PRODUCT_TXN
from app.models import Table_manager,SEMI_PRODUCT_IN_HAND,SEMI_PRODUCT_TXN
from sqlalchemy.orm.exc import NoResultFound
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
        application.add_url_rule(API+"searchChallan/Raw/<challanId>","challanRaw",self.challanRaw,methods=['GET'])
        application.add_url_rule(API+"searchChallan/Fin/<challanId>","challanFin",self.challanFin,methods=['GET'])
        application.add_url_rule(API+"searchChallan/Sal/<challanId>","challanSal",self.challanSal,methods=['GET'])

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
        
    def challanRaw(self,challanId):
        try:
            sesion = self.txndb.getSession()
            challanId = 'Raw{}'.format(challanId)
            headerPayload = self.getRequest_header()
            print(challanId)
            listd = RAW_MATERIAL_TXN.get_txn_raw_by_challan_no(sesion,challanId,headerPayload['industry'])
            
            code =200
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
            
            if record_status == 'new':
                query = sesion.query(Table_manager).filter_by(table_name= "sales_tb",industry_type = headerPayload['industry'])
                print(query)
                result = query.one()
                result.generated_id = result.generated_id + 1
                sesion.add(result)
                
            
            for d in params['data']:
                status = d['status']
                if status == "new":                  
                    finiTxn = Finished_PRODUCT_TXN.insert_finishprd_txn(sesion,d,headerPayload['industry'],'sell')
                    print("finished product ",finiTxn.id)
                    IN2_PROD_STOCK_IN_HAND.update_finished_product_stock(sesion,finiTxn.product,finiTxn.size,finiTxn.quantity,finiTxn.txn_type)
                    
                           
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
                query = sesion.query(Table_manager).filter_by(table_name= RAW_STOCK_IN_HAND.__tablename__,industry_type = headerPayload['industry'])
                
                result = query.one()
                result.generated_id = result.generated_id + 1
                sesion.add(result)
              
                
            for d in params['data']:
                status  = d['status']
                if status == 'new':
                    obj = RAW_MATERIAL_TXN.insert_raw_txn(sesion,d,headerPayload['industry'],"addraw")
                    sesion.add(RAW_STOCK_IN_HAND.get_stock_and_update(sesion,obj))                   
                elif status == 'update':
                    obj = RAW_MATERIAL_TXN.update_raw(d,headerPayload['industry'],"addraw")
                    sesion.add(obj)
                    sesion.add(RAW_STOCK_IN_HAND.get_stock_and_update(sesion,obj))
                elif status == 'delete':
                    obj = RAW_MATERIAL_TXN.insert_raw_txn(sesion,d,headerPayload['industry'],"addraw")
                    sesion.add(obj)
                    sesion.add(RAW_STOCK_IN_HAND.get_stock_and_update(sesion,obj))           
            


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
            print(params)
            record_status = params['status']
            
            if record_status == 'new':
                query = sesion.query(Table_manager).filter_by(table_name= SEMI_PRODUCT_IN_HAND.__tablename__,industry_type = headerPayload['industry'])
                
                result = query.one()
                result.generated_id = result.generated_id + 1
                sesion.add(result)
                
            for d in params['data']:
                status  = d['status']
                if status == 'new':
                    d['weight'] = Decimal(d['weight']) +Decimal(d['wastage'])
                    semi_obj = SEMI_PRODUCT_TXN.insert_semi_txn(sesion,d,headerPayload['industry'],"add")
                    obj = RAW_MATERIAL_TXN.insert_raw_txn(sesion,d,headerPayload['industry'],"consume",consumed_by=semi_obj.txn_id)
                    sesion.add(obj)
                    sesion.add(semi_obj)
                    sesion.add(RAW_STOCK_IN_HAND.get_stock_and_update(sesion,obj))
                    SEMI_PRODUCT_IN_HAND.update_semi_product(sesion,semi_obj.product,semi_obj.size,semi_obj.qty,semi_obj.txn_type)
            
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

        
    def getmappedraw(self):
        try:
            sesion = self.txndb.getSession()
            headerPayload = self.getRequest_header()
            params = self.get_params()
            print(params)
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
            size_map = IN2_PROD_STOCK_IN_HAND.get_finished_prod_list(sesion,headerPayload['industry'])
            
            listd = listd ={
                "product":list(size_map.keys()),
                "sizes":size_map
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
                query = sesion.query(Table_manager).filter_by(table_name= "finish_prod_tb",industry_type = headerPayload['industry'])
                
                result = query.one()
                result.generated_id = result.generated_id + 1
                sesion.add(result)
                
            
            for d in params['data']:
                status = d['status']
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
                        sesion.add(RAW_STOCK_IN_HAND.get_stock_and_update(sesion,obj))
                    
                           
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
                listd = IN2_PROD_STOCK_IN_HAND.get_stock_in_hand(sesion,headerPayload['industry'])
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

        