import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, NavLink } from 'react-router-dom';
import auth from '../../firebase.init';

const Navbar = () => {

  const [user, loading, error] = useAuthState(auth);
  const logout = () => {
    signOut(auth);
    localStorage.removeItem('accessToken')
  };
  return (
    <div className="navbar bg-base-100 px-12 lg:bg-[#3A3A3A] lg:text-white">
      <div className="navbar-start ">
        <div className="dropdown">
          <label tabIndex="0" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex="0"
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <NavLink to="/" className="rounded-lg ">
                Home
              </NavLink>
            </li>
            <li>
              {user&&<NavLink to="/dashboard" className="rounded-lg ">
                Dashboard
              </NavLink>}
            </li>
            <li>
              <NavLink to="/portfolio" className="rounded-lg ">
                My Portfolio
              </NavLink>
            </li>
            <li>
              <NavLink to="/about" className="rounded-lg ">
                About us
              </NavLink>
            </li>
            <li>
              <NavLink to="/blogs" className="rounded-lg ">
                Blogs
              </NavLink>
            </li>
            <li>
              {user ?
                <p onClick={logout}>Sign Out</p>
                :
                <NavLink to="/login" className="rounded-lg ">
                Login
              </NavLink>}
            </li>
          </ul>
        </div>
        <Link to="/" className="btn btn-ghost normal-case text-xl">
          TOOLS HOUSE
        </Link>

      
        {/* <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label> */}
      </div>
      <div className="navbar-center hidden lg:flex ">
        <ul className="menu menu-horizontal ml-44 gap-x-4">
          <li>
            <NavLink to="/" className="rounded-lg ">
              Home
            </NavLink>
          </li>
         
         {user&& <li>
          <NavLink to="/dashboard" className="rounded-lg ">
                Dashboard
              </NavLink>
          </li>}
          <li>
            <NavLink to="/portfolio" className="rounded-lg  ]">
              My Portfolio
            </NavLink>
          </li>
          <li>
              <NavLink to="/about" className="rounded-lg ">
                About us
              </NavLink>
            </li>
          <li>
            <NavLink to="/blogs" className="rounded-lg ">
              Blogs
            </NavLink>
          </li>
        </ul>

      </div>
      <div className="hidden lg:flex navbar-end ">
       
        <div className="menu menu-horizontal " >
        {user ? (
              <div className=' menu menu-horizontal'>
                <button onClick={logout} className='btn bg-[#570DF8] rounded-xl text-white mr-4'>
                Sign Out
              </button>
                <p className=' bg-[#570DF8] text-white text-center items-center py-3 px-3 rounded-full'>{user.displayName }</p>
              </div>
            ) : (
              <NavLink  to="/login" className="btn btn-primary rounded-lg  ">
                Login
              </NavLink>
            )}
            </div>
         
      </div>
    </div>
  );
};

export default Navbar;
