import Image from "next/image";
import Link from "next/link";
import React from "react";

type Products = {
  id: number;
  title: string;
  desc: string;
  img: string;
  price: number;
  options: { title: string; additionalPrice: number }[];
}[];

// type Product = {
//   id: number;
//   title: string;
//   desc: string;
//   img: string;
//   price: number;
//   options: { title: string; additionalPrice: number }[];
// };

const pizzas: Products = [
  {
    id: 1,
    title: "Classic Burger",
    desc: "Juicy beef patty with fresh veggies, melted cheese, and a toasted bun.",
    img: "/temporary/p1.png",
    price: 8.99,
    options: [
      { title: "Extra Cheese", additionalPrice: 1.5 },
      { title: "Bacon", additionalPrice: 2.0 },
    ],
  },
  {
    id: 2,
    title: "Margherita Pizza",
    desc: "Thin crust pizza with fresh tomato sauce, basil, and mozzarella.",
    img: "/temporary/p2.png",
    price: 12.99,
    options: [
      { title: "Extra Cheese", additionalPrice: 2.0 },
      { title: "Olives", additionalPrice: 1.0 },
    ],
  },
  {
    id: 3,
    title: "Spaghetti Carbonara",
    desc: "Pasta tossed in a creamy sauce with crispy bacon and parmesan cheese.",
    img: "/temporary/p3.png",
    price: 10.99,
    options: [
      { title: "Extra Parmesan", additionalPrice: 1.5 },
      { title: "Chicken", additionalPrice: 3.0 },
    ],
  },
  {
    id: 4,
    title: "BBQ Chicken Pizza",
    desc: "Grilled chicken, red onions, and BBQ sauce on a crispy crust.",
    img: "/temporary/p4.png",
    price: 15.99,
    options: [
      { title: "Extra Chicken", additionalPrice: 2.5 },
      { title: "Ranch Drizzle", additionalPrice: 1.0 },
    ],
  },
  {
    id: 5,
    title: "Veggie Supreme Pizza",
    desc: "A healthy mix of bell peppers, olives, mushrooms, and onions.",
    img: "/temporary/p5.png",
    price: 13.99,
    options: [
      { title: "Extra Veggies", additionalPrice: 1.5 },
      { title: "Feta Cheese", additionalPrice: 2.0 },
    ],
  },
  {
    id: 6,
    title: "Meat Lovers Pizza",
    desc: "Loaded with sausage, bacon, ham, and pepperoni for true meat lovers.",
    img: "/temporary/p6.png",
    price: 16.99,
    options: [
      { title: "Extra Meat", additionalPrice: 3.0 },
      { title: "Stuffed Crust", additionalPrice: 3.5 },
    ],
  },
];

function CategoryPage() {
  return (
    <div className="flex flex-wrap">
      {pizzas.map((pizza) => (
        <Link
          href={`/products/${pizza.id}`}
          key={pizza.id}
          className="w-full h-[60vh] border-b-2 border-r-2 border-amber-500 
            sm:w-1/2 md:w-1/3 p-2 flex flex-col justify-between group hover:bg-amber-500 transition-all duration-300"
        >
          {pizza.img && (
            <div className="relative h-[90%] md:object-contain hover:rotate-[360deg] transition-all duration-1000">
              <Image
                src={pizza.img}
                alt={pizza.title}
                fill
                className="object-contain"
              />
            </div>
          )}
          <div className="flex justify-between items-center px-4 pt-2 sm:flex-col lg:flex-col xl:flex-row sm:text-center gap-4">
            <h1 className="text-xl font-bold md:text-md xl:text-2xl">
              {pizza.title}
            </h1>
            <h1 className="font-bold text-md text-red-500">${pizza.price}</h1>
            <button className="hidden group-hover:block md:block lg:w-1/2 xl:w-1/3 uppercase bg-amber-600 text-sm font-bold p-2 rounded-xl cursor-pointer">
              Add to cart
            </button>
          </div>
        </Link>
      ))}
    </div>
  );
}

export default CategoryPage;
