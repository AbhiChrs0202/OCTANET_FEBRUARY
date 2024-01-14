import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'

function Homepage() {
  return (
    <div>
        <Navbar />
        <div className=" min-h-screen flex items-center justify-center">
        <div className=" text-center text-4xl ">
          <span className="font-bold" >
            Welcome To the Website
          </span>
        </div>
      </div>
        
        <Footer />
    </div>
  )
}

export default Homepage