
import os
import sys
from dotenv import load_dotenv
load_dotenv() 
from app.main import Application
basepath  = os.getcwd()
print(basepath)

        
                                
#p = os.path.join(basepath,"db/product_store.db")
#txn = os.path.join(basepath,"db/product_txn.db")

static = os.path.join(basepath,"static")
db = os.path.join(basepath,"db")

app = Application.init(static)
os.environ['dbpath'] = db
if __name__ == "__main__": 
        app.run(host='0.0.0.0',port='5050') 
