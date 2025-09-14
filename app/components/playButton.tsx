"use client";
import { useState } from "react";

export default function PlayButton() {
  const [isHovered, setIsHovered] = useState<boolean>(false);

  return (
    <button
      onMouseEnter={() => {
        setIsHovered(true);
      }}
      onMouseLeave={() => {
        setIsHovered(false);
      }}
      className="rounded-2xl"
      style={{ border: "2px solid black" }}
    >
      <svg
        width="32"
        height="32"
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle
          cx="16"
          cy="16"
          r="15.75"
          className={
            isHovered ? "stroke-yellow stroke-2" : "stroke-white stroke-2"
          }
        />
        <path
          d="M13.25 20.7627L13.25 11.2373L21.5 16L13.25 20.7627Z"
          className={isHovered ? "fill-yellow-400" : "fill-white"}
        />
      </svg>
      <div
        className={`border-2 rounded-full p-2 h-[32px] w-[32px] flex flex-col items-center justify-center leading-none ${
          isHovered
            ? "border-yellow-400 text-yellow-400"
            : "border-white text-white"
        }`}
      >
        &nbsp;▶
      </div>
    </button>
  );
}
