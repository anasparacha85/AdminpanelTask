import React, { useEffect, useState } from 'react'
import { useAuth } from '../store/Auth'
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const UpdateUser = () => {
    const {jwttoken}=useAuth();
    const params=useParams()
    const navigate=useNavigate()
    const [userdata, setuserdata] = useState({name:'',email:'',isAdmin:''})
    const getuserbyid=(id)=>{
        fetch(`http://23.22.178.222/api/admin/user/${params.id}`,{
            method:'GET',
            headers:{
                Authorization:jwttoken
            }
        }).then((res)=>{
            return res.json()
        }).then((data)=>{
            console.log(data);
            setuserdata({name:data.name,email:data.email,isAdmin:data.isAdmin?'Yes':'No'})
            
        }).catch((error)=>{
            console.log(error);
            
        })
    }
    const updateuserbyId=(id)=>{
        fetch(`http://localhost:5000/api/admin/user/update/${params.id}`,{
            method:'PATCH',
            body:JSON.stringify(userdata),
            headers:{
                Authorization:jwttoken,
                'Content-Type':'application/json'
            }
        }
            
        ).then((res)=>{
          if(res.ok){
            navigate('/admin/')
            alert('user has been updated')
          }
          return res.json()
        }).then((data)=>{
            console.log(data);
            
        }).catch((error)=>{
            console.log(error);
            
        })
    }
    const onsubmit=(e)=>{
        e.preventDefault();
        updateuserbyId(params.id)
    }
    const onchange=(e)=>{
const {name,value}=e.target;
setuserdata({...userdata,[name]:value})
    }
    useEffect(()=>{
        getuserbyid(params.id)
    },[])
  return (
    <div>
       <form onSubmit={onsubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">Full Name</label>
              <input
                type="text"
                id="name"
                name="name"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                placeholder="Enter your full name"
                required
                 value={userdata.name}
                 onChange={onchange}
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                 value={userdata.email}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                placeholder="Enter your email"
                required
                 onChange={onchange}
              />
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">Admin</label>
              <input
                type="text"
                id="admin"
                name="isAdmin"
                value={userdata.isAdmin}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                placeholder="Create a password"
                required
                onChange={onchange}
              />
            </div>

           

            <button
              type="submit"
              className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              update
            </button>
          </form>
    </div>
  )
}

export default UpdateUser
