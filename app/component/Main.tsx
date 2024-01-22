import React from 'react'
import Button from './Button'
import Image from 'next/image'
import left from '../assets/left.png'
import right from '../assets/right.png'

const Main = () => {
    return (
        <div className='md:p-20 p-5 md:flex justify-between'>
            <div>
                <h1 className='md:text-[60px] text-[30px] md:max-w-[500px] md:mt-20 mt-10 md:text-start text-center'>
                    <span className='text-[#ee1d52]'>TikTok Shop</span> <br />
                    Create joy and sell more
                </h1>
                <p className='md:pt-10 pt-5 md:text-[20px] text-[13px] md:max-w-[500px] md:text-start text-center'>
                    Let your customers discover and buy your products the fun way.
                </p>
                <div className='pt-10 md:flex hidden'>
                    <Button title='Get Started' isBigger />
                </div>
            </div>

            <div className='flex items-center justify-center'>
                <Image src={left}
                    width={1000}
                    height={1000}
                    alt=''
                    className='sm:w-[200px] sm:h-[400px] w-[150px] h-[250px] rounded-[20px] sm:mr-[-120px] mr-[-60px]'
                />
                <video src='https://sf16-va.tiktokcdn.com/obj/eden-va2/shayvW_Z[[/ljhwZthlaukjlkulzlp/uk_portal/UK_hero_zip.mp4'
                    autoPlay
                    controls={false}
                    muted
                    loop
                    className='sm:w-[400px] sm:h-[600px] w-[200px] h-[400px] rounded-[20px] z-20' />
                <Image src={right}
                    width={1000}
                    height={1000}
                    alt=''
                    className='sm:w-[200px] sm:h-[400px] w-[150px] h-[250px]  rounded-[20px] sm:ml-[-120px]  ml-[-60px] mt-20'
                />

            </div>
            <div className='pt-10 sm:hidden sm:flex justify-center'>
                    <Button title='Get Started' isBigger />
                </div>
            
        </div>
    )
}

export default Main
