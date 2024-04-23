"use client"

import React from 'react'
import Navbar from '../components/Navbar'
import { useSession } from 'next-auth/react'
import { redirect } from 'next/navigation'

const Welcome = () => {

  const { data: session } = useSession();
  console.log(session)

  if (!session) redirect("/login")

  return (
    <div >
        <Navbar session={session} />
        <div className='m-5'>
            <h3 className='text-3xl my-3 font-bold'>Welcome {session?.user?.name}</h3>
            <p>Email: {session?.user?.email}</p>
            <hr className='py-2 '/>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas unde laboriosam quibusdam! Laborum perferendis ipsum est facere accusantium nostrum maxime earum praesentium alias rem ullam, at placeat deserunt in similique!</p>
        </div>
    </div>
  )
}

export default Welcome