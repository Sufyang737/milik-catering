import React from 'react'
import Product from './Product'

const Dest = () => {
  return (
    <section className='w-3/4 h-[50vh] m-auto bg-neutral-800 flex flex-col justify-between items-center'>
      <div className='w-full flex flex row justify-between items-center'>
        <h3>PRODUCTOS DESTACADOS</h3>
        <button><a href="#">VER MÁS</a></button>
      </div>
      <div className='w-full flex justify-between items-center'>
        <Product/>
        <Product/>
        <Product/>
      </div>
    </section>
  )
}

export default Dest