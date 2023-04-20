import React, { useState } from 'react';
import axios from 'axios';
import { Outlet, Link } from "react-router-dom";

function MyForm() {
  const [formState, setFormState] = useState({
    p_name: '',
    p_price: '',
    p_quantity: '',
    p_description: '',
  });

  const [serverResponse, setServerResponse] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:5000/add', formState)
      .then((response) => {
        function SetresponseServer(){
          const svresponse = response.data.message

          setServerResponse(svresponse);

          setTimeout(() =>{
            window.location.href = 'http://localhost:3000/products'
          }, 1300) 
        }
        SetresponseServer();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleChange = (e) => {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  };

  return (
    <>
    <p className='font-bold text-6xl text-center'>{serverResponse}</p>
    <form onSubmit={handleSubmit}>
      <input className='border-2 border-orange-600 rounded-lg py-1 px-2' type="text" name="p_name" placeholder="Nombre del producto" onChange={handleChange} value={formState.p_name}/>
      <input className='border-2 border-orange-600 rounded-lg py-1 px-2' type="number" name="p_price" placeholder="Precio del producto" onChange={handleChange} value={formState.p_price}/>
      <input className='border-2 border-orange-600 rounded-lg py-1 px-2' type="number" name="p_quantity" placeholder="Cantidad del producto" onChange={handleChange} value={formState.p_quantity}/>
      <input className='border-2 border-orange-600 rounded-lg py-1 px-2' type="text" name="p_description" placeholder="Descripcion del producto" onChange={handleChange} value={formState.p_description}/>
      <button type="submit">Submit</button>
    </form>
    </>
  );
}

export default MyForm