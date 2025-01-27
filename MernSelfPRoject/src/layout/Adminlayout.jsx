import React, { useEffect } from 'react';
import { FaHome, FaUser, FaChartLine, FaCog, FaDollarSign, FaUsers, FaShoppingCart } from 'react-icons/fa';
import { NavLink, useNavigate } from 'react-router-dom';
import { Outlet } from 'react-router-dom';
import { useState } from 'react';
import { useAuth } from '../store/Auth';


const Adminlayout = () => {

 
  

  

  
  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-white p-5 shadow-lg">
        <h2 className="text-2xl font-bold text-blue-600 mb-10">Admin Panel</h2>
        <nav>
          <ul>
          <NavLink to='/admin/' className={({isActive})=>` hover:bg-blue-100 rounded-lg cursor-pointer ${isActive?'text-blue-600':'text-gray-700'}`}>    <li className="flex items-center p-3 ">
              <FaHome className="mr-3" /> Dashboard
            </li>
            </NavLink>
            <NavLink to=''>  <li className="flex items-center p-3 text-gray-700 hover:bg-blue-100 rounded-lg cursor-pointer">
             
              <FaUser className="mr-3" /> 
              Lab test
            </li>
            </NavLink>
            <li className="flex items-center p-3 text-gray-700 hover:bg-blue-100 rounded-lg cursor-pointer">
              <FaChartLine className="mr-3" /> Analytics
            </li>
            <li className="flex items-center p-3 text-gray-700 hover:bg-blue-100 rounded-lg cursor-pointer">
              <FaCog className="mr-3" /> Settings
            </li>
          </ul>
        </nav>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Top Navbar */}
        <header className="flex items-center justify-between p-5 bg-white shadow">
          <div className="text-xl font-semibold">Dashboard</div>
          <div className="flex items-center space-x-4">
            <input
              type="text"
              placeholder="Search..."
              className="px-4 py-2 border rounded-lg"
            />
            <button className="text-gray-500 hover:text-blue-600">🔔</button>
            <button className="text-gray-500 hover:text-blue-600">👤</button>
          </div>
        </header>

        {/* Dashboard Content */}
        <main className="p-5 overflow-y-auto">
          <section className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4 mb-10">
            {/* Metric Cards */}
            {/* <div className="p-6 bg-white shadow-lg rounded-lg">
              <h3 className="text-xl font-semibold mb-2">Total Sales</h3>
              <p className="text-3xl font-bold">$1,200</p>
              <FaDollarSign className="text-blue-500 mt-4 text-4xl" />
            </div>
            <div className="p-6 bg-white shadow-lg rounded-lg">
              <h3 className="text-xl font-semibold mb-2">New Users</h3>
              <p className="text-3xl font-bold">300</p>
              <FaUsers className="text-green-500 mt-4 text-4xl" />
            </div>
            <div className="p-6 bg-white shadow-lg rounded-lg">
              <h3 className="text-xl font-semibold mb-2">Orders</h3>
              <p className="text-3xl font-bold">150</p>
              <FaShoppingCart className="text-purple-500 mt-4 text-4xl" />
            </div>
            <div className="p-6 bg-white shadow-lg rounded-lg">
              <h3 className="text-xl font-semibold mb-2">Revenue</h3>
              <p className="text-3xl font-bold">$5,000</p>
              <FaDollarSign className="text-yellow-500 mt-4 text-4xl" />
            </div> */}
          </section>
<Outlet/>
          {/* Orders Section */}
        
        </main>
      </div>
    </div>
  );
};

export default Adminlayout;
