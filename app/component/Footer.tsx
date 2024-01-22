import { footer } from '@/constants'
import React from 'react'
import tiktok from '../assets/tiktok.png'
import Image from 'next/image'

const Footer = () => {
    return (
        <div className='md:pt-20 md:px-20 pt-10 p-5'>
            <div className='grid md:grid-cols-5 grid-cols-1 md:gap-0 gap-4'>
                {footer.map((item) => (
                    <div key={item.id}>
                        <div className='flex flex-col gap-2 cursor-pointer'>
                            <h1 className='text-[#fe2c55]'>{item.title}</h1>
                            <ul className='flex flex-col gap-2 text-[13px]'>
                                <li>{item.firstItem}</li>
                                <li>{item.secondItem}</li>
                                <li>{item.thirdItem}</li>
                                <li>{item.fourthItem}</li>
                                <li>{item.fifthItem}</li>
                            </ul>
                        </div>

                    </div>
                ))}
            </div>

            <Image src={tiktok} width={100} height={100} className='mt-20' alt='' />

            <div className=' pt-[10%] flex justify-between'>
                <ul className='text-[14px] flex md:flex-row flex-col gap-3 cursor-pointer'>
                    <li>© 2024 TikTok.</li>
                    <li>All rights reserved.</li>
                    <li>Privacy.</li>
                    <li>Cookie Policy.</li>
                    <li>Intellectual Property Protection.</li>
                </ul>

                <div>
                    <button className='px-3 border border-white text-white text-[13px] rounded py-2'>Contact Us</button>
                </div>
            </div>
        </div>
    )
}

export default Footer