import React, { useState } from "react";
import { useAuth } from "../store/Auth";
import { useNavigate } from "react-router-dom";

const OTPVerification = () => {
  const [otp, setOtp] = useState(new Array(5).fill("")); // Initialize OTP with 5 empty fields
  const [error, setError] = useState("");
  
const handleChange=(value,index)=>{
  if(isNaN(value)){
    return
  }
  const newOtp=[...otp];
  newOtp[index]=value.slice(-1);
  setOtp(newOtp)
  if(value&&index <otp.length-1){
    document.getElementById(`otp-${index+1}`).focus()
  }
  
  
  
}
const navigate=useNavigate()
const handleKeyDown=(event,index)=>{
  console.log(!otp[index]);
  
   if(event.key=='Backspace' && !otp[index] && index>0){
    document.getElementById(`opt-${index-1}`).focus()
   }
  
}
  // // Handle input change for each OTP box
  // const handleChange = (value, index) => {
  //   if (isNaN(value)) return; // Ensure only numbers are allowed

  //   const newOtp = [...otp];
  //   newOtp[index] = value.slice(-1);
  //   console.log('slice',value.slice(-1));
  //    // Only allow 1 digit per input box
  //   setOtp(newOtp);
  //   console.log('length',otp.length);
    

  //   // Move focus to the next input field
  //   if (value && index < otp.length - 1) {
  //     document.getElementById(`otp-${index + 1}`).focus();
  //   }
  // };

  // // Handle backspace key to move to the previous field
  // const handleKeyDown = (event, index) => {
  //   if (event.key === "Backspace" && !otp[index] && index > 0) {
  //     document.getElementById(`otp-${index - 1}`).focus();
  //   }
  // };
  const token=localStorage.getItem('otptoken')
  console.log(token);
  
  const onVerify=(enteredOtp)=>{
    let ottp=parseInt(enteredOtp)
    console.log(ottp,typeof(ottp));
  
    
    fetch('http://23.22.178.222/api/auth/VerifyOTP',{
      method:'POST',
      body:JSON.stringify({ otp: enteredOtp }),
      headers:{
      Authorization:token,
        'Content-Type':'application/json'
      }
    }).then((res)=>{
      if(res.ok){
navigate('/setpassword')
      }
      return res.json()
    }).then((data)=>{
      console.log(data);
      
      
    }).catch((error)=>{
      console.log(error);
      
    })
    
  }

  // Handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    
    const enteredOtp = otp.join("");
    if (enteredOtp.length < 5) {
      setError("Please enter a valid 5-digit OTP.");
    } else {
      setError("");
      onVerify(enteredOtp); // Call the onVerify function with the OTP
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">OTP Verification</h2>
      <p className="text-gray-600 mb-6">
        Please enter the 5-digit OTP sent to your email.
      </p>

      <form onSubmit={handleSubmit} className="flex flex-col items-center">
        <div className="flex gap-2 mb-4">
          {otp.map((value, index) => (
            <input
              key={index}
              type="text"
              id={`otp-${index}`}
              className="w-12 h-12 text-center border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-xl"
              value={value}
              onChange={(e) => handleChange(e.target.value, index)}
              onKeyDown={(e) => handleKeyDown(e, index)}
              maxLength={1} // Restrict to one character per box
            />
          ))}
        </div>
        {error && <p className="text-red-500 mb-4">{error}</p>}

        <button
          type="submit"
          className="bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
        >
          Verify OTP
        </button>
      </form>
    </div>
  );
};

export default OTPVerification;
