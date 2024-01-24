"use client"
import React, { useState } from 'react'
import Button from './Button'
import { affiliateItems, creatorItems, partnerItems, sellerItems } from '@/constants'
import Image from 'next/image'
import sellers from '../assets/sellers.jpg'
import creators from '../assets/creator.jpg'
import partners from '../assets/partners.jpg'
import affiliates from '../assets/affiliate.png'
import lady from '../assets/left.png'

const Foryou = () => {
    const [seller, setSeller] = useState(true)
    const [creator, setCreator] = useState(false)
    const [partner, setPartner] = useState(false)
    const [affiliate, setAffiliate] = useState(false)
    const [isActive, setIsActive] = useState(false)

    const showCreator = () => {
        setCreator(true)
        setSeller(false)
        setPartner(false)
        setAffiliate(false)
    }

    const showSeller = () => {
        setCreator(false)
        setSeller(true)
        setPartner(false)
        setAffiliate(false)
    }

    const showPartner = () => {
        setPartner(true)
        setCreator(false)
        setSeller(false)
        setAffiliate(false)
    }

    const showAffiliate = () => {
        setPartner(false)
        setAffiliate(true)
        setCreator(false)
        setSeller(false)
    }
    return (
        <div className='md:p-20 p-5 py-10'>
            <div className='text-center'>
                <h1 className='md:text-[60px] text-[30px]'>TikTok Shop For You</h1>
                <div className='flex sm:gap-7 gap-2 pt-10 md:items-center md:justify-center overflow-x-auto'><h1 className='md:text-[30px] text-[16px] sm:flex hidden '>I am a</h1>
                    <Button title='Seller' isForyou onClick={showSeller} />
                    <Button title='Creator' isForyou onClick={showCreator} />
                    <Button title='Partner' isForyou onClick={showPartner} />
                    <Button title='Affiliate' isForyou onClick={showAffiliate}/>
                </div>
            </div>

            {seller && (
                <div className='sm:flex justify-between gap-20'>
                    <div className='sm:pt-20 pt-10 sm:hidden'>
                        <Image src={sellers} width={1000} height={1000} className='sm:w-[600px] sm:h-[600px] rounded-[15px] w-full h-[150px] ' alt='' />
                    </div>
                    <div className='sm:pt-20 pt-10 flex flex-col gap-7'>
                        <h1 className='text-[#fe2c55] text-[25px]'>Sellers</h1>
                        <p className='font-light text-[14px] '>TikTok Shop enables brands to showcase and sell products for the TikTok community to discover and purchase.</p>
                        {creatorItems.map((item) => (
                            <div key={item.id}>
                                <div className='flex flex-col gap-2 '>
                                    <div className=''> <Image src={item.image} width={1000} height={1000} className='w-[40px] h-[40px]' alt='' /></div>
                                    <h1 className='text-[24px]'>{item.title}</h1>
                                    <p className='md:text-[14px] text-[14px] font-light'>{item.details}</p>
                                </div>

                            </div>
                        ))}
                    </div>

                    <div className='pt-[20%] sm:flex hidden'>
                        <Image src={sellers} width={5000} height={5000} className='sm:w-[600px] sm:h-[500px] rounded-[15px] w-full h-[250px] ' alt='' />
                    </div>
                </div>
            )}

            {creator && (
                <div className='sm:flex justify-between gap-20'>
                    <div className='sm:pt-20 pt-10 sm:hidden'>
                        <Image src={creators} width={1000} height={1000} className='sm:w-[600px] sm:h-[600px] rounded-[15px] w-full h-[150px] ' alt='' />
                    </div>
                    <div className='sm:pt-20 pt-10 flex flex-col gap-7'>
                        <h1 className='text-[#fe2c55] text-[25px]'>Creator</h1>
                        <p className='font-light text-[14px]'>TikTok Shop enables brands to showcase and sell products for the TikTok community to discover and purchase.</p>
                        {sellerItems.map((item) => (
                            <div key={item.id}>
                                <div className='flex flex-col gap-2 '>
                                    <div className=''> <Image src={item.image} width={1000} height={1000} className='w-[40px] h-[40px]' alt='' /></div>
                                    <h1 className='text-[24px]'>{item.title}</h1>
                                    <p className='md:text-[14px] text-[14px] font-light'>{item.details}</p>
                                </div>

                            </div>
                        ))}
                    </div>

                    <div className='pt-[20%] sm:flex hidden'>
                        <Image src={creators} width={1000} height={1000} className='sm:w-[600px] sm:h-[500px] rounded-[15px] w-full h-[250px] ' alt='' />
                    </div>
                </div>
            )}

            {partner && (
                <div className='sm:flex justify-between gap-20'>
                    <div className='sm:pt-20 pt-10 sm:hidden'>
                        <Image src={partners} width={1000} height={1000} className='sm:w-[600px] sm:h-[600px] rounded-[15px] w-full h-[150px] ' alt='' />
                    </div>
                    <div className='sm:pt-20 pt-10 flex flex-col gap-7'>
                        <h1 className='text-[#fe2c55] text-[25px]'>Partner</h1>
                        <p className='font-light text-[14px]'>TikTok Shop enables partners to facilitate a range of services for sellers and creators to help them grow on the platform.</p>
                        {partnerItems.map((item) => (
                            <div key={item.id}>
                                <div className='flex flex-col gap-2 '>
                                    <div className=''> <Image src={item.image} width={1000} height={1000} className='w-[40px] h-[40px]' alt='' /></div>
                                    <h1 className='text-[24px]'>{item.title}</h1>
                                    <p className='md:text-[14px] text-[14px] font-light'>{item.details}</p>
                                </div>

                            </div>
                        ))}
                    </div>

                    <div className='pt-20 sm:flex hidden'>
                        <Image src={partners} width={1000} height={1000} className='sm:w-[600px] sm:h-[500px] rounded-[15px] w-full h-[250px] ' alt='' />
                    </div>
                </div>
            )}

            {affiliate && (
                <div className='sm:flex justify-between gap-20'>
                    <div className='sm:pt-20 pt-10 sm:hidden'>
                        <Image src={affiliates} width={1000} height={1000} className='sm:w-[600px] sm:h-[600px] rounded-[15px] w-full h-[150px] ' alt='' />
                    </div>
                    <div className='sm:pt-20 pt-10 flex flex-col gap-7'>
                        <h1 className='text-[#fe2c55] text-[25px]'>Affiliate</h1>
                        <p className='font-light text-[14px]'>TikTok Shop&apos;s affiliate programme gives creators a new and exciting opportunity to monetize their content, creativity and influence by collaborating with sellers on TikTok.
                        </p>
                        {affiliateItems.map((item) => (
                            <div key={item.id}>
                                <div className='flex flex-col gap-2 '>
                                    <div className=''> <Image src={item.image} width={1000} height={1000} className='w-[40px] h-[40px]' alt='' /></div>
                                    <h1 className='text-[24px]'>{item.title}</h1>
                                    <p className='md:text-[14px] text-[14px] font-light'>{item.details}</p>
                                </div>

                            </div>
                        ))}
                    </div>

                    <div className='pt-20 sm:flex hidden'>
                        <Image src={lady} width={1000} height={1000} className='sm:w-[600px] sm:h-[500px] rounded-[15px] w-full h-[250px] ' alt='' />
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