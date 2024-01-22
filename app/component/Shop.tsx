import Image from 'next/image'
import React from 'react'
import sellers from '../assets/sellers.jpg'
import creator from '../assets/creator.jpg'
import lady from '../assets/lady.jpg'
import partner from '../assets/partners.jpg'

const Shop = () => {
    return (
        <div className='py-10'>
            <div className='text-center md:p-10 p-5'>
                <h1 className='md:text-[60px] text-[30px]'>Let&apos;s talk Shop</h1>
                <p className='md:text-[20px] text-[16px] sm:pt-10 pt-5'>See what TikTok Shop can do For You.</p>
            </div>

            <div className='flex sm:gap-7 gap-5 overflow-auto pt-10 text-center text-black md:p-10 pl-5'>
                <div className='bg-white sm:rounded-[10px] rounded-[5px] flex flex-col gap-5 min-w-[200px]'>
                    <Image src={sellers} width={1000} height={1000} className='sm:rounded-t-[10px] rounded-t-[5px] md:h-[200px] h-[150px]' alt='' />
                    <div className='px-5 pb-10'>
                        <h1 className='text-[25px] pb-5'>Sellers</h1>
                        <button className='w-full py-2 rounded text-white bg-[#fe2c55]'>Join Now</button>
                    </div>
                </div>
                <div className='bg-white sm:rounded-[10px] rounded-[5px]  flex flex-col gap-5 min-w-[200px]'>
                    <Image src={creator} width={1000} height={1000} className='sm:rounded-t-[10px] rounded-t-[5px] md:h-[200px] h-[150px]' alt='' />
                    <div className='px-5 pb-10'>
                        <h1 className='text-[25px] pb-5'>Creators</h1>
                        <button className='w-full py-2 rounded text-white bg-[#fe2c55]'>Join Now</button>
                    </div>
                </div>
                <div className='bg-white sm:rounded-[10px] rounded-[5px]  flex flex-col gap-5 min-w-[200px]'>
                    <Image src={partner} width={1000} height={1000} className='sm:rounded-t-[10px] rounded-t-[5px] md:h-[200px] h-[150px]' alt='' />
                    <div className='px-5 pb-10'>
                        <h1 className='text-[25px] pb-5'>Partners</h1>
                        <button className='w-full py-2 rounded text-white bg-[#fe2c55]'>Join Now</button>
                    </div>
                </div>
                <div className='bg-white sm:rounded-[10px] rounded-[5px]  flex flex-col gap-5 min-w-[200px]'>
                    <Image src={lady} width={1000} height={1000} className='sm:rounded-t-[10px] rounded-t-[5px] md:h-[200px] h-[150px]' alt='' />
                    <div className='px-5 pb-10'>
                        <h1 className='text-[25px] pb-5'>Affiliate</h1>
                        <button className='w-full py-2 rounded text-white bg-[#fe2c55]'>Join Now</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Shop