"use client"

import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import Link from 'next/link'

const Login = () => {
  return (
    <div>
        <Navbar />
        <div className='container mx-auto py-5'>
            <h3>Login Page</h3>
            <hr className='my-3'/>
            <form action=''>
                <input className='block bg-gray-100 p-2 my-2 rounded-md' type="email" placeholder='Enter your email' />
                <input className='block bg-gray-100 p-2 my-2 rounded-md' type="password" placeholder='Enter your password' />
                <button type="submit" className='bg-green-500 p-2 my-2 text-white rounded-md'>Sign In</button>
            </form>
            <hr />
            <p>Do not have an account? go to <Link className="text-blue-500 hover:underline" href="/register">Register</Link> Page</p>
    
        </div>
    </div>
  )
}

export default Login