import React from 'react'

const Footer = () => {
  return (
    <footer className='h-[30vh] p-10 flex flex-col items-center justify-start gap-16'>
      <h3 className='text-4xl'>¿Quieres estar al tanto de nuestros precios y comida?</h3>
      <form action="" className='flex items-center gap-12'>
        <input className='w-72 h-12 bg-neutral-800 border-4 border-white outline-0' id='email' type="email" />
        <button className='w-28 h-8 bg-white text-black font-bold'>ENVIAR</button>
      </form>
    </footer>
  )
}

export default Footer