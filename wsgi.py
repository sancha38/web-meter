
import os
import sys
#from app.main import app 
from app.main import Application
basepath = os.path.dirname(__file__)
p = os.path.join(basepath,"db/product_store.db")
static = os.path.join(basepath,"static")

app = Application.init(static,p)

if __name__ == "__main__": 
        app.run(host='0.0.0.0') 
