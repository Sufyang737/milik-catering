import React from 'react'
import Image from 'next/image'
const PRODUCT = () => {
  return (
    <div className='w-96 h-96'>
      <Image src='/../public/assets/img/Rectangle37.png' width={1000} height={1000} className='object-fit' alt="Picture of the author"/>
      <div>
        <div>
          <span>TEXTO</span>
          <span>$0.00</span>
        </div>
        <button>+</button>
      </div>
    </div>
  )
}

export default PRODUCT