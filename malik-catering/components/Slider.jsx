import React from 'react'
import Product from './Product'

const Slider = () => {
  return (
    <div className='w-[200%] h-full grid grid-flow-col auto-cols-auto gap-1'>
      <Product/>
      <Product justify='justify-self-center'/>
      <Product justify='justify-self-end'/>
      <Product/>
      <Product/>
      <Product/>
    </div>
  )
}

export default Slider