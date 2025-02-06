import ProductCard from "./ProductCard";

const Hero = () => {
    return (
        <>
            <div className="w-full h-screen flex flex-wrap items-center justify-center gap-2 overflow-y-auto">
                <ProductCard 
                proimage="https://crepdogcrew.com/cdn/shop/files/1_f1157f4c-7cee-4afb-b73d-9864bf16cf4b.png?v=1737709498&width=1000" 
                title="Air Jordan 1" 
                desc="Nike" 
                price="11495"/>
                <ProductCard 
                proimage="https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/0874f105-ef49-4ce4-91f5-e1494577688d/JORDAN+STADIUM+90.png" 
                title="Jordan Stadium 90" 
                desc="Nike" 
                price="12795"/>
                <ProductCard 
                proimage="https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/b1bcbca4-e853-4df7-b329-5be3c61ee057/NIKE+DUNK+LOW+RETRO.png" 
                title="Nike Dunk Low Retro" 
                desc="Nike" 
                price="8295"/>
                <ProductCard 
                proimage="https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/16e9d847-74b2-40d1-b7d9-18691ef4f832/NIKE+INITIATOR.png" 
                title="Nike Initiator" 
                desc="Nike" 
                price="8495"/>
                <ProductCard 
                proimage="https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/f3c36ef6-f3c7-415a-acd5-85aa20442404/AIR+MAX+DN+SE.png" 
                title="Nike Air Max Dn SE" 
                desc="Nike" 
                price="15995"/>
                <ProductCard 
                proimage="https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/a5a36c02-49ba-4a62-8e10-736a4344b93b/NIKE+AIR+MORE+UPTEMPO+SLIDE.png" 
                title="Nike Air More Uptempo" 
                desc="Nike" 
                price="8495"/>
                <ProductCard 
                proimage="https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/c04b0d59-7f2b-4fbd-a0b2-a6f7df116cd8/NIKE+AIR+MAX+1+ESS+PRM.png" 
                title="Nike Air Max 1 Essential Premium" 
                desc="Nike" 
                price="13995"/>
                <ProductCard 
                proimage="https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/37684c00-5ac6-4010-b7ee-f3e8292ce022/PHANTOM+LUNA+II+ACADEMY+TF.png" 
                title="Nike Phantom Luna 2 Academy" 
                desc="Nike" 
                price="8995"/>
            </div>
            <div>
                <h1 className="bg-transparent">More from Nike coming soon.</h1>
            </div>
        </>
    );
}
export default Hero;