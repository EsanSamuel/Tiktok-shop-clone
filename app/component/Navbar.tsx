"use client"
import { navItems } from '@/constants'
import React, { useState } from 'react'
import Button from './Button'
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai'

const Navbar = () => {
  const [openModal, setOpenModal] = useState(false)
  return (
    <div>
      <div className='pt-0 z-50 sm:hidden fixed  w-full '>
        {openModal && (
          <div className='z-20 bg-white p-5 h-[100vh] sm:hidden w-full'>
            <div className='flex justify-between text-black pb-10'>
              <h1 className='text-black text-[20px] flex gap-2'>TikTok <p className=''>Shop</p></h1>
              <AiOutlineClose onClick={() => setOpenModal(false)} /> </div>
            <div className='flex gap-7 flex-col text-black'>
              {navItems.map((nav) => (
                <ul key={nav.id} >
                  <li className='hover:text-[#fe2c55]'>{nav.name}</li>
                </ul>
              ))}
            </div>
            <div className='pt-10 sm:hidden sm:flex justify-center'>
              <Button title='Log In' isBigger />
            </div>
          </div>
        )}
      </div>
      <div className='flex gap-5 justify-between sm:px-20 py-5 p-5'>
        <h1 className='text-white text-[20px] flex gap-2'>TikTok <p className=''>Shop</p></h1>

        <div className='flex gap-7 md:flex hidden'>
          {navItems.map((nav) => (
            <ul key={nav.id} >
              <li className='hover:text-[#fe2c55]'>{nav.name}</li>
            </ul>
          ))}
        </div>
        <div className='flex gap-7 items-center mt-[-5px] md:flex hidden'>
          <h2>United Kingdom</h2>
          <Button title='Log in' />
        </div>

        <div className='md:hidden mt-1 font-bold' onClick={() => setOpenModal(true)}>
          <AiOutlineMenu />
        </div>

      </div>

    </div>
  )
}

export default Navbar