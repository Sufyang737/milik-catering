import React from 'react'
import Image from 'next/image'

const PRODUCT = (props) => {
  return (
    <div className={'w-5/6 h-full bg-neutral-900 border-4 border-white' + props.justify}>
      <Image src='/../public/assets/img/Rectangle37.png' width={1000} height={1000} className='h-3/4 w-full ' alt="Picture of the author"/>
      <div className='h-1/4 w-full px-4 flex justify-between items-center'>
        <div className='flex flex-col justify-between items-center'>
          <span>TEXTO</span>
          <span>$0.00</span>
        </div>
        <button>+</button>
      </div>
    </div>
  )
}

export default PRODUCT