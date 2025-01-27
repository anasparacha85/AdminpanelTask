import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createRoutesFromElements, createBrowserRouter, Route } from 'react-router-dom'
import Login from './pages/Login.jsx'
import REEGISTER from './pages/REEGISTER.jsx'
import Home from './pages/Home.jsx'
import Logout from './pages/Logout.jsx'
import ForgetPassword from './pages/Forget-Password.jsx'
import Adminlayout from './layout/Adminlayout.jsx'
import Adminusers from './pages/Adminusers.jsx'
import UpdateUser from './pages/UpdateUser.jsx'
import DeleteUser from './pages/DeleteUser.jsx'
import OTPVerification from './pages/OTPPAGE.jsx'
import UpdatePassword from './pages/UpdatePassword.jsx'
import AdminRoute from './Routes/AdminRoutes.jsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App/>}>
      <Route index element={<Login />} />
      <Route path='/home' element={<Home/>}/>
      <Route path='/register' element={<REEGISTER/>}/>
      <Route path='/forget' element={<ForgetPassword/>}/>
      <Route path='/OTP' element={<OTPVerification/>}/>
      <Route path='/logout' element={<Logout/>}/>
      <Route path='/setpassword' element={<UpdatePassword/>}/>
      
      {/* Wrap admin routes with AdminRoute protection */}
      <Route element={<AdminRoute />}>
        <Route path='/admin' element={<Adminlayout/>}>
          <Route index element={<Adminusers />} />
          <Route path='users/:id/edit' element={<UpdateUser/>}/>
          <Route path='users/:id/delete' element={<DeleteUser/>}/>
        </Route>
      </Route>
    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>
)