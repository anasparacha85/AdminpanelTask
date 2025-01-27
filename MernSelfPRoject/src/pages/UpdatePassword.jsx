import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const UpdatePassword = () => {
    const [user, setuser] = useState({password:''});
    const navigate=useNavigate()
    const onchange=(e)=>{
        const {name,value}=e.target;
        setuser({...user,[name]:value})
    }
    const onsubmit=(e)=>{
        e.preventDefault();
      //  console.log(user);
        
        fetch('http://23.22.178.222/api/auth/updatepassword',{
            method:'PATCH',
            body:JSON.stringify(user),
            headers:{
                Authorization:localStorage.getItem('otptoken'),
                'Content-Type':'application/json'

            }
        }).then((res)=>{
            if(res.ok){
                navigate('/')
                localStorage.removeItem('otptoken')

            }
            return res.json()
        }).then((Data)=>{
            console.log(Data);
           
            
        }).catch((eror)=>{
            console.log(eror);
            
        })
    }
  return (
    <div>
         <div className="flex items-center justify-center w-full lg:w-1/2 bg-gray-100 p-6">
      <form onSubmit={onsubmit}  className="space-y-6">
           <h1 className='text-black font-bold text-[24px] '>Enter your new password</h1>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">new Password</label>
              <input
                type="password"
                id="password"
                name="password"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                placeholder="Enter your password"
                required
            value={user.password}
                onChange={onchange}
              />
            </div>

            <button
              type="submit"
              className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Set password
            </button>
          </form>
          </div>

    </div>
  )
}

export default UpdatePassword
