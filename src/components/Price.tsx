"use client";
import React from "react";

type Props = {
  price: number;
  id: number;
  options: { title: string; additionalPrice: number }[];
};
const Price = ({ price, id, options }: Props) => {
  return (
    <div className="w-full text-center">
      <h2 className="font-bold text-3xl text-red-400 pb-4">${price} </h2>
      <div className="flex flex-col justify-between items-center gap-8">
        <div className="w-full sm:w-2/3 md:w-1/2 flex justify-between border-2 border-amber-400 p-2  rounded-xl">
            <span className="text-sm font-bold">Quantity</span>
            <div className="flex flex-row gap-4">
                <button>{"-"}</button>
                <span>1</span>
                <button>{"+"}</button>
            </div>
        </div>
        <button className="bg-amber-600 uppercase p-2 rounded-xl">Add to cart</button>
      </div>
    </div>
  );
};

export default Price;
