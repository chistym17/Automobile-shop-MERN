import { useState } from "react";
import {  useLoaderData, useNavigate } from "react-router-dom";
import Swal from 'sweetalert2'
import Navbar from "../Navbar/Navbar";

const ProductDetail = () => {
const navigate=useNavigate()
const[add,setadded]=useState(false)
 const [cart, setCart] = useState([]);

const AddtoCart=(name,image)=>
{

 if (cart.includes(name)) {
      Swal.fire({
        position: "top-end",
        icon: "error",
        title: "Product already in cart",
        text: "Please remove the product from the cart before adding it again.",
      });

      return;
    }

    setCart((prevCart) => [...prevCart, name]);


setadded(true)
const product={name,image}
fetch('http:/localhost:5000/addtoCart',{

   method: "POST", 
    headers: {
      "Content-Type": "application/json",
    },

  body: JSON.stringify(product),

})

.then(res=>res.json())
.then(() => {
   Swal.fire({
    position: 'top-end',
    icon: 'success',
    title: 'Product Added to your Cart',
    showConfirmButton: false,
    timer: 1500
  })
navigate('/')


})

}



    const { name, image, Description, price, brandName } = useLoaderData()
    return (
<div>

<Navbar></Navbar>


      <div>
  <div className="max-w-6xl mx-auto mt-5 h-[100vh]">
    <div className="card lg:card-side bg-base-100 shadow-xl flex">
      {/* Product Image on the Left */}
      <figure className="h-[500px] w-[60%]">
        <img src={image} alt="Album" className="object-cover h-full w-full" />
      </figure>

      {/* Product Details on the Right */}
      <div className="card-body w-[40%]">
        <h2 className="card-title text-3xl font-semibold">{name}</h2>
        <div className="card-actions">
          <h3 className="text-2xl">Brand:{brandName}</h3>
          <p className="text-xl">{Description}</p>
          <p className="text-gray-900 font-bold">price:${price}</p>

{
add? 

       <button 
       className="w-full mt-5 bg-blue-500 text-white font-semibold px-6 py-2 rounded-md hover:bg-blue-600"
    >
              Already Added to Cart
            </button>
:

       <button 
       className="w-full mt-5 bg-blue-500 text-white font-semibold px-6 py-2 rounded-md hover:bg-blue-600"
    onClick={()=>AddtoCart(name,image)}>
              Add to Cart
            </button>

}
      
        </div>
      </div>
    </div>
  </div>
</div>







</div>
    );
};

export default ProductDetail;