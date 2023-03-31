from flask import Flask, jsonify, request, json
from bson.json_util import dumps
from pymongo import MongoClient

# MONGODB CONNECTION
client = MongoClient('mongodb://localhost:27017/')
db = client['suplimax']
products = db['products']

# START APP
app = Flask(__name__)


# ROUTES
@app.route('/add', methods=['POST'])
def add_product():
    req_data = request.get_json()
    p_name = req_data['p_name']
    P_price = req_data['p_price']
    p_quantity = req_data['p_quantity']
    p_description = req_data['p_description']

    # Check if exist a document with the same name
    result = products.find_one({"p_name": p_name})
    if result is not None:
    	return "The document exist"
    else:
    	products.insert_one({
        	"p_name": p_name,
        	"P_price": P_price,
        	"p_quantity": p_quantity,
        	"p_description": p_description
    	})
    	return 'Product added'
    

#GET ALL PRODUCTS
@app.route('/get', methods=['GET'])
def get_products():
    product_list = products.find()

    products_json = dumps(product_list)

    return jsonify(products_json)

#DELETE A PRODUCT
@app.route('/del', methods=['DELETE'])
def delete_product():
	
# RUN APP
if __name__ == "__main__":
    app.run(debug=True)
