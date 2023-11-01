import { Link } from "react-router-dom";
import { contextauth } from "../../Authentication/AuthContext";
import { useContext } from "react";

const Navbar = () => {
  const { user, logout } = useContext(contextauth)
  console.log(user)
  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
          </label>
          <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
            <Link to='/'><li><a>Home</a></li></Link>
            <Link to='/addProduct'><li><a>Add Product</a></li></Link>
            <Link to='/cart'><li><a>My Cart</a></li></Link>
          </ul>
        </div >
        <a className="btn btn-ghost normal-case text-3xl">AutoMOB</a>
      </div>
      <div className="navbar-center hidden lg:flex w-[25%]">
        <ul className="menu menu-horizontal px-1">
          <Link to='/'><li><a>Home</a></li></Link>
          <Link to='/addProduct'><li><a>Add Product</a></li></Link>
          <Link to='/cart'><li><a>My Cart</a></li></Link>          <li tabIndex={0}>

          </li>
        </ul>

      </div>
      <div className="navbar-end w-[50%]">
        {user && <p className="mr-5 text-xl font-medium" >Welcome {user.displayName}</p>}
        {
          user ? <Link className="mr-4" onClick={logout}>Logout</Link> : <Link to='/login' className="mr-4">Login</Link>

        }
        {!user && <Link to='/register' >Register</Link>}
      </div>
    </div>
  );
};

export default Navbar;