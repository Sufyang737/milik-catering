import React from 'react'
import Cartprod from './Cartprod'

const Cart = (props) => {
  const visibleMenu = `opacity-100 visible absolute top-36 right-0 h-[85vh] w-1/4 flex flex-col justify-center items-center border-2 transition-all ease-in-out duration-150 dark:bg-neutral-800 dark:border-slate-100 bg-slate-100 border-neutral-800`
  const hiddenMenu = 'opacity-0 invisible absolute top-36 right-0 h-[85vh] w-1/4 border-2 transition-all ease-in-out duration-150'
  return (
    <div className={props.display ? visibleMenu :  hiddenMenu}>
      <div className='w-full h-4/6 overflow-y-auto'> 
        <Cartprod theme={props.theme}/>
      </div>
      <div className='w-full h-2/6 p-4 flex flex-col justify-around items-center'>
        <ul className='w-full'>
          <li className={`border-b-2 flex justify-between text-xl py-2 dark:border-slate-100 border-neutral-800`}>Subtotal <span>$0</span></li>
          <li className='flex justify-between text-3xl font-bold py-6'>Total <span>$0</span></li>
        </ul>
        <button className='bg-white text-black text-sm w-5/12 h-10 font-bold'>FINALIZAR COMPRA</button>
        <ul className='flex flex-col justify-center gap-4 items-center text-xs'>
          <li>Seguir comprando</li>
          <li>Los costo de envío lo verás aplicado en el checkout</li>
        </ul>
      </div>
    </div>
  )
}

export default Cart