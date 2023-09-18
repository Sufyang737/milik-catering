import { useState } from 'react'
import Nav from '../components/Nav'
import Hero from '../components/Hero.js';
import Div from '../components/Div.jsx'
import Especial from '../components/Especial.jsx'
import DEST from '../components/DEST.js'
import Footer from '../components/Footer.jsx'
import Comprar from '../components/Comprar.jsx'
import Checkout from '../components/Checkout.jsx'




export default function Home() {
  const [Theme, setTheme] = useState(true)

  const handleClick = () =>{
    setTheme(!Theme)
  }
  return (
    <div className={`${Theme ? 'dark' : ' '}`}>
      <div className={`w-full dark:bg-neutral-800 dark:text-white bg-slate-100 text-black`}>
        <button className='fixed right-0 w-12 h-12 bg-red-500' onClick={handleClick}></button>
        <Nav />
        <Div />
        <Hero /> 
        <Div />
        <Especial />
        <DEST />
        <Div />
        <Footer />
        <Comprar />
        <Checkout />
      
      </div>
    </div>
  )
}
