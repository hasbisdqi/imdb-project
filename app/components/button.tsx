"use client"
import React, { ReactNode, useState } from 'react'

export interface ButtonProps {
    children: ReactNode,
    variant?: string
}


export default function Button({ children, variant = 'default' }: ButtonProps) {
    const [number, setNumber] = useState<number>(1);
    const handleButton = () => {
        setNumber(number+1)
    }
    var buttonClass: string;

    var numbers = [
        1, 2, 3, 4
    ]
    switch (variant) {
        case 'danger':
            buttonClass = 'bg-red-500 text-foreground hover:bg-red-600'
            break;
        default:
            buttonClass = 'bg-white text-black hover:bg-white/90'
            break;
    }
    return (
        <>
            <button  className={'border px-4 py-2 rounded-lg min-w-24 ' + buttonClass}>
                {children}
            </button>

            {numbers.map((n) => (
                <div className="grid" key={n}>{n}</div>
            ))}
        </>
    )
}


