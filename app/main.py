from sqlalchemy.engine.url import URL
import os
from flask import Flask,redirect,session,request,send_from_directory,render_template
from sqlalchemy import create_engine
from sqlalchemy.orm import scoped_session, sessionmaker
from sqlalchemy.pool import NullPool

from app.resources import RegisterAPI
from app.models import TXNBase
class DbConnectionManager:
    def __init__(self, db,url,Base):
        try:
            print(db.SCHEMA )
            if db.SCHEMA is None:
                #print("1")
                self.engine = create_engine(url, poolclass=NullPool)
            else:
                #print("2")
                self.engine = create_engine(url, poolclass=NullPool,connect_args={'options': '-csearch_path={}'.format(db.SCHEMA)})
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
            
class Database():
        def __init__(self):
                self.DB_HOST =  os.getenv("DB_HOST")
                self.DB_PASSWORD = os.getenv("DB_PASSWORD")
                self.DB_USER = os.getenv("DB_USER")
                self.DB_PORT = os.getenv("DB_PORT")
                self.DB = os.getenv("DB")
                self.SCHEMA = os.getenv("SCHEMA")
        
        def getURL(self,driver_name):
                db_info = {'drivername': driver_name,
                        'username': self.DB_USER,
                        'password': self.DB_PASSWORD,
                        'host': self.DB_HOST ,
                        'port': self.DB_PORT,
                        'database':self.DB}
                return  URL(**db_info)
        
class Application():   
    @staticmethod
    def init(static):
      
        db = Database()
        dburl = db.getURL('postgresql') 
        print(dburl)       
        db_conn = DbConnectionManager(db,dburl,TXNBase)
        print(db_conn)
        
        application = Flask(__name__)
        application.template_folder=static
        application.static_folder=static
        application.config['txndb']=db_conn
        
        @application.route('/<path:path>')
        def send_js(path):
            #print(app.static_folder)
            return send_from_directory(application.static_folder, path)

        @application.route("/app/<path:path>") 
        def proc_list(path): 
            print(path)
            print(application.static_folder)
            return render_template('index.html')


        @application.route("/login") 
        def login(): 
            print("home")
            print(application.static_folder)
            return render_template('index.html')

        @application.route("/") 
        def home_view(): 
            print("home")
            print(application.static_folder)
            return render_template('index.html')
        
        RegisterAPI("",application)

        return application