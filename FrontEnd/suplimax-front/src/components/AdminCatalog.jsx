import axios from "axios";
import React, { useState, useEffect } from "react";
import index from './index.css'
import DeleteButton from './DeleteButton'
import UpdateButton from './UpdateButton'

function AdminCatalog() {
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
          <>
            <div className=''>
              <li className="m-2 bg-red-950 p-10" key={product._id.$oid}>
                <p className="text-amber-600 text-lg font-bold" >{product.p_name}</p>
                <p>Descripcion: {product.p_description}</p>
                <p>Cantidad: {product.p_quantity}</p>
                <p>Precio: {product.p_price}</p>
                <UpdateButton tittle={product._id.$oid}/>
                <DeleteButton/> 
              </li>
            </div>  
          </>    
          ))}
          
        </ul>
      </div>
    );
  }
  

export default AdminCatalog