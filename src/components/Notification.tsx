import Link from "next/link";
import React from "react";

function Notification() {
  return (
    <div className="h-12 bg-amber-600 text-white text-center flex items-center justify-center md:text-base text-sm cursor-pointer text-wrap">
      <Link href='#offer'>Free delivery for all orders over 50$. Order your food now!</Link>
    </div>
  );
}

export default Notification;
