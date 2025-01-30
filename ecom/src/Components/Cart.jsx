import React from 'react'
import { useState } from 'react';
import { RiArrowDropDownFill, RiMenuFill, RiShoppingCart2Fill } from "@remixicon/react";

const Cart = () => {
    const graycol = "#dfe1e6" // for the nav colors
    const[cartCount, setCartCount] = useState(0);
  return (
    <div id="three" className="flex gap-2 items-center">
                <div id="cart" className="pr-2.5 relative">
                    <div id="cart-counter" className="rounded-full bg-red-500 text-bold text-white absolute px-1.5 top-[-7px]  text-[9px]">{cartCount}</div>
                    <button><RiShoppingCart2Fill size={20} color={graycol} /></button>
                </div>
            </div>
  )
}

export default Cart