import { useLoaderData, useNavigate } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Swal from 'sweetalert2'
import axios from "axios";
import { useState } from "react";
import { useContext } from "react";
import  { contextauth } from "../../Authentication/AuthContext";
import { useEffect } from "react";

const Cart = () => {
const [items,setitems]=useState([])
const[invalid,setinvalid]=useState(false)
const navigate=useNavigate()
const {user}=useContext(contextauth)
const email=user?.email
useEffect(()=>{
axios.get(`http://localhost:5000/cart?email=${email}`,{withCredentials:true})
.then(res=>{
console.log(res.data)
if(res.data.message==='Not Authorized')
{setinvalid(true)}
else
setitems(res.data)

})



},[])




const deleteItem=(name)=>
{


Swal.fire({
  title: 'Are you sure?',
  text: "You won't be able to revert this!",
  icon: 'warning',
  showCancelButton: true,
  confirmButtonColor: '#3085d6',
  cancelButtonColor: '#d33',
  confirmButtonText: 'Yes, delete it!'
}).then((result) => {
  if (result.isConfirmed) {
    fetch(`http://localhost:5000/${name}`,{

method:'DELETE'
})
.then(res=>res.json())
.then(data=>{
if(data.deletedCount>0)
{

Swal.fire(
      'Deleted!',
      'Your file has been deleted.',
      'success'
    )

}
navigate('/cart')
})
}
  
})




}

if(invalid)return <p className="text-3xl text-center">Unauthorized User</p>



    return (
        <div>
            <Navbar></Navbar>
            <h1 className="text-center text-4xl mt-5 mb-5">Your Cart</h1>

            <div className="max-w-6xl mx-auto mt-5 grid grid-cols-2 gap-10">
                {items.map(item =>
                    <div key={item._id}>
                        <div className="card w-128 bg-base-100 shadow-xl">
                            <figure className=" px-10 pt-10 ">
                                <img src={item.image} alt="Shoes" className="rounded-xl h-[300px] object-cover" />
                            </figure>
                            <div className="card-body items-center text-center">
                                <h2 className="card-title">{item.name}</h2>
                                <div className="card-actions">
                                    <button className="btn btn-primary" onClick={()=>deleteItem(item.name)}>Remove Product</button>
                                </div>
                            </div>
                        </div>



                    </div>

                )}
            </div>



        </div>
    );
};

export default Cart;