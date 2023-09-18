import React, { useEffect , useState , useRef } from 'react'
import Cart from './Cart.jsx'


const Nav = (props) => {
  const [Menu, setMenu] = React.useState(false)
  const [SearchbarStyle, setSearchbarStyle] = useState(false)
  const [Navtranslate, setNavtranslate] = useState(false)

  const handleClick = ()=>{
    setMenu(!Menu)
  }

  const handleSearchClick = ()=>{
    setSearchbarStyle(!SearchbarStyle)
  }
  useEffect(() => {
      setInterval(() => {
      setNavtranslate(!Navtranslate)
    }, 5000);

  }, [Navtranslate])
  
  
  
  return (
    <header className='w-full h-[15vh] '>
      <div className='bg-green-500 w-full h-2/5 overflow-hidden'>
        <div className='h-full w-full'>
          {/* <p className={`h-full w-full ${Navtranslate ? 'translate-y-0' : 'translate-y-[200%]'} transition-all duration-500 overflow-hidden bg-blue-500`}>
            Entregas de <strong>lunes a sabado</strong>
          </p>
          <p className={`h-full w-full ${Navtranslate ? 'translate-y-[200%]' : 'translate-y-0'} transition-all duration-500 overflow-hidden bg-red-500`}>
            <strong>20%</strong> de descuento a partir de <strong>$20000</strong>
          </p> */}
        </div>
      </div>
      <nav className='px-36 w-full h-3/5 flex justify-between items-center'>
        <h1 className=''>MALIK</h1>
        <ul className={`${props.theme ? 'bg-slate-100 text-black' : 'bg-neutral-800 text-white'} w-96 px-3 py-2 rounded-2xl flex flex-row items-center justify-center gap-4 font-bold`}>
          <li className=''><a href="#">mercadito</a></li>
          <li className=''><a href="#">armá tu box</a></li>
          <li className=''><a href="#">box-armados</a></li>
        </ul>
        <div className='flex flex-row justify-center gap-16'>
          <div className='search-box relative'>
            <input type="text" className={`${props.theme ? `${SearchbarStyle ? 'bg-slate-100' : 'bg-transparent'}` : `${SearchbarStyle ? 'bg-neutral-800' : 'bg-transparent'}`} text-black ${SearchbarStyle ? 'w-48' : 'w-0'} h-6 pr-10 pl-2 outline-none absolute right-0 rounded-xl transition-all duration-500 ease-out`}  onBlur={handleSearchClick}></input>
            <button className='absolute right-[.5rem]' onClick={handleSearchClick}>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={`w-6 h-6  transition-all duration-500 ease-out ${props.theme ? `${SearchbarStyle ? 'stroke-black' : 'stroke-white'}` : `${SearchbarStyle ? 'stroke-white' : 'stroke-black'}`}`}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
              </svg>
            </button>
            
          </div>
          <div> 
            <button onClick={handleClick}>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6"> 
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
              </svg>
            </button>
            <Cart display={Menu} theme={props.theme}/> 
          </div>
        </div>
      </nav>
      
    </header>
  )
}

export default Nav