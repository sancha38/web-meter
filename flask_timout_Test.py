from flask import Flask, Response
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
def check():
    def generate():
        some_long_calculation(1)
        return {"message":"success"}
    return Response(response=json.dumps(generate()),status=code,mimetype='application/json')

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=8080, debug=True)