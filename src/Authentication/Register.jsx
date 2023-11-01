import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import  { useState } from 'react';
import { auth } from '../firebase.config';
import Swal from 'sweetalert2'
import { Link, useNavigate } from 'react-router-dom';
import Navbar from '../Components/Navbar/Navbar';
const Register = () => {
const [error,seterror]=useState('')
const navigate=useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault();
    const form=e.target
    const name=form.name.value
    const email=form.email.value
    const password=form.password.value
    const profilePicture=form.profilePicture.value
    const user={name,email,password,profilePicture}
createUserWithEmailAndPassword(auth,email,password)
.then(data=>{
seterror('')
console.log(data)
Swal.fire({
  position: 'top-end',
  icon: 'success',
  title: 'Registration Successful',
  showConfirmButton: false,
  timer: 1500
})
navigate('/')
})
.catch(error=>{
seterror(error.message)

})


};

  return (
    <div>
<Navbar></Navbar>

<div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white p-8 rounded shadow-lg w-96">
        <h2 className="text-2xl font-semibold mb-4">Register</h2>
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
          <div className="mb-4">
            <label htmlFor="profilePicture" className="block text-gray-600">Profile Picture</label>
            <input
              type="file"
              id="profilePicture"
              name="profilePicture"
              accept="image/*"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
            />
          </div>
          <div className="mb-6">
            <button
              type="submit"
              className="w-full bg-blue-500 text-white font-semibold p-2 rounded-md hover:bg-blue-600"
            >
              Register
            </button>
          </div>
        </form>
{error && <p className='text-red-500 text-center'>{error}</p>}
  <p className='mt-2 text-center'>Already have an account? <Link to='/login' className="text-blue-500" >Login</Link></p>

      </div>

    </div>



</div>
  );
};

export default Register;
