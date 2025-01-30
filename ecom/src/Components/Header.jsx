import { RiArrowDropDownFill, RiMenuFill, RiShoppingCart2Fill } from "@remixicon/react";
import { useState } from "react";
const Header = () => {
    const graycol = "#dfe1e6" // for the nav colors
    const drop = () =>{

    }
    const[cartcount, setCartcount] = useState(0);
    return(
        <div className="bg-black text-white w-full px-5 py-3 flex items-center justify-between">
            <div id="one">
                <div id="hamburger-menu"><RiMenuFill size={20} color={graycol}/></div> 
            </div>
            <div id="logo">
                <h1 className="text-2xl font-light tracking-wide">Capsul</h1>
            </div>
            <div id="three" className="flex gap-2 items-center">
                <div id="cart" className="pr-2.5" relative>
                    <div id="cart-counter" className="rounded-full bg-red-500 text-bold text-white absolute px-1.5 top-2 ml-1 text-[9px]">{cartcount}</div>
                    <RiShoppingCart2Fill size={20} color={graycol} />
                </div>
            </div>
        </div>
    );
}
export default Header;