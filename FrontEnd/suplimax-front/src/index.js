import React from 'react';
import ReactDOM from 'react-dom/client';

// ROUTES FOR REACT
import { createBrowserRouter, RouterProvider,} from "react-router-dom";
import Home from './routes/Home'
import Products from './routes/Products'
import NoPage from './routes/NoPage'
import Add_Product from './routes/Add_products'



const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
  },
  {
    path:"/products",
    element:<Products/>,

  },
  {
    path:"/add_product",
    element:<Add_Product/>,
  },
]);



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <>
       <RouterProvider router={router} />
    </>
);

