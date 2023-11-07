import axios from "axios";




const useAxios = () => {
const axiosBase=axios.create({
baseURL:'http://localhost:5173',
withCredentials:true
})
    return axiosBase

};

export default useAxios;