import React from 'react'
import Image from 'next/image'

const CheckoutCard = () => {
  return (
    <div className='py-6'>
      <div className='flex justify-between px-6'>
        <div className='flex flex-col justify-start gap-4'>
          <div className='text-2xl'>Producto</div>
          <div className='flex justify-center gap-4'>
          <Image  width={1000} height={1000} src={'/../public/assets/img/Rectangle37.png'} className="w-40"/>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, praesentium.</p>
          </div>
        </div>
        <div className='flex flex-col justify-start gap-4'>
          <div className='text-2xl'>Precio</div>
          <div>$20.323</div>
        </div>
        <div className='flex flex-col justify-start gap-4'>
          <div className='text-2xl'>Cantidad</div>
          <div>1</div>
        </div>
        <div className='flex flex-col justify-start gap-4'>
          <div className='text-2xl'>Subtotal</div>
          <div>$20.323</div>
        </div>
      </div>
      <div className='w-full h-1 bg-white mt-6'></div>
    </div>
  )
}

export default CheckoutCard