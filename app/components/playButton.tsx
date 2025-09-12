"use client"
import React, { ReactNode, useState } from 'react';
let showCircle: string;
let showTriangle: string;
export default function PlayButton() {
    const [isHovered, setIsHovered] = useState<boolean>(false);
    const [showCircle, showTriangle] = isHovered
        ? ["stroke-yellow-400 stroke-2", "fill-yellow-400"]
        : ["stroke-white stroke-2", "fill-white"];
    return (
        <button onMouseEnter={() => { setIsHovered(true); }} onMouseLeave={() => { setIsHovered(false); }} className="rounded-2xl" style={{border: '2px solid black'}}>
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="16" cy="16" r="15.75" className={showCircle} />
                <path d="M13.25 20.7627L13.25 11.2373L21.5 16L13.25 20.7627Z" className={showTriangle} />
            </svg>
        </button>
    );
}