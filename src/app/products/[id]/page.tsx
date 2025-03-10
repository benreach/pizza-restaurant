import Price from "@/components/Price";
import Image from "next/image";
import React from "react";

type Props = {
  price: number;
  id: number;
  title: string;
  img: string;
  desc: string;
  options: { title: string, additionalPrice: number }[];
};

const singleProduct: Props = {
  id: 1,
  title: "Classic Burger",
  desc: "Juicy beef patty with fresh veggies, and melted cheese.",
  img: "/temporary/p1.png",
  price: 25,
  options: {
    title: "small",
    additionalPrice: 2
  },
};
function SingleProductPage({}) {
  return (
    <div className="p-4 lg:px-20 xl:px-40 h-screen flex flex-col  justify-center items-center lg:flex-col gap-8">
      <div className="relative w-full h-1/3 lg:h-[80%]">
        {singleProduct.img && (
          <Image
            src={singleProduct.img}
            alt=""
            fill
            className="object-contain hover:rotate-[10deg]"
            key={singleProduct.id}
          />
        )}
      </div>
      <div className="w-full text-center flex flex-col gap-6">
        <h1 className="text-xl font-bold md:text-2xl lg:text-4xl">
          {singleProduct.title}
        </h1>
        <p className="text-md md:text-xl lg:text-2xl">{singleProduct.desc}</p>
      </div>
      <div className="flex flex-row gap-2">
        <button className="border-1 p-2  hover:border-none rounded-lg hover:bg-amber-500">
          Small
        </button>
        <button className="border-1 p-2  hover:border-none rounded-lg hover:bg-amber-500">
          Medium
        </button>
        <button className="border-1 p-2  hover:border-none rounded-lg hover:bg-amber-500">
          Large
        </button>
      </div>
      <Price
          price={singleProduct.price}
          id={singleProduct.id}
          options={singleProduct.options}
        />
    </div>
  );
}

export default SingleProductPage;
