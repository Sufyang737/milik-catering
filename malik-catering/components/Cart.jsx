import React from 'react'
import Cartprod from './Cartprod'

const Cart = () => {
  return (
    <div className='h-screen w-1/4 bg-red-500 flex flex-col justify-between items-center'>
      <div className='w-full'> 
        <Cartprod/>
      </div>
      <div className='bg-green-500 w-full h-1/4 flex flex-col justify-evenly items-center'>
        <ul className='w-full h-1/2'>
          <li>Subtotal <span>$0</span></li>
          <li>Total <span>$0</span></li>
        </ul>
        <button className='bg-white text-black w-2/5 h-10'>FINALIZAR COMPRA</button>
        <div>
         
        </div>
      </div>
      
    </div>
  )
}

export default Cart