import { useLoaderData, useParams } from "react-router-dom";
import BrandProdDEetail from "./BrandProdDEetail";
import Navbar from "../Navbar/Navbar";
import { useState } from "react";
import { useEffect } from "react";
const BrandPage = () => {
const [products,setproducts]=useState([])
const {name}=useParams()
useEffect(()=>{
fetch(`http://localhost:5000/brandPage/${name}`)
.then(res=>res.json())
.then(data=>setproducts(data))

},[])
    return (
        <div>
           <Navbar></Navbar>
           
           <h1 className="text-center font-bold text-4xl">Available Products</h1>

            { products.map(product=><BrandProdDEetail  key={product._id}product={product}></BrandProdDEetail>)}



</div>

);

};

export default BrandPage;


