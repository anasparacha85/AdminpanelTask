import React, { useEffect, useState } from 'react'
import { FaHome, FaUser, FaChartLine, FaCog, FaDollarSign, FaUsers, FaShoppingCart, FaEdit, FaTrash } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { useAuth } from '../store/Auth';
const Adminusers = () => {
    const [adminusers, setadminusers] = useState([])
    const {jwttoken}=useAuth()
    const fetchadminusers=()=>{
        fetch('http://localhost:5000/api/admin/user',{
            method:'GET',
            headers:{
                Authorization:jwttoken
            }
        }).then((res)=>{
            return res.json()
        }).then((data)=>{
            console.log('Admin users ka bara data ',data);
            setadminusers(data)
            console.log(adminusers);
            
            
        }).catch((error)=>{
            console.log('error fetching admin user data');
            
        })
    }
   
   
    useEffect(()=>{
        fetchadminusers()
    },[])
  return (
    <div>
        <section className="bg-white p-6 shadow-lg rounded-lg">
            <h3 className="text-xl font-semibold mb-4">All Users</h3>
            <table className="w-full text-left">
              <thead>
                <tr>
                  <th className="py-2 border-b">name</th>
                  <th className="py-2 border-b">email</th>
                  <th className="py-2 border-b">isAdmin</th>
                  <th className="py-2 border-b">update</th>
                  <th className="py-2 border-b">delete</th>
                </tr>
              </thead>
              <tbody>
                {adminusers.map((data,index)=>{
                    return <tr key={data._id} >
                    <td className="py-2 border-b">{data.name}</td>
                    <td className="py-2 border-b">{data.email}</td>
                    <td className="py-2 border-b">{data.isAdmin?'Yes':'NO'}</td>
                    <td className="py-2 border-b"><Link to={`/admin/users/${data._id}/edit`}><button className='  p-2 text-lg rounded-[26px]'> <FaEdit className="mr-3" /></button></Link></td>
                    <td className="py-2 border-b"><Link to={`/admin/users/${data._id}/delete`}><button  className='  p-2 text-lg rounded-[26px]'><FaTrash className="mr-3" /></button></Link></td>
                  </tr>
                })}
                
               
                {/* Add more rows as needed */}
              </tbody>
            </table>
          </section>
    </div>
  )
}

export default Adminusers
