import React from 'react'
import Product from './Product'

const Dest = () => {
  return (
    <section className='w-screen h-[50vh] bg-neutral-800 flex flex-col justify-between items-center'>
      <div className='w-3/4 flex flex row justify-between items-center'>
        <h3>PRODUCTOS DESTACADOS</h3>
        <button><a href="#">VER MÁS</a></button>
      </div>
      <div className='flex flex-row justify-center gap-5'>
        <Product/>
        <Product/>
        <Product/>
      </div>
    </section>
  )
}

export default Dest