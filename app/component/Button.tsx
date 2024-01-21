import React from 'react'

interface IButton {
    title: string
    isBigger?: boolean
    isForyou?: boolean
    onClick?: () => void
}

const Button = ({ title, isBigger, isForyou, onClick }: IButton) => {
    return (
        <div>
            <button onClick={onClick} className={`px-4 py-2 ${isBigger && 'px-6 sm:py-4 py-2 text-[18px] sm:w-auto w-full'} rounded bg-[#fe2c55] ${!isForyou && 'text-white'} 
             ${isForyou && 'bg-neutral-200 text-black sm:text-[20px] text-[16px] hover:bg-[#fe2c55] hover:text-white'} `}>
                {title}</button>
        </div>
    )
}

export default Button