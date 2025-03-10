"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";

const datas = [
  {
    id: 1,
    title: "always fresh & always crispy & always hot",
    image: "/slide1.png",
  },
  {
    id: 2,
    title: "We delivery your order wherever you are in NY",
    image: "/slide2.png",
  },
  {
    id: 3,
    title: "The best pizza to share with your family",
    image: "/slide3.jpg",
  },
];
function Slider() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => setCurrentSlide(prev => (prev === datas.length -1 ? 0 : prev +1)), 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col  h-[calc(100vh-6rem)] md:h-[calc(100vh-9rem)] lg:flex-row lg:gap-2">
      <div className="flex-1 flex items-center justify-center flex-col gap-8  lg:h-full">
        <h1 className="text-4xl  font-bold capitalize md:text-6xl lg:text-6xl text-center">
          {datas[currentSlide].title}
        </h1>
        <button className="bg-amber-500 text-white font-bold p-2 rounded-xl text-sm md:text-lg lg:text-2xl">
          Order Now
        </button>
      </div>
      <div className="w-full flex-1 relative mb-10">
        <Image
          src={datas[currentSlide].image}
          alt="slider"
          fill
          className="object-cover md:w-full md:h-full"
        />
      </div>
    </div>
  );
}

export default Slider;
