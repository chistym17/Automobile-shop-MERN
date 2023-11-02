import { useContext } from "react";
import { contextauth } from "../../Authentication/AuthContext";
import {  useNavigate } from "react-router-dom";

const PrivateRoute = ({children}) => {
const { user,loader} = useContext(contextauth)
const navigate=useNavigate()
if(loader)return <span className="loading loading-spinner loading-lg"></span>
if(user)  return children
return navigate('/login')

};

export default PrivateRoute;