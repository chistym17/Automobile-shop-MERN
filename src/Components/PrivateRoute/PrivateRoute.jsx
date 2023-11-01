import { useContext } from "react";
import { contextauth } from "../../Authentication/AuthContext";
import {  useNavigate } from "react-router-dom";

const PrivateRoute = ({children}) => {
const { user} = useContext(contextauth)
const navigate=useNavigate()

if(user)  return children
else return navigate('/login')

};

export default PrivateRoute;