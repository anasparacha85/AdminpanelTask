import React from 'react'
import Elipse1 from '../../public/Ellipse 1.png'
import Elipse2 from '../../public/Ellipse 2 (1).png'
export const AuthLeftSide = () => {
  return (
    <div>
            {/* Left Side - Background Section */}
            <div className="hidden lg:flex w-1/2 lg:w-full h-screen bg-gradient-to-br from-blue-500 to-blue-900 items-center justify-center text-white p-10">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Go Finance</h1>
          <p className="text-lg">Log in to continue accessing your personalized dashboard and exclusive features.</p>
          <button className='py-2 px-4 bg-blue-600 text-white rounded-[50px] mt-4 '> Read More</button>
        </div>
        <div className='self-end -translate-x-[580px] translate-y-[160px]'>
        <div className='h-[250px] w-[250px] translate-y-[270px] translate-x-[30px]' > 
            <img src={Elipse1} alt="" />
            </div>
            <div className='h-[250px] w-[250px] relative  ' > 
            <img src={Elipse2} alt=""  />
        </div>
        </div>
        
      </div>
     
    </div>
  )
}

export default AuthLeftSide
