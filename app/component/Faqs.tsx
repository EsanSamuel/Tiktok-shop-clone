"use client"
import React, { useState } from 'react'

const Faqs = () => {
    const [firstFaq, setFirstFaq] = useState(false)
    const [secondFaq, setSecondFaq] = useState(false)
    const [thirdFaq, setThirdFaq] = useState(false)
    const [fourthFaq, setFourthFaq] = useState(false)
    const [fifthFaq, setFifthFaq] = useState(false)

    const openFirst = () => {
        if (firstFaq) {
            setFirstFaq(false)
        } else {
            setFirstFaq(true)
        }
    }
    const openSecond = () => {
        if (secondFaq) {
            setSecondFaq(false)
        } else {
            setSecondFaq(true)
        }
    }
    const openThird = () => {
        if (thirdFaq) {
            setThirdFaq(false)
        } else {
            setThirdFaq(true)
        }
    }
    const openFourth = () => {
        if (fourthFaq) {
            setFourthFaq(false)
        } else {
            setFourthFaq(true)
        }
    }
    const openFifth = () => {
        if (fifthFaq) {
            setFifthFaq(false)
        } else {
            setFifthFaq(true)
        }
    }

    return (
        <div className='md:p-20 p-5 py-20'>
            <div className='text-center'>
                <h1 className='md:text-[60px] text-[30px]'>FAQ</h1>

            </div>

            <div className='pt-10 flex flex-col  '>
                <div className='border border-neutral-300 w-auto p-5' onClick={openFirst} >
                    <div className='sm:text-[25px] text-[15px] text-start  flex  justify-between cursor-pointer'>
                        {!firstFaq ? <h1 onClick={() => setFirstFaq(true)} >1. What do I need to get started with TikTok Shop?</h1> : <h1 onClick={() => setFirstFaq(false)} >1. What do I need to get started with TikTok Shop?</h1>}
                        <div>
                            {!firstFaq ? <button onClick={() => setFirstFaq(true)} className='font-bold text-[25px] text-[#fe2c55]'>+</button> : <button onClick={() => setFirstFaq(false)} className='text-[25px] cursor-pointer font-bold text-[#fe2c55]'>-</button>}
                        </div>
                    </div>
                    {firstFaq && <p className='text-[14px] font-light pt-3 '>You need a TikTok Account or Phone/Email Go to Register to sign up Enter your personal/business information Choose your business type and submit relevant documents Wait for approval of your application review, 2-3 days Link bank account Upload products and sell online
                    </p>}
                </div>

                <div className='border border-neutral-300 w-auto p-5' onClick={openSecond} >
                    <div className='sm:text-[25px] text-[15px] text-start flex justify-between cursor-pointer'>
                        {!secondFaq ? <h1 onClick={() => setSecondFaq(true)} >2. How can I add my products to TikTok Shop?</h1> : <h1 onClick={() => setSecondFaq(false)} >2. How can I add my products to TikTok Shop?</h1>}
                        <div>
                            {!secondFaq ? <button onClick={() => setSecondFaq(true)} className='text-[25px] font-bold text-[#fe2c55]'>+</button> : <button onClick={() => setSecondFaq(false)} className='cursor-pointer text-[25px] font-bold text-[#fe2c55]'>-</button>}
                        </div>
                    </div>
                    {secondFaq && <p className='text-[14px] font-light pt-3 '>After successful registration in TikTok Shop as a Seller, product information can be uploaded in the seller centre. Products uploaded need to be compliant with TikTok Shop product qualifications and UK regulations as unsupported products will be rejected. Learn More
                    </p>}
                </div>

                <div className='border border-neutral-3000 w-auto p-5' onClick={openThird}>
                    <div className='sm:text-[25px] text-[15px]  text-start flex justify-between cursor-pointer'>
                        {!thirdFaq ? <h1 onClick={() => setThirdFaq(true)} >3. How can I sell my products on TikTok Shop?
                        </h1> : <h1 onClick={() => setThirdFaq(false)} >3. How can I sell my products on TikTok Shop?
                        </h1>}
                        <div>
                            {!thirdFaq ? <button onClick={() => setThirdFaq(true)} className='text-[25px] font-bold text-[#fe2c55]'>+</button> : <button onClick={() => setThirdFaq(false)} className='text-[25px] cursor-pointer font-bold text-[#fe2c55]'>-</button>}
                        </div>
                    </div>
                    {thirdFaq && <p className='text-[14px] font-light pt-3 '>1. Work with creators to promote products. TikTok Shop Affiliate programme helps brands and sellers connect with creators through commission-based collaboration.<br />
                        2. Go LIVE, Create Shoppable Videos, Product showcase<br />
                        3. Get insights on products and sales performance in seller centre: reviews, analytics dashboard
                    </p>}
                </div>

                <div className='border border-neutral-300 w-auto p-5' onClick={openFourth}>
                    <div className='sm:text-[25px] text-[15px] text-start flex justify-between cursor-pointer'>
                        {!fourthFaq ? <h1 onClick={() => setFourthFaq(true)} >4. How can I promote my products to TikTok Shop?</h1> : <h1 onClick={() => setFourthFaq(false)} >4. How can I promote my products to TikTok Shop?</h1>}
                        <div>
                            {!fourthFaq ? <button onClick={() => setFourthFaq(true)} className='text-[25px] font-bold text-[#fe2c55]'>+</button> : <button onClick={() => setFourthFaq(false)} className='text-[25px] cursor-pointer font-bold text-[#fe2c55]'>-</button>}
                        </div>
                    </div>
                    {fourthFaq && <p className='text-[14px] font-light pt-3 '>Discounts, vouchers, free shipping promotion/subsidies, incentive programmes
                        Join campaigns ( get notified via newsletter about upcoming campaigns)

                    </p>}
                </div>

                <div className='border border-neutral-300 w-auto p-5' onClick={openFifth} >
                    <div className='sm:text-[25px] text-[15px] text-start flex justify-between cursor-pointer'>
                        {!fifthFaq ? <h1 onClick={() => setFifthFaq(true)} >5. How can customers buy my products on TikTok Shop?</h1> : <h1 onClick={() => setFifthFaq(false)} >5. How can customers buy my products on TikTok Shop?</h1>}
                        <div>
                            {!fifthFaq ? <button onClick={() => setFifthFaq(true)} className='text-[25px] font-bold text-[#fe2c55]'>+</button> : <button onClick={() => setFifthFaq(false)} className='text-[25px] cursor-pointer font-bold text-[#fe2c55]'>-</button>}
                        </div>
                    </div>
                    {fifthFaq && <p className='text-[14px] font-light pt-3 '>LIVE streams, short videos, showcase tab<br />
                        Click on product and add to basket<br />
                        Manage orders, order tracking, shipping, returns, and payment methods all within seller centre
                    </p>}
                </div>
            </div>
        </div>
    )
}

export default Faqs