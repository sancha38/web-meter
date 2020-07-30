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
        query =  session.query(cls).filter_by(industry = industryType)
        print(query)
        return query.all()

class FinishedProductConfig(Base):
    __tablename__ = 'finished_product_cfg'
    id = Column(Integer,primary_key = True)
    industry = Column(String(100))
    item_name = Column(String(100))
    unit =Column(String(100))
    cfg = Column(String(100))

    @classmethod
    def list_finished_product_cfg(cls,session,industryType):
        return session.query(cls).filter_by(industry = industryType).all() 

