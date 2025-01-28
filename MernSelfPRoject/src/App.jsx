import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Outlet } from 'react-router-dom'
import { AuthProvider } from './store/Auth'

function App() {


  return (
    <>
    <AuthProvider>
    <Outlet/>
    </AuthProvider>
  
    </>
  )
}

export default App
