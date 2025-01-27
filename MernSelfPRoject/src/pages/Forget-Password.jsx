import React from 'react'
import { useState } from 'react'
import { Navigate, useNavigate } from 'react-router-dom'
import { useAuth } from '../store/Auth'

const ForgetPassword = () => {
    const [forget, setforget] = useState({email:''})
    const navigate=useNavigate()
    const {setotptokentols}=useAuth()
    const onchange=(e)=>{
        const {name,value}=e.target
        setforget({...forget,[name]:value})
        console.log(forget);
        
        
    }
    const onsubmit=(e)=>{
        e.preventDefault()
        fetch('http://23.22.178.222/api/auth/forgetpassword',{
            method:'POST',
            body:JSON.stringify(forget),
            headers:{
                'Content-Type':'application/json'
            }
        }).then((res)=>{
            if(res.ok){
                console.log(res);
                navigate('/OTP')
             
            return res.json()
            }
        }).then((data)=>{
            console.log(data);
            
              
              setotptokentols(data.token)
          
            
        }).catch((error)=>{
            console.log(error);
            
        })
        


    }
  return (
    <div>
         <div className="flex items-center justify-center mt-[200px] bg-gray-100 p-6">
        <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">Enter Your Email</h2>
          
       <form onSubmit={onsubmit} className="space-y-6">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                placeholder="Enter your email"
                required
                value={forget.email}
               onChange={onchange}
              />
            </div>


     
             
            <button
              type="submit"
              className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Submit
            </button>
          </form>
          </div>
          </div>
    </div>
  )
}

export default ForgetPassword
