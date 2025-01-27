import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useAuth } from "../store/Auth";
import AuthLeftSide from "../components/AuthLeftSide";


const REEGISTER = () => {
    const [register, setregister] = useState({name:'',email:'',password:'',confirmPassword:''})
    const navigate=useNavigate()
    const {settoKentoLS}=useAuth()
   const onchange=(e)=>{
    const {name,value}=e.target;
    setregister({...register,[name]:value})

    }
    const onsubmit=(e)=>{
        e.preventDefault();
        fetch('http://23.22.178.222/api/auth/register',{
            method:'POST',
            body:JSON.stringify(register),
            headers:{
                'Content-Type':'application/json'
            }
        }).then((res)=>{
          console.log(res);
          if(res.ok){
            navigate('/')
          }
          
            return res.json()
        }).then((data)=>{
            console.log('register data',data);
            if(data.msg){
            alert(data.msg)
            }
            else if(data.extradetails){
              alert(data.extradetails)
            }
settoKentoLS(data.token)
            
        }).catch((error)=>{
            console.log('error fetching data ',error);
            
        })
    }
  return (
   
    <div className="flex min-h-screen overflow-y-hidden">
      {/* Left Side - Background Section */}
      <AuthLeftSide/>

      {/* Right Side - Form Section */}
      <div className="flex items-center justify-center w-full lg:w-1/2 bg-white p-6">
        <div className=" p-8 rounded-lg  w-full max-w-md">
        <h2 className="text-3xl font-bold  text-gray-800 mb-3">Hello </h2>
        <h4 className="text-xl   text-gray-600 mb-6">Signup to get started </h4>
          
          <form onSubmit={onsubmit} className="space-y-6">
            <div>
              <input
                type="text"
                id="name"
                name="name"
                className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-[30px]  shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                placeholder="Enter your full name"
                required
                value={register.name}
                onChange={onchange}
              />
            </div>

            <div>
              <input
                type="email"
                id="email"
                name="email"
                value={register.email}
                className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-[30px]  shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                placeholder="Enter your email"
                required
                onChange={onchange}
              />
            </div>

            <div>
              <input
                type="password"
                id="password"
                name="password"
                value={register.password}
                className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-[30px]  shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                placeholder=" password"
                required
                onChange={onchange}
              />
            </div>

            <div>
              <input
                type="password"
                id="confirmPassword"
                name="confirmPassword"
                value={register.confirmPassword}
                className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-[30px]  shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                placeholder="Confirm your password"
                required
                onChange={onchange}
                
              />
            </div>

            <button
              type="submit"
              className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-[30px]  shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Register
            </button>
          </form>

          <p className="mt-6 text-center text-sm text-gray-600">
            Already have an account?{" "}
            <NavLink to="/" className="text-indigo-600 hover:text-indigo-500 font-medium">
              Login
            </NavLink>
          </p>
        </div>
      </div>
    </div>
  );
};

export default REEGISTER;
