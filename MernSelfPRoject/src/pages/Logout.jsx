import React, { useEffect } from 'react'
import { useAuth } from '../store/Auth'
import { Navigate } from 'react-router-dom';

const Logout = () => {
    const {LogoutTrue}=useAuth();
    useEffect(()=>{
        LogoutTrue()
    },[LogoutTrue])

  return <Navigate to='/'/>
  
  
}

export default Logout
