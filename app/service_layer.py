from app.models import GlobalProductCfg,RAW_MATERIAL_TXN,RAW_PRODUCT_TXN_MPG
from app.models import RAW_STOCK_IN_HAND,IN2_PROD_STOCK_IN_HAND,USER,Finished_PRODUCT_TXN
from app.models import Table_manager,SEMI_PRODUCT_IN_HAND,SEMI_PRODUCT_TXN
from app.models import FINISH_PRODUCT_IND1
from decimal import Decimal

class Finish_Product_Service:
    
    @staticmethod
    def insert_finish_product_txn(session,finish_prd_txn,industry):
        #prod txn insert
        # update finish prod
        if industry == 'industry2':
            Finish_Product_Service.save_finish_ind2(session,finish_prd_txn,industry)
        else:
            Finish_Product_Service.save_finish_ind1(session,finish_prd_txn,industry)
    
    @staticmethod
    def save_finish_ind1(session,finish_prd_txn,industry):
        print("================finish_prd_txn===========")
        print(finish_prd_txn)
        finiTxn = Finished_PRODUCT_TXN.insert_finishprd_txn(session,finish_prd_txn,industry,'produce')
        finiprod = session.query(FINISH_PRODUCT_IND1).filter_by(product=finiTxn.product).one()
        finiprod.stock = finiprod.stock + int(finiTxn.quantity)
        
        for raw in finish_prd_txn['rawMaterialList']:
            obj = RAW_MATERIAL_TXN.insert_raw_txn(session,raw,industry,"consume",consumed_by=finiTxn.id)                    
            material = obj.material.split(" ")[1]
            print("====material=== ",material)
            result = session.query(RAW_STOCK_IN_HAND).filter_by(material_name=material,size=obj.size).one()
            result.available_weight = result.available_weight - Decimal(obj.weight)
    
    @staticmethod
    def save_finish_ind2(session,finish_prd_txn,industry):
        finiTxn = Finished_PRODUCT_TXN.insert_finishprd_txn(session,finish_prd_txn,industry,'produce')
        IN2_PROD_STOCK_IN_HAND.update_finished_product_stock(session,finiTxn.product,finiTxn.size,finiTxn.quantity,finiTxn.txn_type)
        for semi_prod in finish_prd_txn['semiProdList']:
            semi_obj = SEMI_PRODUCT_TXN.insert_semi_txn(session,semi_prod,industry,"deduct",consumed_by=finiTxn.id)
            SEMI_PRODUCT_IN_HAND.update_semi_product(session,semi_obj.product,semi_obj.size,semi_obj.qty,semi_obj.txn_type)
            
        for raw in finish_prd_txn['rawMaterialList']:
            obj = RAW_MATERIAL_TXN.insert_raw_txn(session,raw,industry,"consume",consumed_by=finiTxn.id)                    
            session.add(RAW_STOCK_IN_HAND.get_stock_and_update(session,obj,Decimal(obj.weight)))
                    
    @staticmethod
    def update_finish_product(session,finish_prd_txn,industry):
       
        if industry == 'industry2':
            Finish_Product_Service.update_fini_ind2(session,finish_prd_txn,industry)
        else:
            Finish_Product_Service.update_fini_ind1(session,finish_prd_txn,industry)
    
    @staticmethod
    def update_fini_ind1(session,finish_prd_txn,industry):
        challan = finish_prd_txn['challan']
        txn_number = finish_prd_txn['txn']
        product = finish_prd_txn['product']
        finitxn =session.query(Finished_PRODUCT_TXN).filter_by(challan=challan,id=txn_number).one()
        finiprod = session.query(FINISH_PRODUCT_IND1).filter_by(product=finitxn.product).one()
        finiprod.stock = finiprod.stock - int(finitxn.quantity)
        if finitxn.product == product:
            finitxn.quantity =  int(finish_prd_txn['stock'])
            finiprod.stock = finiprod.stock + int(finitxn.quantity)
        else:
            finiTxn =Finished_PRODUCT_TXN.upsert_finish_txn(finitxn,finish_prd_txn,industry,'produce')
            finiprodnew = session.query(FINISH_PRODUCT_IND1).filter_by(product=finitxn.product).one()
            finiprodnew.stock = finiprodnew.stock + int(finiprodnew.quantity)
            session.add(finiprodnew)
        
        for raw in finish_prd_txn['rawMaterialList']:
            obj = session.query(RAW_MATERIAL_TXN).filter_by(txnid=int(raw['txn']),challan_no=challan).one()
            material = obj.material.split(" ")[1]
            print("====material=== ",material)
            result = session.query(RAW_STOCK_IN_HAND).filter_by(material_name=material,size=obj.size).one()
            result.available_weight = result.available_weight + Decimal(obj.weight)
            if raw['material'] == obj.material and raw['size'] == obj.size:
                obj.weight = raw['weight']
                result.available_weight = result.available_weight - Decimal(obj.weight)
            else:
                obj = RAW_MATERIAL_TXN.setObj(obj,raw,industry,obj.txn_type)
                material = obj.material.split(" ")[1]
                newraw = session.query(RAW_STOCK_IN_HAND).filter_by(material_name=material,size=obj.size).one()
                newraw.available_weight = newraw.available_weight - Decimal(obj.weight)
                session.add(newraw)
            session.add(obj)
            session.add(result)
              

        session.add(finitxn)
        session.add(finiprod)
            
            
    @staticmethod
    def update_fini_ind2(session,finish_prd_txn,industry):
        challan = finish_prd_txn['challan']
        txn_number = finish_prd_txn['txn']
        product = finish_prd_txn['product']
        size = finish_prd_txn['size']
        
        ol_finiTxn =session.query(Finished_PRODUCT_TXN).filter(Finished_PRODUCT_TXN.challan==challan).\
        filter(Finished_PRODUCT_TXN.id==txn_number).filter(Finished_PRODUCT_TXN.industry==industry).one()
        
        
        finishprod = session.query(IN2_PROD_STOCK_IN_HAND).filter_by(product=ol_finiTxn.product,size=ol_finiTxn.size).one()
        finishprod.stock = finishprod.stock - ol_finiTxn.quantity
        
        if ol_finiTxn.product == product and ol_finiTxn.size == size:
            ol_finiTxn.quantity =  int(finish_prd_txn['stock'])
            finishprod.stock = finishprod.stock + int(ol_finiTxn.quantity)
        else:
            ol_finiTxn = Finished_PRODUCT_TXN.upsert_finish_txn(ol_finiTxn,finish_prd_txn,industry,'produce')
            finishprodnew = session.query(IN2_PROD_STOCK_IN_HAND).filter_by(product=ol_finiTxn.product,size=ol_finiTxn.size).one()
            finishprodnew.stock = finishprodnew.stock + int(ol_finiTxn.quantity)
            session.add(ol_finiTxn)
        Finish_Product_Service.delete_raw_material_txn(session,ol_finiTxn,ol_finiTxn.challan,ol_finiTxn.industry,ol_finiTxn.id)
        Finish_Product_Service.delete_semi_product_txn(session,ol_finiTxn,ol_finiTxn.challan,ol_finiTxn.industry,ol_finiTxn.id)
        for semi_prod in finish_prd_txn['semiProdList']:
            semi_obj = SEMI_PRODUCT_TXN.insert_semi_txn(session,semi_prod,industry,"deduct",consumed_by=ol_finiTxn.id)
            SEMI_PRODUCT_IN_HAND.update_semi_product(session,semi_obj.product,semi_obj.size,semi_obj.qty,semi_obj.txn_type)
            
        for raw in finish_prd_txn['rawMaterialList']:
            obj = RAW_MATERIAL_TXN.insert_raw_txn(session,raw,industry,"consume",consumed_by=ol_finiTxn.id)                    
            session.add(RAW_STOCK_IN_HAND.get_stock_and_update(session,obj,Decimal(obj.weight)))
                    
        
        
        
        
    
    @staticmethod
    def update_raw_material_txn(session,raw_material_txn,industry,challan_number):
        txnid = raw_material_txn['txn']
        material  = raw_material_txn['material']
        size = raw_material_txn['size']
        old_raw_txn = session.query(RAW_MATERIAL_TXN).filter_by(txnid=txnid,challan_no=challan_number).one()
        old_raw_ent = session.query(RAW_STOCK_IN_HAND).filter_by(material_name=old_raw_txn.material,size=old_raw_txn.size).one()
        
        if old_raw_txn.material ==material and old_raw_txn.size ==size:            
            old_raw_ent.available_weight = old_raw_ent.available_weight +old_raw_txn.weight - Decimal(raw_material_txn['weight'])
            old_raw_txn.weight = raw_material_txn['weight']
            session.add(old_raw_ent)            
            session.add(old_raw_txn)
        else:
            old_raw_ent.available_weight = old_raw_ent.available_weight +old_raw_txn.weight
            old_raw_txn = RAW_MATERIAL_TXN.setObj(old_raw_txn,raw_material_txn,industry,"addraw")
            session.add(RAW_STOCK_IN_HAND.get_stock_and_update(session,old_raw_txn,Decimal(old_raw_txn.weight)))
            session.add(old_raw_txn)
            
            
    @staticmethod
    def update_semi_product_txn(session,semi_prod_txn,industry,challan_number):
     
        txnid = semi_prod_txn['txn']
        product = semi_prod_txn['product']
        size = semi_prod_txn['size']
        semi_txn = session.query(SEMI_PRODUCT_TXN).filter(txn_id=txnid,challan=challan_number).one()
        
        semi_prod = session.query(SEMI_PRODUCT_IN_HAND).filter(product=semi_txn.product,size=semi_txn.size).one()
        semi_prod.stock = semi_prod.stock + semi_txn.qty
        if semi_txn.product==product  and semi_txn.size ==size:
            semi_prod.stock = semi_prod.stock + semi_txn.qty - int(semi_prod_txn['qty'])
            semi_txn.qty = int(semi_prod_txn['qty'])
            session.add(semi_prod)            
            session.add(semi_txn)
        else:
            semi_txn = SEMI_PRODUCT_TXN.setObj(semi_txn,semi_prod_txn,industry,semi_txn.txn_type)
            SEMI_PRODUCT_IN_HAND.update_semi_product(session,semi_txn.product,semi_txn.size,semi_txn.qty,semi_txn.txn_type)
            session.add(semi_txn)
            
        
    @staticmethod
    def delete_finish_product(session,finish_prd_txn,industry):
        if industry == 'industry2':
            Finish_Product_Service.delete_industry2(session,finish_prd_txn,industry)
        elif industry == 'industry1':
            Finish_Product_Service.delete_industry1(session,finish_prd_txn,industry)
    
    @staticmethod
    def delete_industry1(session,finish_prd_txn,industry):
        challan = finish_prd_txn['challan']
        txn_number = finish_prd_txn['txn']
        product = finish_prd_txn['product']
        finitxn =session.query(Finished_PRODUCT_TXN).filter_by(challan=challan,id=txn_number).one()
        finiprod = session.query(FINISH_PRODUCT_IND1).filter_by(product=finitxn.product).one()
        finiprod.stock = finiprod.stock - int(finitxn.quantity)
        for raw in finish_prd_txn['rawMaterialList']:
            obj = session.query(RAW_MATERIAL_TXN).filter_by(txnid=int(raw['txn']),challan_no=challan).one()
            material = obj.material.split(" ")[1]
            result = session.query(RAW_STOCK_IN_HAND).filter_by(material_name=material,size=obj.size).one()
            result.available_weight = result.available_weight + Decimal(obj.weight)
            session.delete(obj)
        session.delete(finitxn)
        
        
    @staticmethod
    def delete_industry2(session,finish_prd_txn,industry):
        txn = finish_prd_txn['txn']
        challan = finish_prd_txn['challan']
        size = finish_prd_txn['size']
        product = finish_prd_txn['product']
        stock = finish_prd_txn['stock']
        fin_txn = session.query(Finished_PRODUCT_TXN).filter_by(id=txn,challan=challan).one()
        finishprod = session.query(IN2_PROD_STOCK_IN_HAND).filter_by(product=fin_txn.product,size=fin_txn.size).one()
        finishprod.stock = finishprod.stock - fin_txn.quantity
        
        Finish_Product_Service.delete_raw_material_txn(session,fin_txn,challan,fin_txn.industry,fin_txn.id)
        Finish_Product_Service.delete_semi_product_txn(session,fin_txn,challan,fin_txn.industry,fin_txn.id)
        
        session.delete(fin_txn)
    
    @staticmethod
    def delete_raw_material_txn(session,fintxn,challan,industry,consumed_by_id):
        obj = session.query(RAW_MATERIAL_TXN).filter_by(consumed_by_id=consumed_by_id,challan_no=challan).all()
        print("RAW_MATERIAL_TXN===",obj)
        for raw in obj:
            rawobj = session.query(RAW_STOCK_IN_HAND).filter_by(material_name=raw.material,size=raw.size).one()
            rawobj.available_weight = rawobj.available_weight + Decimal(raw.weight)
            session.delete(raw)
            session.add(rawobj)
            
            
    @staticmethod
    def delete_semi_product_txn(session,fintxn,challan,industry,consumed_by_id):
        semiList= session.query(SEMI_PRODUCT_TXN).filter_by(consumed_by_id=consumed_by_id,challan=challan,industry=industry).all()
        for semi in semiList:          
            semiobj = session.query(SEMI_PRODUCT_IN_HAND).filter_by(product=semi.product,size=semi.size).one()
            semiobj.stock = semiobj.stock + int(semi.qty)
            session.delete(semi)
            session.add(semiobj)
            
    

class Sales_Service:

    @staticmethod
    def insert_sales(sesion,sales_txn,industry):
        if industry == 'industry2':
            finiTxn = Finished_PRODUCT_TXN.insert_finishprd_txn(sesion,sales_txn,industry,'sell')
            print("finished product ",finiTxn.id)
            IN2_PROD_STOCK_IN_HAND.update_finished_product_stock(sesion,finiTxn.product,finiTxn.size,finiTxn.quantity,finiTxn.txn_type)
        elif industry == 'industry1':
            finiTxn = Finished_PRODUCT_TXN.insert_finishprd_txn(sesion,sales_txn,industry,'sell')
            print("finished product ",finiTxn.id)
            finiprod = sesion.query(FINISH_PRODUCT_IND1).filter_by(product=finiTxn.product).one()
            finiprod.stock = finiprod.stock - int(finiTxn.quantity)
    @staticmethod
    def update_sales(sesion,sales_txn,industry):
        product = sales_txn['product']
        size = sales_txn['size']
        challan = sales_txn['challan']
        txn = sales_txn['txn']
        if industry == 'industry2':
            salestxn = sesion.query(Finished_PRODUCT_TXN).filter_by(challan=challan,id=txn).one()
            finiprod = sesion.query(IN2_PROD_STOCK_IN_HAND).filter_by(product=salestxn.product,size=salestxn.size).one()
            finiprod.stock = finiprod.stock + int(salestxn.quantity)
            if salestxn.product == product:
                salestxn = Finished_PRODUCT_TXN.upsert_finish_txn(salestxn,sales_txn,industry,salestxn.txn_type)
                finiprod.stock = finiprod.stock - int(salestxn.quantity)
            else:
                salestxn = Finished_PRODUCT_TXN.upsert_finish_txn(salestxn,sales_txn,industry,salestxn.txn_type)
                finiprodnew = sesion.query(IN2_PROD_STOCK_IN_HAND).filter_by(product=salestxn.product,size=salestxn.size).one()
                finiprodnew.stock = finiprodnew.stock - int(salestxn.quantity)
                sesion.add(finiprodnew)
            sesion.add(salestxn)
            sesion.add(finiprod)
            
        elif industry == 'industry1':
            salestxn = sesion.query(Finished_PRODUCT_TXN).filter_by(challan=challan,id=txn).one()
            print("salestxn ",salestxn)
            finiprod = sesion.query().filter_by(product=salestxn.product).one()
            
            finiprod.stock = finiprod.stock + int(salestxn.quantity)
            
            if salestxn.product == product:
                salestxn = Finished_PRODUCT_TXN.upsert_finish_txn(salestxn,sales_txn,industry,salestxn.txn_type)
                finiprod.stock = finiprod.stock - int(salestxn.quantity)
            else:
                salestxn = Finished_PRODUCT_TXN.upsert_finish_txn(salestxn,sales_txn,industry,salestxn.txn_type)
                finiprodnew = sesion.query(FINISH_PRODUCT_IND1).filter_by(product=salestxn.product).one()
                finiprodnew.stock = finiprodnew.stock - int(salestxn.quantity)
                sesion.add(finiprodnew)
            sesion.add(salestxn)
            sesion.add(finiprod)

    @staticmethod
    def delete_sales(sesion,sales_txn,industry):
        challan = sales_txn['challan']
        txn = sales_txn['txn']
        if industry == 'industry2':
            salestxn = sesion.query(Finished_PRODUCT_TXN).filter_by(challan=challan,id=txn).one()
            finiprod = sesion.query(IN2_PROD_STOCK_IN_HAND).filter_by(product=salestxn.product,size=salestxn.size).one()
            finiprod.stock = finiprod.stock + int(salestxn.quantity)
            sesion.add(finiprod)
            sesion.delete(salestxn)
            
        elif industry == 'industry1':
            salestxn = sesion.query(Finished_PRODUCT_TXN).filter_by(challan=challan,id=txn).one()
            print("salestxn ",salestxn)
            finiprod = sesion.query(FINISH_PRODUCT_IND1).filter_by(product=salestxn.product).one()
            finiprod.stock = finiprod.stock + int(salestxn.quantity)
            sesion.add(finiprod)
            sesion.delete(salestxn)
            