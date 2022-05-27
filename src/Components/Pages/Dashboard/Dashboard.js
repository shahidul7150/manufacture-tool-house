import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, Outlet } from 'react-router-dom';
import auth from '../../../firebase.init';
import useAdmin from '../../../hooks/useAdmin';

const Dashboard = () => {

  const [user] = useAuthState(auth);
  const [admin] = useAdmin(user);

  return (
    <div className="drawer drawer-mobile">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content px-4  ">
        <div className="flex justify-between">
          <h2 className="text-3xl text-primary">Dashboard</h2>
{/* -------------------------------- */}

{/* ------------------------ */}
          <label
            htmlFor="my-drawer-2"
            tabIndex="0"
            className="btn btn-ghost lg:hidden text-right"
          >
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
        </div>

        <Outlet></Outlet>
      </div>
      <div className="drawer-side shadow-xl  ">
        <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
        <ul className="menu p-4 overflow-y-auto w-80  text-base-content bg-base-100">
          {/* <!-- Sidebar content here --> */}
          <li>
            <Link to="/dashboard">My Orders</Link>
          </li>
          <li>
            <Link to="/dashboard/profile">My Profile</Link>
          </li>
          <li>
            <Link to="/dashboard/addreview">Add Review</Link>
          </li>
          <li>
            <Link to="/dashboard/allUser">All User</Link>
          </li>
          <li>
            <Link to="/dashboard/manageorder">Manage All Orders</Link>
          </li>
          <li>
            <Link to="/dashboard/addproduct">Add Products</Link>
          </li>
          {admin &&
            <li>
            <Link to="/dashboard/manageproduct">Manage All Products</Link>
          </li>}
         
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
