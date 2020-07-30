from sqlalchemy.engine.url import URL

from sqlalchemy import create_engine
from sqlalchemy.orm import scoped_session, sessionmaker
from sqlalchemy.pool import NullPool
#from core.coremodel import Base
from flask import Flask 
from app.resources import RegisterAPI
from app.models import Base
class DbConnectionManager:
    def __init__(self, db):
        try:
            schema = db.get("schema",None)
            #print(schema)
            if schema is None:
                #print("1")
                self.engine = create_engine(db.get('connectionPath'), poolclass=NullPool)
            else:
                #print("2")
                self.engine = create_engine(db.get('connectionPath'), poolclass=NullPool,connect_args={'options': '-csearch_path={}'.format(schema)})
            self.engine.dialect.supports_sane_rowcount = self.engine.dialect.supports_sane_multi_rowcount = False
            db_session = scoped_session(sessionmaker(
                    autocommit=False,
                    autoflush=True,
                    expire_on_commit=False,
                    bind=self.engine))
            #Base.metadata.drop_all(self.engine)
            Base.metadata.create_all(self.engine)
            Base.query = db_session.query_property()
        #self.db = db
        except Exception as e:
            print(e)
            #self.eout(e, message="DataManager")

    def getSession(self):
        #print(db)
        Session = sessionmaker(bind=self.engine)
        conn = self.engine.connect()
        session = Session(bind=conn)
        return session

    def closeSession(self, session):
        try:
            session.bind.close()
            session.close()
            # print "Session Closed"
        except Exception as e:
            print('Error:', e)

class Application():
    @staticmethod
    def init(static, dbpath):
        print(dbpath)
        db_type = 'sqlite'
        db_info = {'drivername': db_type, 'database': dbpath}
        print(db_info)
        dburl = URL(**db_info)
        print(dburl)
        db = {'connectionPath':dburl,"schema":None}
        configdb_conn = DbConnectionManager(db)
        application = Flask(__name__)
        application.config['configdb']=configdb_conn
        application.config['txndb'] = ''
        RegisterAPI("",application)
        return application