"use client";

import { set } from "mongoose";
import Image from "next/image";
import React, { useEffect, useState } from "react";

const featuredFoods = [
  {
    id: 1,
    name: "Burger",
    desc: "A juicy beef patty with fresh lettuce, tomato, and cheese in a toasted bun.",
    image: "/temporary/p11.png",
    price: 12.5,
  },
  {
    id: 2,
    name: "Pizza",
    desc: "A crispy thin-crust pizza topped with tomato sauce, mozzarella, and pepperoni.",
    image: "/temporary/p10.png",
    price: 12.5,
  },
  {
    id: 3,
    name: "Pasta",
    desc: "A delicious bowl of spaghetti with rich marinara sauce and parmesan cheese.",
    image: "/temporary/p12.png",
    price: 12.5,
  },
  {
    id: 4,
    name: "Sushi",
    desc: "Fresh sushi rolls with salmon, avocado, and rice wrapped in seaweed.",
    image: "/temporary/p1.png",
    price: 12.5,
  },
  {
    id: 5,
    name: "Tacos",
    desc: "Soft corn tortillas filled with seasoned beef, lettuce, cheese, and salsa.",
    image: "/temporary/p2.png",
    price: 12.5,
  },
  {
    id: 6,
    name: "Steak",
    desc: "A perfectly grilled ribeye steak served with garlic butter and roasted vegetables.",
    image: "/temporary/p3.png",
    price: 12.5,
  },
  {
    id: 7,
    name: "Salad",
    desc: "A fresh mix of lettuce, cherry tomatoes, cucumbers, and feta cheese with vinaigrette.",
    image: "/temporary/p4.png",
    price: 12.5,
  },
  {
    id: 8,
    name: "Ice Cream",
    desc: "Creamy vanilla ice cream topped with chocolate syrup and sprinkles.",
    image: "/temporary/p5.png",
    price: 12.5,
  },
];

function Featured() {
  return (
    <div className="w-screen overflow-hidden md:overflow-x-scroll flex flex-row">
      <div className="w-max flex">
        {featuredFoods.map((item) => (
          <div
            key={item.id}
            className="w-screen h-[60vh] flex flex-col items-center justify-around text-center p-2 hover:bg-amber-400 transition-all duration-300 md:w-[50vw] lg:w-[33vw] lg:h-[70vh]"
          >
            <div className="relative flex-1 md:flex-3 w-full hover:rotate-[60deg] transition-all duration-500 ">
              <Image src={item.image} alt="" fill className="object-contain" />
            </div>
            <div className="flex flex-col gap-4 md:mt-4">
              <h1 className="text-md font-bold uppercase">{item.name}</h1>
              <p className="">{item.desc}</p>
              <h1 className="text-md font-bold">${item.price}</h1>
            </div>
            <button className="bg-amber-600 p-2 rounded-md text-white mt-2">
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Featured;
