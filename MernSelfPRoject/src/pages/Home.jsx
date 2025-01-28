import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import { useAuth } from "../store/Auth";
import ServiceCard from "../components/ServiceCard";
import ScrollAnimation from "react-animate-on-scroll";
import Aos from "aos";
import 'aos/dist/aos.css'

const Home = () => {
  const {User,isLoggedIn,servicedata}=useAuth();
  console.log('hello userr',User);
  
console.log(servicedata);
useEffect(()=>{
  Aos.init()
},[])

 
   
  return (
    <>
    <Header/>
    <div className="text-gray-800">
      {/* Hero Section */}
      <section className="bg-indigo-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
    {isLoggedIn&&<h1 className="text-4xl font-bold mb-4">Welcome {User.name} to Our Website </h1>}  
         
          <p className="text-lg mb-6">Discover our services, latest blogs, and more. Let's create something amazing together!</p>
          <button className="bg-white text-indigo-600 px-6 py-2 rounded-md font-semibold hover:bg-indigo-100">Get Started</button>
        </div>
      </section>

      {/* About Us Section */}
      <section className="bg-gray-100 py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-4">About Us</h2>
          <p className="text-center text-lg max-w-3xl mx-auto mb-8">
            We are a dedicated team focused on delivering exceptional service to our clients. Our mission is to drive growth and success through innovative solutions.
          </p>
          <div className="flex justify-center">
            <img src="about-image.jpg" alt="About Us" className="rounded-lg shadow-lg max-w-sm" />
          </div>
        </div>
      </section>

      {/* Our Services Section */}
      <section className="bg-white py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-4">Our Services</h2>
          
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 mt-8 " data-aos="flip-left" data-aos-easing="ease-out-cubic"
     data-aos-duration="2000">
          {servicedata.map((data,index)=>{
        return <ServiceCard key={data._id} icon={data.icon} title={data.title} description={data.description} />
       })}
          </div>
          
        </div>
      </section>

      {/* Blogs Section */}
      <section className="bg-gray-100 py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-4">Latest Blogs</h2>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 mt-8">
            <div className="p-6 bg-white rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-2">Blog Post 1</h3>
              <p className="text-gray-600">A brief introduction to the content of Blog Post 1.</p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-2">Blog Post 2</h3>
              <p className="text-gray-600">A brief introduction to the content of Blog Post 2.</p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-2">Blog Post 3</h3>
              <p className="text-gray-600">A brief introduction to the content of Blog Post 3.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="bg-white py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-4">Testimonials</h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 mt-8">
            <div className="p-6 bg-gray-100 rounded-lg shadow">
              <p className="text-gray-700 mb-4">"Fantastic service and support!"</p>
              <h3 className="text-lg font-semibold">- Customer 1</h3>
            </div>
            <div className="p-6 bg-gray-100 rounded-lg shadow">
              <p className="text-gray-700 mb-4">"Highly recommend to anyone in need of great service."</p>
              <h3 className="text-lg font-semibold">- Customer 2</h3>
            </div>
            <div className="p-6 bg-gray-100 rounded-lg shadow">
              <p className="text-gray-700 mb-4">"Amazing experience from start to finish!"</p>
              <h3 className="text-lg font-semibold">- Customer 3</h3>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Us Section */}
      <section className="bg-gray-100 py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Contact Us</h2>
          <p className="text-lg max-w-2xl mx-auto mb-6">Have questions or want to work with us? Fill out the form below, and we'll get back to you soon!</p>
          <form className="max-w-xl mx-auto space-y-4">
            <input type="text" placeholder="Your Name" className="w-full px-4 py-2 border rounded-md" required />
            <input type="email" placeholder="Your Email" className="w-full px-4 py-2 border rounded-md" required />
            <textarea placeholder="Your Message" className="w-full px-4 py-2 border rounded-md" rows="4" required></textarea>
            <button type="submit" className="bg-indigo-600 text-white px-6 py-2 rounded-md font-semibold hover:bg-indigo-700">Send Message</button>
          </form>
        </div>
      </section>
      
    </div>
    </>
  );
};

export default Home;
