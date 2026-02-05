"use client";

import Image from "next/image";

export default function User() {
  return (
    <div className="h-screen w-full mb-10">
      <div className="relative mt-8 pl-12 pb-10 ">
        <div className="flex flex-col justify-center items-center p-4">
        <Image 
        src={"/tv.svg"}
        width="0"
        height="0"
        alt="tv image"
        className="w-full h-56 cursor-pointer"
        />
        <p className="font-bold text-2xl p-2">Login to ABCDSTAR</p>
        <p className="font-light tracking-wider text-gray-400">Start watching, personalize your watchlist</p>
        <button className="text-2xl font-bold bg-gradient-to-r from-green-400 via-green-400 to-lime-500 bg-clip-text text-transparent p-5 hover:scale-110">Log In</button>
        </div>
      </div>
    </div>
  );
}
