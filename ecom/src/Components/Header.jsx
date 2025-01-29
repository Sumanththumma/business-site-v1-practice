import { RiArrowDropDownFill, RiMenuFill, RiShoppingCart2Fill } from "@remixicon/react";
const Header = () => {
    const graycol = "#dfe1e6" // for the nav colors
    const drop = () =>{

    }
    return(
        <div className="bg-black text-white w-full px-5 py-0 pr-0 flex items-center justify-between">
            <div id="one">
                <div id="hamburger-menu"><RiMenuFill size={20} color={graycol}/></div> 
            </div>
            <div id="logo">
                <h1 className="text-2xl font-light tracking-wide">Capsul</h1>
            </div>
            <div id="three" className="flex gap-2 items-center">
                <div id="dropdown" onClick={()=>{
                    drop()
                }}><RiArrowDropDownFill size={49} color={graycol} /></div>
                <div id="cart" className="pr-2.5">
                    <RiShoppingCart2Fill size={20} />
                </div>
            </div>
        </div>
    );
}
export default Header;