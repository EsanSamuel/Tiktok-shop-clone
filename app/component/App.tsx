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
        </div>
    )
}

export default App