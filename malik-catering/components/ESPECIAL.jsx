import React from 'react'

const ESPECIAL = () => {
  return (
    <section className='p-12 w-screen h-[60vh] bg-neutral-800 flex flex-col items-center justify-between'>
      <h3 className='text-3xl text-yellow-500'>ESPECIALIDADES</h3>
      <div className='w-screen flex justify-center gap-5'>
        <div className='w-80 h-96 bg-red-500 flex items-center justify-center'><h4 className=''>DULCE</h4></div>
        <div className='w-80 h-96 bg-red-500 flex items-center justify-center'>MERCADITO</div>
        <div className='w-80 h-96 bg-red-500 flex items-center justify-center'>BOXES</div>
        <div className='w-80 h-96 bg-red-500 flex items-center justify-center'>ARMÁ TU BOX</div>
      </div>
      
    </section>
  )
}

export default ESPECIAL