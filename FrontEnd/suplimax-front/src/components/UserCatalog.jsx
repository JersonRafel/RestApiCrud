import axios from "axios";
import React, { useState, useEffect } from "react";
import index from './index.css'
import DeleteButton from './DeleteButton'
import UpdateButton from './UpdateButton'

function UserCatalog() {
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
      <div className="m-5">
        <ul className='grid grid-cols-4 gap-1'>
          {products.map((product) => (
            <li className="bg-red-950 m-2 inline-block p-10" key={product._id.$oid}>
              <p className="text-amber-600 text-lg font-bold  " >{product.p_name}</p>
              <p>Precio: {product.p_price}</p>
            </li>    
          ))}
          
        </ul>
      </div>
    );
  }
  

export default UserCatalog