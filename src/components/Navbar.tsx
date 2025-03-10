import React from "react";
import Menu from "./Menu";
import Link from "next/link";
import CartIcon from "./CartIcon";
import Image from "next/image";

function Navbar() {
  const user = false;
  return (
    <div className=" h-12 text-red-600 p-4 md:p-8 flex items-center justify-between border-b-2 border-amber-500 uppercase">
      <div className="hidden md:flex gap-4">
        <Link href="/">Homepage</Link>
        <Link href="/menu">Menu</Link>
        <Link href="/contact">Contact</Link>
        <Link href="/cart">Cart</Link>
      </div>
      <div className="text-xl md:font-bold md:text-center">
        <Link href="/">Pizza Company</Link>
      </div>
      <div className="md:hidden">
        <Menu />
      </div>
      <div className="hidden md:flex gap-4 justify-end cursor-pointer">
        <div className="hidden lg:flex items-center gap-2 bg-amber-200 px-2 rounded-md cursor-pointer">
          <Image src="/phone.png" alt="phone" width={20} height={20} />
          <span>(+36)20 808 9362</span>
        </div>
        {!user ? <Link href="/login">Login</Link> : <Link href="/orders">orders</Link>}
        <CartIcon />
      </div>
    </div>
  );
}

export default Navbar;
