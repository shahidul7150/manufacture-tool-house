import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Dashboard = () => {
    return (
        <div class="drawer drawer-mobile">
        <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
            <div class="drawer-content px-4 ">
                <h2 className='text-3xl text-primary'>Dashboard</h2>
                
         <Outlet></Outlet>
         
        
        </div> 
        <div class="drawer-side shadow-xl  ">
          <label for="my-drawer-2" class="drawer-overlay"></label> 
          <ul class="menu p-4 overflow-y-auto w-80  text-base-content bg-base-100">
            {/* <!-- Sidebar content here --> */}
            <li><Link to="/dashboard">My Orders</Link></li>
            <li><Link to="/dashboard/addreview">Add Review</Link></li>
          </ul>
        
        </div>
      </div>
    );
};

export default Dashboard;