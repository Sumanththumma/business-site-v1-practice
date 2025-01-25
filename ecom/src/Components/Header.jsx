
const Header = () => {
    return(
        <div className="bg-black text-white flex justify-between px-5 py-2 pr-10 items-center h-16">
            <div className="text-2xl font-semibold flex gap-10 items-center" id="ham-and-title">
                <div className="hover:bg-white hover:text-black active:bg-white active:text-black px-2 py-0 rounded-md ">=</div>
                <h1>Zudio</h1>
            </div>
            <div className="text-xl font-semibold" id="navlist">
                <ul className="flex gap-3.5 items-center">
                    <a href="#"><li className="px-2 py-1 hover:text-black hover:bg-white rounded-md duration-300">Explore</li></a>
                    <a href="#"><li className="px-2 py-1 hover:text-black hover:bg-white rounded-md duration-300">Visit</li></a>
                    <a href="#"><li className="px-2 py-1 hover:text-black hover:bg-white rounded-md duration-300">Contact</li></a>
                </ul>
            </div>
        </div>
    );
}
export default Header;