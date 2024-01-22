import { appItems } from '@/constants'
import React from 'react'

const App = () => {
    return (
        <div className='md:p-20 p-5 py-20'>
            <div className='flex sm:flex-row flex-col justify-between gap-20'>
                {appItems.map((item) => (
                    <div key={item.id}>
                        <div className='sm:px-1 px-10 text-center'>
                            <div className='flex items-center justify-center'>
                                <video src={item.video} className='w-[200px] h-[200px]' />
                            </div>
                            <div className='text-center'>
                                <h1 className='text-[50px]'>{item.title}</h1>
                                <p className='md:text-[17px] text-[14px]'>{item.details}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <p className='text-[#5f5f5f] text-[13px] text-center pt-20'>
                Sources: (1)TikTok Marketing Science Global Growing TikTok in eCommerce Study (UK Results) 2022 conducted by Material May 2022 (n=549) (2)TikTok Marketing Science Global Shopping Ad Products Study 2022 (UK Results) conducted by Material February 2022 (n=1,550) (3) TikTok Marketing Science Global Retail Path to Purchase (UK Results) conducted by Material August 2021 (n=1,601)
            </p>
        </div>
    )
}

export default App