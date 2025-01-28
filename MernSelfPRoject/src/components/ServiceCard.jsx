import React from 'react'

const ServiceCard = ({icon,title,description}) => {
  return (
    
       <div className="bg-white shadow-md rounded-lg p-6 hover:shadow-xl transition duration-300 ease-in-out">
      <div className="flex items-center mb-4">
        <div className="bg-blue-500 text-white p-4 rounded-full">
          {icon}
        </div>
        <h3 className="text-lg font-semibold ml-4">{title}</h3>
      </div>
      <p className="text-gray-600">{description}</p>
    </div>
    
  )
}

export default ServiceCard


