import React from 'react'
import Slider from './Slider'
import Link from 'next/link'

export default function Dest({product}) {
  return (
    <section className='w-3/4 h-[50vh] mx-auto bg-neutral-800 flex flex-col justify-center items-center gap-8' >
      <div className='w-full flex flex row justify-between items-center'>
        <h3>PRODUCTOS DESTACADOS</h3>
        <button><Link href={'/product'}>VER MÁS</Link></button>
      </div>
      <div className='h-full'>
        <Slider product={product}/>
      </div>
           
    </section>
  )
}



