
import os
import sys

from app.main import Application
basepath  = os.getcwd()
print(basepath)

        
                                
#p = os.path.join(basepath,"db/product_store.db")
#txn = os.path.join(basepath,"db/product_txn.db")

static = os.path.join(basepath,"static")

app = Application.init(static)

if __name__ == "__main__": 
        app.run(host='0.0.0.0',port='5050') 
