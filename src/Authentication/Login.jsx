import { useState } from "react";
import { auth } from "../firebase.config";
import { signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import Swal from 'sweetalert2'
import { GoogleAuthProvider } from "firebase/auth";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "../Components/Navbar/Navbar";
const provider = new GoogleAuthProvider();

const Login = () => {

const navigate=useNavigate()
const [error,seterror]=useState('')


  const handleSubmit = (e) => {
    e.preventDefault();
    const form=e.target
    const name=form.name.value
    const email=form.email.value
    const password=form.password.value
    const profilePicture=form.profilePicture.value
    const user={name,email,password,profilePicture}

signInWithEmailAndPassword(auth,email,password)
.then(data=>{
seterror('')
console.log(data)
Swal.fire({
  position: 'top-end',
  icon: 'success',
  title: 'Login Successful',
  showConfirmButton: false,
  timer: 1500
})

})
.catch(error=>{
seterror(error.message)

})


};

const loginwithGoogle=()=>
{
signInWithPopup(auth, provider)
.then(data=>{
seterror('')
console.log(data)
Swal.fire({
  position: 'top-end',
  icon: 'success',
  title: 'Google login Successful',
  showConfirmButton: false,
  timer: 1500
})
navigate('/')
})
.catch(error=>{
seterror(error.message)

})


}




    return (
     <div>

<Navbar></Navbar>
   <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white p-8 rounded shadow-lg w-96">
        <h2 className="text-2xl font-semibold mb-4">LOGIN</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-600">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-600">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-gray-600">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
              required
            />
          </div>
        
          <div className="mb-6">
            <button
              type="submit"
              className="w-full bg-blue-500 text-white font-semibold p-2 rounded-md hover:bg-blue-600"
            >
              Login
            </button>
          </div>
        </form>
{error && <p className='text-red-500 text-center'>{error}</p>}
  <button
      onClick={loginwithGoogle}
      className="bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-4 rounded-md w-full max-w-xs mx-auto flex items-center justify-center space-x-2"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="w-6 h-6"
      >
        <path d="M18 15c0-3.53-2.72-6.44-6.17-6.44-4.31 0-7.83 3.58-7.83 8s3.52 8 7.83 8c2.08 0 3.87-.73 5.31-1.94l-2.12-2.12c-1.02 1.02-2.39 1.65-3.88 1.65-3.31 0-6-2.69-6-6s2.69-6 6-6c1.63 0 3.12.64 4.24 1.76L15.1 9.88"></path>
      </svg>
      Login with Google
    </button>
  <p className="text-center mt-2">New to this website? <Link to='/register' className="text-blue-600 " >Register</Link></p>

      </div>

    </div>




</div>
  );
};

export default Login;