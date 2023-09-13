import React from 'react'
import CheckoutCard from './CheckoutCard'

const Checkout = (props) => {
  return (
    <section className='min-h-[85vh] w-full p-24 flex justify-center gap-12 items-start'>
      <div className={`w-3/4 h-fit py-16 ${props.theme ? 'bg-neutral-700' : 'bg-slate-300'}`}>
        <CheckoutCard/>
      </div>
      <div className={`w-1/4 h-it p-8 pb-16 flex flex-col items-center justify-center ${props.theme ? 'bg-neutral-700' : 'bg-slate-300'}`}>
        <h3 className='mb-10 font-bold text-2xl'>Resumen de la compra</h3>
        <ul className='w-full'>
          <li className='border-b-2 flex justify-between text-xl py-2'>Subtotal <span>$0</span></li>
          <li className='flex justify-between font-bold text-3xl py-6'>Total <span>$0</span></li>
        </ul>
        <button className={`p-4 text-sm font-bold ${props.theme ? 'bg-slate-200 text-black' : 'bg-neutral-800 text-white'}`}>FINALIZAR COMPRA</button>
      </div>
      
    </section>
  )
}

export default Checkout