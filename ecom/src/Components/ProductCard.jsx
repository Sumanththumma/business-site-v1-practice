import React from 'react'
import { RiAddCircleFill } from '@remixicon/react'



const ProductCard = (props) => {
    const addtoCartHandler = () =>{
      setCartCount((prevCartCount)=> prevCartCount+1)
    }
  return (
    <div className='w-40 md:w-64 md:h-96 h-72 rounded-md px-1 py-1 shadow-xl relative overflow-hidden pt-1 font-"Montserrat"'>
        <img className='object-cover h-44 md:h-64 w-full rounded-md' src={props.proimage} alt="AJ OG Bred" />
        <div className='flex flex-col gap-2 px-1'>
            <h1 className='font-medium text-md'>{props.title}</h1>
            <p className='text-[12px] font-extralight'>{props.desc}</p>
            <div className='absolute bottom-2 w-[90%] flex justify-between items-center'>
                <h1>₹ {props.price}.00</h1>
                <button className=' hover:cursor-pointer' onClick={addtoCartHandler}><RiAddCircleFill size={32}/></button>
            </div>
        </div>
    </div>
  )
}

export default ProductCard