
import Image from 'next/image'

export default function PRODUCT({products}){
  return (
    <div className={'w-24 h-full bg-neutral-900 border-4 border-white'}>
      {products?.length >0 && products.map(product => (
        <div className='flex flex-col justify-between items-center'>
          <span>{product.title}</span>
          <span>{product.price}</span>
        </div>
      ))}
      
    </div>
  )
}/*
<Image src='/../public/assets/img/Rectangle37.png' width={1000} height={1000} className='h-24  w-24 ' alt="Picture of the author"/>
      <div className='h-1/4 w-full px-4 flex justify-between items-center'>
        
        <button>+</button>
      </div>
*/

