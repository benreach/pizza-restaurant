"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import CartIcon from "./CartIcon";


const links = [
    { id: 1, title: "Homepage", url: "/" },
    { id: 2, title: "Menu", url: "/menu" },
    { id: 3, title: "Working Hours", url: "/" },
    { id: 4, title: "Contact", url: "/contact" },
]

function Menu() {
    const [open, setOpen] = useState(false);
    const user = false;
    return (
        <div>
            {!open ? (
                <Image className="cursor-pointer" src="/open.png" alt="open" width={20} height={20} onClick={() => setOpen(prev => !prev)} />
            ) : (
                <Image className="cursor-pointer" src="/close.png" alt="open" width={20} height={20} onClick={() => setOpen(prev => !prev)} />

            )}
            {open &&
                <div className="bg-red-900 text-white absolute left-0 top-24 w-full h-[calc(100vh-6rem)] 
                        flex flex-col items-center justify-center gap-8 text-xl z-10">

                    {
                        links.map(link => (
                            <Link href={link.url} key={link.id} onClick={() => setOpen(false)}>{link.title}</Link>
                        ))
                    }
                    {
                        !user ? (
                            <Link href="/login" onClick={() => setOpen(false)}>Login</Link>
                        ) : (
                            <Link href="/orders" onClick={() => setOpen(false)}>Orders</Link>
                        )
                    }
                    <Link href="/cart" onClick={() => setOpen(false)}>
                        <CartIcon />
                    </Link>

                </div>
            }
        </div>
    );
}

export default Menu;
