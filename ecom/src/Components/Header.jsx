import { RiArrowDropDownFill, RiMenuFill, RiShoppingCart2Fill } from "@remixicon/react";
import { useState } from "react";
import Cart from "./Cart";
const Header = () => {
    const graycol = "#dfe1e6" // for the nav colors
    const menuToggle = () => {
        
    }

    return(
        <div className="bg-black text-white w-full px-5 py-3 flex items-center justify-between">
            <div id="one">
                <div id="hamburger-menu"><button onClick={menuToggle}><RiMenuFill size={20} color={graycol}/></button></div> 
            </div>
            <div id="logo">
                <h1 className="text-2xl font-light tracking-wide">Capsul</h1>
            </div>
            <Cart></Cart>
        </div>
    );
}
export default Header;