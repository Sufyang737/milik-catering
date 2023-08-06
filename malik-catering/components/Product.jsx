import React, { useContext } from 'react';
import Image from 'next/image';
import CartContext from './Cart'; // Asegúrate de importar el contexto correctamente

export default function PRODUCT({ _id, title, description, price, images }, props) {
  
  const url = '/product/' + _id;

  return (
    <div className={'w-3/4 h-full bg-neutral-900 border-4 border-white' + props.justify}>
      <Image src={images?.[0]} width={1000} height={1000} className='h-3/4' alt="..." />
      <div className='h-1/4 w-full px-4 flex justify-between items-center'>
        <div className='flex flex-col justify-between items-center'>
          <span>{title}</span>
          <span>${price}</span>
        </div>
        <button>+</button>
      </div>
    </div>
  );
}
