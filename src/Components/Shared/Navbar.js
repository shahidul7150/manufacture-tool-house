import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <div class="navbar bg-base-200 px-12">
        <div class="navbar-start ">
          <div class="dropdown">
            <label tabindex="0" class="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
            <ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
            <li>
                <NavLink to="/" className="rounded-lg ">
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/purchase" className="rounded-lg ">
                  Purchase
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard" className="rounded-lg ">
                  Dashboard
                </NavLink>
              </li>
              <li>
                <NavLink to="/portfolio" className="rounded-lg ">
                  My Portfolio
                </NavLink>
              </li>
              <li>
                <NavLink to="/blogs" className="rounded-lg ">
                  Blogs
                </NavLink>
              </li>
            </ul>
          </div>
          <Link to="/" class="btn btn-ghost normal-case text-xl">daisyUI</Link>
        </div>
        <div class="navbar-center hidden lg:flex">
          <ul class="menu menu-horizontal p-0">
          <li>
                <NavLink to="/" className="rounded-lg ">
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/purchase" className="rounded-lg ">
                  Purchase
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard" className="rounded-lg ">
                  Dashboard
                </NavLink>
              </li>
              <li>
                <NavLink to="/portfolio" className="rounded-lg ">
                  My Portfolio
                </NavLink>
              </li>
              <li>
                <NavLink to="/blogs" className="rounded-lg ">
                  Blogs
                </NavLink>
              </li>
          </ul>
        </div>
        <div class="navbar-end">
                <ul>
                    
                <li>
                <NavLink to="/login" className="rounded-lg ">
                  Login
                </NavLink>
              </li>
          </ul>
        </div>
      </div>
    );
};

export default Navbar;