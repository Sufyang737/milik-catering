import React from 'react'
import Cart from './Cart.jsx'
const Nav = () => {
  const [Menu, setMenu] = React.useState(false)
  return (
    <header className='w-full h-[15vh] '>
      <div className='bg-green-500 w-full h-2/5 flex items-center justify-center gap-4'>
        <p className=''>
          Entregas de lunes a sabado
        </p>
        <span>|</span>
        <p className=''>
          20% de descuento a partir de $20000
        </p>
      </div>
      <nav className='px-36 w-full h-3/5 flex justify-between items-center bg-neutral-800 '>
        <h1 className=''>MALIK</h1>
        <ul className='bg-slate-100 w-96 px-3 py-2 rounded-2xl flex flex-row items-center justify-center gap-4 text-black font-bold'>
          <li className=''><a href="#">mercadito</a></li>
          <li className=''><a href="#">armá tu box</a></li>
          <li className=''><a href="#">box-armados</a></li>
        </ul>
        <div className='flex flex-row justify-center gap-16'>
          <button><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
          </svg></button>
          <div>
            <button onClick={setMenu(!Menu)}><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6"> 
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
            </svg></button>
            <Cart display='Menu'/> 
          </div>
        </div>
      </nav>
      
    </header>
  )
}

export default Nav