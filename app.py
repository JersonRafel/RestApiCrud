from flask import Flask,jsonify,request,json
from bson.json_util import dumps
from pymongo import MongoClient

#MONGODB
client = MongoClient('mongodb://localhost:27017/')
db = client['suplimax']
products = db['products']

#INCIAR PROYECTO
app = Flask(__name__)


#Rutas
@app.route('/add', methods=['POST'])
def add_product():
	req_data = request.get_json()
	p_name= req_data['p_name']
	P_price = req_data['p_price']
	p_quantity = req_data['p_quantity']
	p_description = req_data['p_description']

	print(p_name)

	products.insert_one({
		"p_name": p_name,
		"P_price":P_price,
		"p_quantity":p_quantity,
		"p_description":p_description
		})

	return 'GETING'

#CORRER APK
if __name__ == "__main__":
    app.run(debug=True)