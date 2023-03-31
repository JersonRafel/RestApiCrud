from flask import Flask, jsonify, request, json
from bson.json_util import dumps
from pymongo import MongoClient
from bson import ObjectId

# MONGODB CONNECTION
client = MongoClient('mongodb://localhost:27017/')
db = client['suplimax']
products = db['products']
categorys = db['categorys']

# START APP
app = Flask(__name__)


"""

ROUTES

"""

#POST PRODUCT
@app.route('/add', methods=['POST'])
def add_product():
    req_data = request.get_json()
    p_name = req_data['p_name']
    p_price = req_data['p_price']
    p_quantity = req_data['p_quantity']
    p_description = req_data['p_description']
    p_category = req_data['p_category']

    product_data = {"p_name":p_name,"p_price":p_price,"p_quantity":p_quantity,"p_description":p_description, "p_category": p_category}

    # Check if exist a document with the same name
    result = products.find_one({"p_name": p_name})
    if result is not None:
    	return "That product exist"
    else:
    	products.insert_one(product_data)
    	return 'Product added'
    

#GET PRODUCT
@app.route('/get', methods=['GET'])
def get_products():
    product_list = products.find()

    products_json = dumps(product_list)

    return jsonify(products_json)


#DELETE A PRODUCT
@app.route('/del/<id>', methods=['DELETE'])
def delete_product(id):
	
	find_product = products.find_one({"_id": ObjectId(id)})
	
	print(find_product)

	if find_product is None:
		return 'No deleted that product dont exist'
	else:
		del_product = products.delete_one({"_id": ObjectId(id)})
		return 'Product deleted'


#EDIT A PRODUCT
@app.route('/edit/<id>', methods=['PATCH'])
def edit_product(id):
    req_data = request.get_json()
    p_name = req_data['p_name']
    
    """
    p_price = req_data['p_price']
    p_quantity = req_data['p_quantity']
    p_description = req_data['p_description']
	"""
    result = products.find_one({"_id": ObjectId(id)})

    # Check if exist a document
    if result is None:
    	return "The product not exist"
    else:
    	products.update_one({"_id": ObjectId(id)}, {"$set": {"p_name": p_name}})
    	return 'Product edited'


"""
CATEGORYS
"""

"""
ADD CATEGORYS
"""
@app.route('/add_category', methods=['POST'])
def add_category():
	req_data = request.get_json()
	cat_name = req_data['cat_name']

	valid_cat = categorys.find_one({"cat_name": cat_name})

	if valid_cat is None:
		categorys.insert_one({"cat_name":cat_name })
		return 'Category added'
	else:
		return 'That category already exists'

"""
DELETE CATEGORY
"""
@app.route('/del_category/<id>', methods=['DELETE'])
def delete_category(id):
	
	valid_cat = categorys.find_one({'_id': ObjectId(id)})

	if valid_cat is not None:
		categorys.delete_one({'_id': ObjectId(id)})
		return 'Category delete'
	else:
		return "That category don't exist"

"""
GET CATEGORYS
"""

#GET CATEGORY
@app.route('/get_category/<id>', methods=['GET'])
def get_categorys(id):
	
	valid_cat = categorys.find_one({'_id': ObjectId(id)})

	if valid_cat is not None:
		json_cat = dumps(valid_cat)
		return jsonify(json_cat)
	else:
		return "That category don't exist"

#GET ALL CATEGORYS
@app.route('/get_category', methods=['GET'])
def get_all_categorys():
	all_categorys = dumps(categorys.find())
	return jsonify(all_categorys)

"""
EDIT CATEGORY
"""
@app.route('/edit_category/<id>', methods=['PATCH'])
def edit_category(id):
	valid_cat = categorys.find_one({'_id': ObjectId(id)})

	req_data = request.get_json()
	cat_name = req_data['cat_name']

	if valid_cat is not None:
		categorys.update_one({'_id': ObjectId(id)}, {'$set': {'cat_name': cat_name}} )
		return 'Category modified'
	else:
		return "That category don't exist"	

# RUN APP
if __name__ == "__main__":
    app.run(debug=True)
