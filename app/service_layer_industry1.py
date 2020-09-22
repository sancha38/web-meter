from app.models import FINISH_PRODUCT_IND1,RAW_STOCK_IN_HAND
import os
import json
class Finish_Product_IN1_Service():
    @staticmethod
    def get_product_list(session):
        try:
            query = session.query(FINISH_PRODUCT_IND1)
            return [r.product for r in query.all()]
        except Exception as e:
            print("exception ",e)
    @staticmethod
    def get_raw_product_conf(session):
        try:
            w_p_file = os.path.join(os.getenv('dbpath'),'product_wp_map.json')
            print("w_p_file",w_p_file)
            with open(w_p_file) as f:
                data = json.load(f)
            size_map = RAW_STOCK_IN_HAND.listRawItemSize(session,'industry1')
            return {
                "material":list(size_map.keys()),
                "size_map":size_map,
                "w/p": data
                }
        except Exception as e:
            print(e)