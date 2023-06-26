import React from 'react'

const Especial = () => {
  return (
    <section className='p-12 w-screen h-[60vh] bg-neutral-800 flex flex-col items-center justify-center gap-5'>
      <h3 className='text-3xl text-yellow-500'>ESPECIALIDADES</h3>
      <div className='w-3/4 h-96 grid grid-cols-4 gap-3'>
        <div className='w-auto h-full bg-[url("../public/assets/img/dulce.png")] bg-center flex items-center justify-center border-2 border-white'><h4 className='text-4xl'>DULCE</h4></div>
        <div className='w-auto h-full bg-[url("../public/assets/img/mercadito.png")] bg-center flex items-center justify-center border-2 border-white'><h4 className='text-4xl'>MERCADITO</h4></div>
        <div className='w-auto h-full bg-[url("../public/assets/img/boxes.png")] bg-center flex items-center justify-center border-2 border-white'><h4 className='text-4xl'>BOXES</h4></div>
        <div className='w-auto h-full bg-[url("../public/assets/img/armatubox.png")] bg-center flex items-center justify-center border-2 border-white'><h4 className='text-4xl'>ARMÁ TU BOX</h4></div>
      </div>
      
    </section>
  )
}

export default Especial;