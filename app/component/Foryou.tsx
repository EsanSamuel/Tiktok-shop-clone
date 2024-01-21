"use client"
import React, { useState } from 'react'
import Button from './Button'
import { creatorItems, sellerItems } from '@/constants'
import Image from 'next/image'
import sellers from '../assets/sellers.jpg'
import creators from '../assets/creator.jpg'

const Foryou = () => {
    const [seller, setSeller] = useState(true)
    const [creator, setCreator] = useState(false)
    const [isActive,setIsActive] = useState(false)

    const showCreator = () => {
        setCreator(true)
        setSeller(false)
    }

    const showSeller = () => {
        setCreator(false)
        setSeller(true)
    }
    return (
        <div className='md:p-20 p-5 py-20'>
            <div className='text-center'>
                <h1 className='md:text-[60px] text-[30px]'>TikTok Shop For You</h1>
                <div className='flex sm:gap-7 gap-2 pt-10 items-center justify-center overflow-x-auto overflow-hidden'><h1 className='md:text-[30px] text-[16px] sm:flex hidden '>I am a</h1>
                    <Button title='Seller' isForyou onClick={showSeller} />
                    <Button title='Creator' isForyou onClick={showCreator} />
                    <Button title='Partner' isForyou />
                    <Button title='Affiliate' isForyou />
                </div>
            </div>

            {seller && (
                <div className='sm:flex justify-between gap-20'>
                    <div className='pt-20 sm:hidden'>
                        <Image src={sellers} width={1000} height={1000} className='sm:w-[600px] sm:h-[600px] rounded-[15px] w-full h-[250px] ' alt='' />
                    </div>
                    <div className='pt-20 flex flex-col gap-7'>
                        <h1 className='text-[#fe2c55] text-[25px]'>Sellers</h1>
                        <p>TikTok Shop enables brands to showcase and sell products for the TikTok community to discover and purchase.</p>
                        {creatorItems.map((item) => (
                            <div key={item.id}>
                                <div className='flex flex-col gap-2 '>
                                    <div className=''> <Image src={item.image} width={1000} height={1000} className='w-[40px] h-[40px]' alt='' /></div>
                                    <h1 className='text-[24px]'>{item.title}</h1>
                                    <p className='md:text-[14px] text-[14px]'>{item.details}</p>
                                </div>

                            </div>
                        ))}
                    </div>

                    <div className='pt-20 sm:flex hidden'>
                        <Image src={sellers} width={1000} height={1000} className='sm:w-[600px] sm:h-[600px] rounded-[15px] w-full h-[250px] ' alt='' />
                    </div>
                </div>
            )}

            {creator && (
                <div className='sm:flex justify-between gap-20'>
                    <div className='pt-20 sm:hidden'>
                        <Image src={creators} width={1000} height={1000} className='sm:w-[600px] sm:h-[600px] rounded-[15px] w-full h-[250px] ' alt='' />
                    </div>
                    <div className='pt-20 flex flex-col gap-7'>
                        <h1 className='text-[#fe2c55] text-[25px]'>Creator</h1>
                        <p>TikTok Shop enables brands to showcase and sell products for the TikTok community to discover and purchase.</p>
                        {sellerItems.map((item) => (
                            <div key={item.id}>
                                <div className='flex flex-col gap-2 '>
                                    <div className=''> <Image src={item.image} width={1000} height={1000} className='w-[40px] h-[40px]' alt='' /></div>
                                    <h1 className='text-[24px]'>{item.title}</h1>
                                    <p className='md:text-[14px] text-[14px]'>{item.details}</p>
                                </div>

                            </div>
                        ))}
                    </div>

                    <div className='pt-20 sm:flex hidden'>
                        <Image src={creators} width={1000} height={1000} className='sm:w-[600px] sm:h-[600px] rounded-[15px] w-full h-[250px] ' alt='' />
                    </div>
                </div>
            )}
            <div className='pt-10'>
                <Button title='Learn More' isBigger />
            </div>
        </div>
    )
}

export default Foryou