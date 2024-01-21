import { navItems } from '@/constants'
import React from 'react'
import Button from './Button'
import { AiOutlineMenu } from 'react-icons/ai'

const Navbar = () => {
  return (
    <div className='flex gap-5 justify-between sm:px-20 py-5 p-5'>
      <h1 className='text-white text-[20px] flex gap-2'>TikTok <p className=''>Shop</p></h1>

      <div className='flex gap-7 md:flex hidden'>
        {navItems.map((nav) => (
          <ul key={nav.id} >
            <li>{nav.name}</li>
          </ul>
        ))}
      </div>
      <div className='flex gap-7 items-center mt-[-5px] md:flex hidden'>
        <h2>United Kingdom</h2>
        <Button title='Log in' />
      </div>

      <div className='md:hidden mt-2 font-bold'>
        <AiOutlineMenu />
      </div>
    </div>
  )
}

export default Navbar