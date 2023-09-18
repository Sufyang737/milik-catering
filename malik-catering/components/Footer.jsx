import React from 'react'

const Footer = (props) => {
  return (
    <footer className='h-[30vh] p-10 flex flex-col items-center justify-start gap-16'>
      <h3 className='text-4xl'>¿Quieres estar al tanto de nuestros precios y comida?</h3>
      <form action="" className='flex items-center gap-12'>
        <input className={`w-72 h-12 p-2 border-4 outline-0 ${props.theme ? 'bg-neutral-800 border-white' : 'bg-slate-100 border-black'}`} id='email' type="email" />
        <button className={`w-28 h-8 font-bold ${props.theme ? 'bg-white text-black' : 'bg-neutral-800 text-white'}`}>ENVIAR</button>
      </form>
    </footer>
  )
}

export default Footer;