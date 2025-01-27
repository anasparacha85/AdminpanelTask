import React, { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { Navigate } from "react-router-dom";
import AuthLeftSide from "../components/AuthLeftSide";

import { useAuth } from "../store/Auth";
const Login = () => {
    const [user, setUser] = useState({email:'',password:''})
    const navigate=useNavigate()
    const {settoKentoLS,userAuthentication,jwttoken}=useAuth()
    const onchange=(e)=>{
        const {name,value}=e.target;
        setUser({...user,[name]:value})

    }
    useEffect(()=>{
      if(jwttoken){
        navigate('/home')
      }
    },[navigate])
  const onsubmit=(e)=>{
    e.preventDefault()
    console.log(user);
    
    fetch('http://23.22.178.222/api/auth/',{
        method:'POST',
        body:JSON.stringify(user),
        headers:{
            'Content-Type':'application/json'}
    }).then((res)=>{
      if(res.ok){
navigate('/home',{replace:true})


      }
        return res.json()

    }).then((data) => {
      console.log('Response Data:', data); // Log the whole response object
      if (data.msg) {
        alert(data.msg);
      } else if (data.extradetails) {
        alert(data.extradetails);
      }
    
      if (data.data && data.data.isAdmin !== undefined) {
        console.log('isAdmin:', data.data.isAdmin); 
        localStorage.setItem('isAdmin', data.data.isAdmin);
      } else {
        console.error('isAdmin is not found in the response.');
      }
    
      settoKentoLS(data.token);
    })
    .catch((error)=>{
        console.log('error fetching login data');
        
    })
  }
    
  return (
    <>
  
    <div className="flex min-h-screen">
       
      {/* Left Side - Background Section */}
     
    <AuthLeftSide/>
   
      {/* Right Side - Form Section */}
      <div className="flex items-center justify-center w-full lg:w-1/2 bg-white p-6">
        <div className="bg-transparent p-8 rounded-lg  w-full max-w-md">
          <h2 className="text-3xl font-bold  text-gray-800 mb-3">Hello Again</h2>
          <h4 className="text-xl   text-gray-600 mb-6">Welcome back</h4>
          
          <form onSubmit={onsubmit} className="space-y-6">
            <div>
              <input
                type="email"
                id="email"
                name="email"
                className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-[30px] shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                placeholder="Enter your email"
                required
                value={user.email}
               onChange={onchange}
              />
            </div>

            <div>
              <input
                type="password"
                id="password"
                name="password"
                className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-[30px] shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                placeholder="Enter your password"
                required
                value={user.password}
                onChange={onchange}
              />
            </div>

            <div className="flex items-center justify-between">
              <label className="inline-flex items-center">
                <input type="checkbox" className="form-checkbox h-4 w-4 text-indigo-600" />
                <span className="ml-2 text-sm text-gray-600">Remember me</span>
              </label>
              <NavLink to="/forget" className="text-sm text-indigo-600 hover:text-indigo-500">Forgot Password?</NavLink>
            </div>

            <button
              type="submit"
              className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-[30px] shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Sign In
            </button>
          </form>

          <p className="mt-6 text-center text-sm text-gray-600">
            Don't have an account?{" "}
            <NavLink to="/register" className="text-indigo-600 hover:text-indigo-500 font-medium">
              Sign Up
            </NavLink>
          </p>
        </div>
      </div>
    </div>
    </>
  );
};

export default Login;
