import React from 'react'
import CheckoutCard from './CheckoutCard'

const Checkout = () => {
  return (
    <section className='min-h-[85vh] w-full p-24 flex justify-center gap-12 items-start'>
      <div className='w-3/4 h-fit py-16 bg-neutral-700'>
        <CheckoutCard/>
      </div>
      <div className='w-1/4 h-fit p-8 pb-16 flex flex-col items-center justify-center bg-neutral-700'>
        <h3 className='mb-10 font-bold text-2xl'>Resumen de la compra</h3>
        <ul className='w-full'>
          <li className='border-b-2 flex justify-between text-xl py-2'>Subtotal <span>$0</span></li>
          <li className='flex justify-between font-bold text-3xl py-6'>Total <span>$0</span></li>
        </ul>
        <button className='p-4 bg-white text-black text-sm font-bold'>FINALIZAR COMPRA</button>
      </div>
      
    </section>
  )
}

export default Checkout