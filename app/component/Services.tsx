import { serviceItems } from '@/constants'
import React from 'react'

const Services = () => {
    return (
        <div className='sm:p-10 p-5 py-20'>
            <div className='md:p-20  pb-10'>
                <div className='text-center'>
                    <h1 className='md:text-[50px] text-[30px]'>TikTok Shop provides <span className='text-[#ee1d52]'>4 native ways</span> to shop</h1>
                    <p className='md:text-[20px] text-[14px] sm:pt-10 pt-5 '>It enables merchants and creators to showcase and sell products for the TikTok community to discover and purchase directly through a complete in-app experience.</p>
                </div>
            </div>

            <div className='flex sm:flex-row flex-col gap-8 '>
                {serviceItems.map((item) => (
                    <div key={item.id}>
                        <div className='flex flex-col sm:gap-3 gap-6 text-center text-white'>
                            <video src={item.video} className='sm:w-[350px] sm:h-[600px] rounded-[15px] w-full h-[600px]  '                     autoPlay 
                     controls={false} 
                     muted 
                     loop/>
                            <h1 className='text-[24px]'>{item.title}</h1>
                            <p className='md:text-[14px] text-[14px]'>{item.details}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Services