import Image from "next/image";
import React from "react";
import CountDown from "./CountDown";

function Offer() {
  return (
    <div className="#offer bg-black h-screen flex flex-col md:flex-row justify-between  md:bg-[url('/offerBg.png')] md:h-[70vh]">
      <div className="flex-1 text-white flex flex-col justify-center items-center text-center gap-8 md:text-xl p-2">
        <h1 className="text-3xl md:text-5xl lg:text-7xl font-bold">
          Limited-Time Offer: Classic Burger Deal!
        </h1>
        <p className=" md:text-2xl lg:text-4xl">
          Juicy beef patty with fresh veggies and melted cheese in a toasted
          bun.
        </p>
        <CountDown/>
        <button className="hidden md:block bg-amber-600 text-white font-bold text-sm p-2 rounded-md">
          Order Now
        </button>
      </div>
      <div className="w-full flex-1 relative mb-10 md:mb-0 items-center justify-center">
        <Image src="/offerProduct.png" alt="" fill className="object-contain" />
      </div>
      <div className="flex flex-col justify-center items-center gap-4 p-4">
        <button className="md:hidden bg-amber-600 text-white font-bold text-sm p-3 rounded-md">
          Order Now
        </button>
      </div>
    </div>
  );
}

export default Offer;
