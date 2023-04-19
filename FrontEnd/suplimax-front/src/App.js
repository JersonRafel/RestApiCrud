import { createBrowserRouter, RouterProvider,} from "react-router-dom";
import layout from "./routes/layout"
import home from "./routes/home";
import products from "./routes/products";
import catalog from "./routes/catalog";
import NoPage from "./routes/NoPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <div>Hello world!</div>,
  },
]);

