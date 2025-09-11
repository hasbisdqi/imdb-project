"use client"
import React, { ReactNode, useState } from 'react'

export default function PlayButton() {
    return (
        <button >
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="16" cy="16" r="15.75" className="bg-none stroke-1 stroke-black"/>
                <path d="M13.25 20.7627L13.25 11.2373L21.5 16L13.25 20.7627Z" className="fill-black"/>
            </svg>
        </button>
    );
}