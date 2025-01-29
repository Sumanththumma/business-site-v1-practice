import React from 'react'
import { RiAddCircleFill } from '@remixicon/react'

const ProductCard = (proimage,title,desc,price) => {
    const addtoCartHandler = () =>{

    }
  return (
    <div className='w-35 px-2 py-2 rounded-md shadow-xl'>
        <img className='object-cover' src={proimage} alt="AJ OG Bred" />
        <div className='flex flex-col gap-2'>
            <h1 className='font-medium text-sm'>{title}</h1>
            <p className='text-[12px] font-extralight'>{desc}</p>
            <div className='flex justify-between'>
                <h1>{price}</h1>
                <button onClick={addtoCartHandler}><RiAddCircleFill/></button>
            </div>
        </div>
    </div>
  )
}

export default ProductCard