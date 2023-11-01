import { useLoaderData } from "react-router-dom";
import BrandProdDEetail from "./BrandProdDEetail";
import Navbar from "../Navbar/Navbar";
const BrandPage = () => {
const products=useLoaderData()
    return (
        <div>
           <Navbar></Navbar>
           
           <h1 className="text-center font-bold text-4xl">Available Products</h1>

            {products.map(product=><BrandProdDEetail  key={product._id}product={product}></BrandProdDEetail>)}



        </div>
    );
};

export default BrandPage;


