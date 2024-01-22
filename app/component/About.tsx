import { aboutItems } from '@/constants'
import React from 'react'

const About = () => {
    return (
        <div className='md:p-20 p-5 py-10'>
            <div className='text-center'>
                <h1 className='md:text-[60px] text-[30px]'>Shopping, powered by <span className='text-[#ee1d52]'>TikTok</span></h1>
                <p className='md:text-[20px] text-[14px] sm:pt-10 pt-5 '>TikTok Shop is paving an entirely new way for brands to authentically connect with creators and communities to grow their business and drive meaningful shopping moments.</p>
            </div>

            <div className='md:p-20 md:flex justify-between gap-20'>
                <video src='https://sf16-va.tiktokcdn.com/obj/eden-va2/shayvW_Z[[/ljhwZthlaukjlkulzlp/uk_portal/Ukportal1.mp4'
                    className='sm:w-[350px] sm:h-[600px] rounded-[15px] w-full h-[250px] bg-black sm:flex hidden'
                    autoPlay
                    loop
                    controls={false}
                    muted />

                <div className='flex flex-col gap-8 md:pt-0 pt-20 w-full'>
                    {aboutItems.map((item) => (
                        <div key={item.id}>
                            <div className=''>
                                <div className='flex flex-col gap-2 md:text-start text-center'>
                                    <h1 className='text-[24px]'>{item.title}</h1>
                                    <p className='md:text-[14px] text-[14px] font-light'>{item.details}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className='sm:hidden pt-10'>
                <video src='https://sf16-va.tiktokcdn.com/obj/eden-va2/shayvW_Z[[/ljhwZthlaukjlkulzlp/uk_portal/Ukportal1.mp4'
                    className=' rounded-[15px] w-full h-[600px] bg-black sm:hidden'
                    autoPlay
                    loop
                    controls={false}
                    muted />
                </div>
            </div>
        </div>
    )
}

export default About