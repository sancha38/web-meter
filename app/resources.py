#from flask_restful import Api, Resource
from flask import request, Response, json

from app.models import RawProductConfig,FinishedProductConfig,GlobalProductCfg,RAW_MATERIAL_TXN,Finished_PRODUCT_TXN,RAW_PRODUCT_TXN_MPG
from app.models import RAW_STOCK_IN_HAND,PROD_STOCK_IN_HAND,USER
from sqlalchemy.orm.exc import NoResultFound
import jwt

class RegisterAPI:
    def __init__(self, wsgi_path,application):
        API = "/v1/api/" 
        print(API)
        self.db = application.config['configdb']
        self.txndb = application.config['txndb']
        application.add_url_rule(API+'rawproduct','rawproduct',self.rawproduct, methods=['GET'])
        application.add_url_rule(API+'finishedproduct','finishedproduct',self.finished_Product,methods=['GET'])
        application.add_url_rule(API+'rawproduct','rawproductp',self.post_rawproduct,methods=['POST'])
        application.add_url_rule(API+'finishedproduct','finishedproductp',self.post_finishedproduct,methods=['POST'])
        application.add_url_rule(API+'rawstockinhand','awstockinhandg',self.raw_get_stock_in_hand,methods=['GET'])
        application.add_url_rule(API+'finishprodinhand','finishprodinhandg',self.finish_prod_stock_in_hand,methods=['GET'])
        application.add_url_rule(API+'isales','isales',self.save_sales,methods=['POST'])
        application.add_url_rule(API+"users/authenticate","authenticate",self.login,methods=['POST'])
   
   

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
                encoded = jwt.encode(userObj.json(), 'secret', algorithm='HS256')
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
            return Response(response=json.dumps(body),status=code,mimetype='application/json')
    

    def get_params(self):
        return request.json if (request.method == 'POST') else request.args


    def save_sales(self):
        try:
            print("save_sales")
            sesion = self.txndb.getSession()
            params = self.get_params()
            for d in params:
                finished_txn_obj = Finished_PRODUCT_TXN.insert_prd_txn(d,'consume')
                sesion.add(finished_txn_obj)
                sesion.add(PROD_STOCK_IN_HAND.get_stock_and_update(sesion,finished_txn_obj))
            sesion.commit()
            sesion.flush()
            listd={"message": "successfully saved"}
            code =200
        except Exception as e:
            print(e)
            listd = {"message": "there are some issue"}
            code = 504
        finally:
            self.db.closeSession(sesion)
            return Response(response=json.dumps(listd),status=code,mimetype='application/json')
        

    def finish_prod_stock_in_hand(self):
        try:
            sesion = self.txndb.getSession()
            headerPayload = self.getRequest_header()
            listd = PROD_STOCK_IN_HAND.get_finished_prod_stock_in_hand(sesion,headerPayload['industry'])
            print(listd)
            code =200
        except Exception as e:
            print(e)
            listd = {"error": "there are some issue"}
            code = 504
        finally:
            self.db.closeSession(sesion)
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
            self.db.closeSession(sesion)
            return Response(response=json.dumps(listd),status=code,mimetype='application/json')


    def post_finishedproduct(self):
        try:
            print("post_finishproduct")
            sesion = self.txndb.getSession()
            params = self.get_params()
            headerPayload = self.getRequest_header()
            for d in params:                
                finished_txn_obj = Finished_PRODUCT_TXN.insert_prd_txn(d,'produce')
                sesion.add(finished_txn_obj)
                sesion.add(PROD_STOCK_IN_HAND.get_stock_and_update(sesion,finished_txn_obj))
                raw = d['rawMaterialList']
                for rawtxn in raw:
                    rawtxn['date']=finished_txn_obj.date
                    rawobj = RAW_MATERIAL_TXN.insert_raw_txn(rawtxn,headerPayload['industry'],"consume")
                    objmpg = RAW_PRODUCT_TXN_MPG.insert_mpg(finished_txn_obj.txnid,rawobj.txnid)                    
                    sesion.add(rawobj)
                    sesion.add(objmpg)
                    sesion.add(RAW_STOCK_IN_HAND.get_stock_and_update(sesion,rawobj))
                
            sesion.commit()
            sesion.flush()
            listd={"message": "successfully saved"}
            code =200
        except Exception as e:
            print(e)
            listd = {"message": "there are some issue"}
            code = 504
        finally:
            self.db.closeSession(sesion)
            return Response(response=json.dumps(listd),status=code,mimetype='application/json')
        



                
        

    def post_rawproduct(self):
        try:
            print("post_rawproduct")
            sesion = self.txndb.getSession()
            params = self.get_params()
            headerPayload = self.getRequest_header()
            for d in params:
                obj = RAW_MATERIAL_TXN.insert_raw_txn(d,headerPayload['industry'],"addraw")
                sesion.add(obj)
                sesion.add(RAW_STOCK_IN_HAND.get_stock_and_update(sesion,obj))
                


            sesion.commit()
            sesion.flush()
            listd={"message": "successfully saved"}
            code =200
        except Exception as e:
            print(e)
            listd = {"message": "there are some issue"}
            code = 504
        finally:
            self.db.closeSession(sesion)
            return Response(response=json.dumps(listd),status=code,mimetype='application/json')

        

    def rawproduct(self):
        try:
            sesion = self.db.getSession()
            headerPayload = self.getRequest_header()
            item,itemsizemap = RawProductConfig.listRawItemSize(sesion,headerPayload['industry'])
            listd ={
                "material":item,
                "sizemap":itemsizemap
            }
            
            #print(listd)
            code =200
        except Exception as e:
            #print(e)
            listd = {"error": "there are some issue"}
            code = 504
        finally:
            self.db.closeSession(sesion)
            return Response(response=json.dumps(listd),status=code,mimetype='application/json')

    def finished_Product(self):
        try:
            sesion = self.db.getSession()
            headerPayload = self.getRequest_header()
            listd = FinishedProductConfig.list_finished_product_cfg(sesion,headerPayload['industry'])
            global_cfg = GlobalProductCfg.list_global_product_cfg(sesion)
            listd = {"data":listd , "cfg":global_cfg}
            print(listd)
            code =200
        except Exception as e:
            #print(e)
            listd = {"error": "there are some issue"}
            code = 504
        finally:
            self.db.closeSession(sesion)
            return Response(response=json.dumps(listd),status=code,mimetype='application/json')




"""
class RawProduct(Resource):
    def get(self,params):
        pass

    def post(self,entries):
        pass



class FinishedProduct(Resource):
    def get(self,params):
        pass

    def post (self,entries):
        pass

class SoldProduct(Resource):
    def get(self,params):
        pass

    def post(self,entries):
        pass

class Configuration(Resource):
    
    def get(self,params):
        json = {   "material":"raw/finished",
            "product_label":"stainless steel",
            "product type":{
                "id":{
                    "type":"",
                    "sizes":[]
                }
            }
        }
        return json

class Report(Resource):
    pass
"""