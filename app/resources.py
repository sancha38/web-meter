#from flask_restful import Api, Resource
from flask import request, Response, json

from app.models import RawProductConfig,FinishedProductConfig,GlobalProductCfg

class RegisterAPI:
    def __init__(self, wsgi_path,application):
        API = "/v1/api/" 
        print(API)
        self.db = application.config['configdb']
       
        application.add_url_rule(API+'rawproduct','rawproduct',self.rawproduct, methods=['GET'])
        application.add_url_rule(API+'finishedproduct','finishedproduct',self.finished_Product,methods=['GET'])

    def login(self):
        pass

    def rawproduct(self):
        try:
            sesion = self.db.getSession()
            item,itemsizemap = RawProductConfig.listRawItemSize(sesion,'industry2')
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
            listd = FinishedProductConfig.list_finished_product_cfg(sesion,'industry2')
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