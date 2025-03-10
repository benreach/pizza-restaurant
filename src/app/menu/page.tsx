import Link from "next/link";
import React from "react";

const menuItems = [
  {
    id: 1,
    slug: "classic-burger",
    title: "Classic Burger",
    desc: "Juicy beef patty with fresh veggies, and melted cheese.",
    img: "/temporary/m1.png",
    color: "#E3B749", // Amber
  },
  {
    id: 2,
    slug: "margherita-pizza",
    title: "Margherita Pizza",
    desc: "Thin crust pizza with fresh tomato sauce, basil, and mozzarella.",
    img: "/temporary/m2.png",
    color: "#332E22", // Tomato Red
  },
  {
    id: 3,
    slug: "spaghetti-carbonara",
    title: "Spaghetti Carbonara",
    desc: "Pasta tossed in a creamy sauce with crispy bacon and parmesan cheese.",
    img: "/temporary/m3.png",
    color: "#00E59B", // Sandy Brown
  },
];

function MenuPage() {
  return (
    <div
      className="p-4 lg:px-20 xl:px-40 h-[calc(100vh-6rem)] text-center
    md:h-[calc[100vh-9rem)] flex flex-col md:flex-row items-center justify-center gap-4"
    >
      {menuItems.map((category) => (
        <Link
          href={`/menu/${category.slug}`}
          key={category.id}
          style={{ backgroundImage: `url(${category.img})` }}
          className=" w-full h-1/3 bg-cover p-8 md:h-1/2"
        >
          <div className={`w-1/2 flex flex-col gap-2 md:gap-8 justify-center items-center text-center`} style={{color: `${category.color}`}}>
            <h1 className="text-md uppercase md:text-2xl font-bold">{category.title}</h1>
            <p className="text-sm md:text-md">{category.desc}</p>
            <button className="hidden md:block text-white rounded-xl p-2 font-bold text-sm " style={{background:`${category.color}`}}>Explore</button>
          </div>
        </Link>
      ))}
    </div>
  );
}

export default MenuPage;
