import { createContext, useEffect, useState } from "react";
import {  onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../firebase.config";
import { Navigate } from "react-router-dom";
export const contextauth=createContext(null)


export const AuthContext = ({children}) => {

const [user,setuser]=useState(null)



useEffect(()=>{

const unSubscribe=onAuthStateChanged(auth,currentUser=>{

setuser(currentUser)
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
logout

}


    return (
    <contextauth.Provider value={info}>
{children}
</contextauth.Provider>
    );
};

export default AuthContext;