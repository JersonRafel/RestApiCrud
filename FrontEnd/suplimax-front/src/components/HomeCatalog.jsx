import axios from "axios";
import React, { useState, useEffect } from "react";
import index from './index.css'

function HomeCatalog() {
    const [products, setProducts] = useState([]);
  
    useEffect(() => {
      axios
        .get("http://localhost:5000/get_products")
        .then((response) => {
          setProducts(response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    }, []);
  
    return (
      <div className="m-10">
        <ul>
          {products.map((product) => (
            <li className="bg-red-950 m-5 inline-block p-10" key={product._id.$oid}>
              <p className="text-amber-600 text-lg font-bold  " >{product.p_name}</p>
              <p>Cantidad: {product.p_quantity}</p>
              <p>Precio: {product.p_price}</p>
            </li>
          ))}
        </ul>
      </div>
    );
  }
  

export default HomeCatalog