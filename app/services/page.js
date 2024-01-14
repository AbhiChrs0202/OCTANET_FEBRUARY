"use client";

import React from 'react'
import { useRouter } from 'next/navigation'
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';


const page = () => {
    const router = useRouter();
    
  return (
    <section className="flex-grow">
      <Navbar />
      <div className=" min-h-screen flex items-center justify-center">
        <div className=" text-center text-4xl ">
          <span className="font-bold" onClick={() => router.push("/")}>
            This is Our Services Page
          </span>
        </div>
      </div>
      <Footer />
    </section>
  )
}

export default page