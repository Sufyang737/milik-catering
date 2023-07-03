import React from 'react'
import Image from 'next/image'
const Hero = () => {
  return (
    <section className="w-screen h-[85vh] bg-neutral-800 flex items-center justify-center ">
      <div className='w-3/5 p-24 flex flex-col items-center gap-12 text-4xl text-white'>
        <h2 className='w-2/3'>Déjanos la <strong className='text-yellow-500 font-bold'>cocina</strong> a nuestras manos y <strong className='text-yellow-500 font-bold'>disfruta del momento.</strong>
        </h2>
        <button className='transition-all  duration-300 p-4 border-4 border-yellow-500 text-3xl font-bold hover:bg-yellow-500 hover:text-neutral-800 hover:font-bold'><a href="#">MERCADITO</a></button>
      </div>
      
      <Image src='/../public/assets/img/imagenhero.jpg' width={1000} height={1000} className='w-2/5 h-full object-fit' alt="Picture of the author"/>
    </section>
  )
}

export default Hero