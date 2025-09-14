"use client";
import { useState } from "react";

export interface MovieCardProps {
  title: string;
  posterUrl: string;
  rating: number;
}

export default function MovieCard({ title, posterUrl, rating }: MovieCardProps) {
  const [isWatchlist, setIsWatchlist] = useState(false);

  return <>
    <div className="bg-gray-900 rounded-2xl overflow-hidden w-56" style={{border: "2px solid red"}}>
      <img src={posterUrl} alt={title} className="w-full h-80" />

      <div className="p-4">
        {/* Rating */}
        <div className="flex items-center gap-2 mb-2">
          <span className="text-yellow-400">★</span>
          <span className="text-sm">{rating}</span>
        </div>
        
        {/* Tittle */}
        <h2 className="text-md">{title}</h2>

        {/* Buttons */}
        <div className="mt-4 space-y-2">
          <button
            onClick={() => setIsWatchlist(!isWatchlist)}
            className="w-full flex items-center justify-center rounded-4xl py-1 text-blue-400 bg-gray-800 hover:bg-gray-700 transition"
          >
            {isWatchlist ? "✔ Watchlist" : "＋ Watchlist"}
          </button>

          <button className="w-full flex items-center justify-center rounded-4xl py-1 hover:bg-gray-700 transition">
            ▶ Trailer
          </button>
        </div>
      </div>
    </div>
  </>
}
