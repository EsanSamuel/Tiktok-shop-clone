import React from 'react'

interface IButton {
    title: string
    isBigger?: boolean
    isForyou?: boolean
    onClick?: () => void
    isReview?: boolean
}

const Button = ({ title, isBigger, isForyou, onClick, isReview }: IButton) => {
    return (
        <div>
            <button onClick={onClick} className={`px-4 py-2 ${isBigger && 'px-6 sm:py-4 py-2 text-[18px] sm:w-auto w-full'} rounded bg-[#fe2c55] ${!isForyou && 'text-white'} 
             ${isForyou && 'bg-neutral-200 text-black sm:text-[20px] rounded-[10px] text-[16px] hover:bg-[#fe2c55] hover:text-white'} 
             ${isReview && 'px-10 border border-[#fe2c55] bg-white text-[#fe2c55]'}`}>
                {title}</button>
        </div>
    )
}

export default Button