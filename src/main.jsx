import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Components/Root/Root';
import Home from './Components/Home/Home';
import Register from './Authentication/Register';
import Login from './Authentication/Login';
import AuthContext from './Authentication/AuthContext';
import AddProduct from './Components/Product/AddProduct';
import BrandPage from './Components/Brands/BrandPage';
import ProductDetail from './Components/Brands/ProductDetail';
import Cart from './Components/Cart/Cart';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import UpdateInfo from './Components/UpdateInfo/UpdateInfo';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
children:[

{
path:'/',
element:<Home></Home>

},

{
path:'/cart',
element:<Cart></Cart>,
loader:()=>fetch('http://localhost:5000/cart')},



]
  },

{
path:'/register',
element:<Register></Register>

},

{
path:'/login',
element:<Login></Login>

},

{
path:'/addProduct',
element:<PrivateRoute><AddProduct></AddProduct></PrivateRoute>

},

{
path:'/update/:id',
element:<UpdateInfo></UpdateInfo>,
 loader:({params})=>fetch(`http://localhost:5000/update/${params.id}`)
},



{
path:'/brandPage/:name',
element:<PrivateRoute><BrandPage></BrandPage></PrivateRoute>,
// loader:()=>fetch('http://localhost:5000/brandPage/BMW')
},

{
path:'/:name',
element:<ProductDetail></ProductDetail>,
loader:({params})=>fetch(`http://localhost:5000/${params.name}`)
},



]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
<AuthContext>

    <RouterProvider router={router} />


</AuthContext>
  </React.StrictMode>,
)

//  ``