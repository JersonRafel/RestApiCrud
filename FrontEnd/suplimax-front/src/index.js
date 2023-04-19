import React from 'react';
import ReactDOM from 'react-dom/client';

// ROUTES FOR REACT
import { createBrowserRouter, RouterProvider,} from "react-router-dom";
import Home from './routes/Home'
import Products from './routes/Products'
import NoPage from './routes/NoPage'




const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
  },
  {
    path:"/products",
    element:<Products/>,

  },
  // {
  //   path:"/product",
  //   element:<Product/>,
  // },
]);



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <>
       <RouterProvider router={router} />
    </>
);

