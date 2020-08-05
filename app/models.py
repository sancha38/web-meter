import enum
import sqlite3


from sqlalchemy.exc import IntegrityError
from uuid import uuid4
import uuid

from sqlalchemy import PrimaryKeyConstraint,Boolean ,REAL, Column,TEXT, String, Float, Integer, VARCHAR, TIMESTAMP, BigInteger
from sqlalchemy.ext.declarative import declarative_base

Base = declarative_base()
import math
import datetime

class RawProductConfig(Base):
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

class FinishedProductConfig(Base):
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

class GlobalProductCfg(Base):
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