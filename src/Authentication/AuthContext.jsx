import { createContext, useEffect, useState } from "react";
import {  onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../firebase.config";
import { Navigate } from "react-router-dom";
import axios from "axios";

export const contextauth=createContext(null)


export const AuthContext = ({children}) => {

const [user,setuser]=useState(null)
const [loader,setloader]=useState(true)


useEffect(()=>{

const unSubscribe=onAuthStateChanged(auth,currentUser=>{
setuser(currentUser)
const loggedUser={email:currentUser.email}
axios.post('http://localhost:5000/jwt',loggedUser,{withCredentials:true})
.then(res=>console.log(res.data))

setloader(false)
return ()=>{
unSubscribe()
}

},[])




},[])

const logout=()=>
{
signOut(auth)
.then(()=>{
Navigate('')

})
.catch((error)=>
{
console.error(error.message)
})

}


const info=
{
user,
logout,
loader

}


    return (
    <contextauth.Provider value={info}>
{children}
</contextauth.Provider>
    );
};

export default AuthContext;