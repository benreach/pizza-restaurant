"use client";
import React, { useState } from "react";

type Props = {
  price: number;
  id: number;
};

const Price = ({ price, id }: Props) => {
  const [quantity, setQuantity] = useState(1);

  const [selectedSize, setSelectedSize] = useState<string | null>(null);

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  const selectSize = (size: string) => {
    setSelectedSize(size);
  };

  return (
    <div className="w-full text-center">
      <h2 className="font-bold text-3xl text-red-400 pb-4">${price} </h2>
      <div className="flex flex-col justify-between items-center gap-8">
        {/* Size Selection Buttons */}
        <div className="flex gap-4 pb-4">
          <button
            onClick={() => selectSize("small")}
            className={`px-4 py-2 rounded-xl text-lg ${
              selectedSize === "small"
                ? "bg-amber-600 text-white"
                : "bg-gray-200"
            }`}
          >
            Small
          </button>
          <button
            onClick={() => selectSize("medium")}
            className={`px-4 py-2 rounded-xl text-lg ${
              selectedSize === "medium"
                ? "bg-amber-600 text-white"
                : "bg-gray-200"
            }`}
          >
            Medium
          </button>
        </div>

        {/* Quantity Selection */}
        <div className="w-full sm:w-2/3 md:w-1/2 flex justify-between border-2 border-amber-400 p-2 rounded-xl">
          <span className="text-sm font-bold">Quantity</span>
          <div className="flex flex-row gap-4">
            <button onClick={decreaseQuantity} className="text-xl">
              {"-"}
            </button>
            <span>{quantity}</span>
            <button onClick={increaseQuantity} className="text-xl">
              {"+"}
            </button>
          </div>
        </div>

        {/* Add to Cart Button */}
        <button className="bg-amber-600 uppercase p-2 rounded-xl">
          Add to cart
        </button>
      </div>
    </div>
  );
};

export default Price;
