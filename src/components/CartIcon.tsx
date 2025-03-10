import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function CartIcon() {
    return (
        <div className='flex items-center justify-center gap-2' >
            <div className='relative w-8 h-8 md:w-5 md:h-5'>
                <Image src="/cart.png" alt='' fill />
            </div>
            <Link href="/cart">
                <span>Cart (02)</span>            
            </Link>

        </div>
    )
}

export default CartIcon