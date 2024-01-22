import Image from 'next/image'
import React from 'react'
import academy from '../assets/academy.png'
import affiliate from '../assets/affiliate.png'
import Button from './Button'

const Reviews = () => {
    return (
        <div className='md:p-20 p-5 py-20'>
            <div className='flex md:flex-row flex-col justify-between w-full gap-20'>
                <div>
                    <div className='flex flex-col gap-3'>
                        <Image src={academy} width={1000} height={1000} alt='' className='md:h-[300px] h-[200px] rounded-[20px]' />
                        <h1 className='text-[30px]'>
                            TikTok Shop Academy
                        </h1>
                        <p className='text-[13px] font-light md:max-w-[500px] max-h-[100px]'>TikTok Shop Academy is the central educational hub for sellers and creators to learn best practices and steps to maximise their selling potential on TikTok Shop.</p>
                    </div>
                    <div className='pt-5'>
                        <button className='px-10 border border-[#fe2c55] bg-white text-[#fe2c55] py-1 rounded'>Visit</button>
                    </div>
                </div>
                <div >
                    <div className='flex flex-col gap-3'>
                        <Image src={affiliate} width={1000} height={1000} alt='' className='md:h-[300px] h-[200px] rounded-[20px]' />
                        <h1 className='text-[30px]'>
                            Affiliate Centre
                        </h1>
                        <p className='text-[13px] font-light md:max-w-[500px] max-h-[100px]'>The Affiliate Centre connects creators and sellers through creativity and commission. Sellers can link up with creators and pay commission on successful sales.</p>
                    </div>
                    <div className='pt-5'>
                        <button className='px-10 border border-[#fe2c55] bg-white text-[#fe2c55] py-1 rounded'>Visit</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Reviews