from flask import Flask, Response,json
import requests

app = Flask(__name__)

def some_long_calculation(number):
  '''
  here will be some long calculation using this number
  let's simulate that using sleep for now :)
  '''
  import time
  time.sleep(5)

  return number

@app.route('/')
def generate_large_csv():
    def generate():
        yield '{"processed": ['
        for row in range(15):
             yield json.dumps({"item_id":some_long_calculation(row)}) + ', '
        yield ']}'
       
    return Response(generate(), content_type='application/json')
if __name__ == '__main__':
    app.run(host='0.0.0.0', port=8080, debug=True)