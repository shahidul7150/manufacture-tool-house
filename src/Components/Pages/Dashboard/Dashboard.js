import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Dashboard = () => {
  return (
    <div class="drawer drawer-mobile">
      <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
      <div class="drawer-content px-4  ">
        <div class="flex justify-between">
          <h2 className="text-3xl text-primary">Dashboard</h2>
{/* -------------------------------- */}

{/* ------------------------ */}
          <label
            for="my-drawer-2"
            tabindex="0"
            class="btn btn-ghost lg:hidden text-right"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
        </div>

        <Outlet></Outlet>
      </div>
      <div class="drawer-side shadow-xl  ">
        <label for="my-drawer-2" class="drawer-overlay"></label>
        <ul class="menu p-4 overflow-y-auto w-80  text-base-content bg-base-100">
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
            <Link to="/dashboard/manageorder">Manage All Orders</Link>
          </li>
          <li>
            <Link to="/dashboard/addproduct">Add Products</Link>
          </li>
          <li>
            <Link to="/dashboard/manageproduct">Manage All Products</Link>
          </li>
         
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
