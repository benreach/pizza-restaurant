import Link from "next/link";
import React from "react";

function Button() {
  return (
    <>
      <Link href="/menu/">
        <button
          className="bg-amber-600 text-sm font-bold text-white p-2 
          rounded-lg cursor-pointer hover:scale-120 transition-all ease-in-out duration-200"
        >
          Order Now
        </button>
      </Link>
    </>
  );
}

export default Button;
