
import os
import sys
#from app.main import app 
from app.main import Application
basepath  = os.getcwd()
print(basepath)
p = os.path.join(basepath,"db/product_store.db")
print(p)
static = os.path.join(basepath,"static")

app = Application.init(static,p)

if __name__ == "__main__": 
        app.run(host='0.0.0.0') 
