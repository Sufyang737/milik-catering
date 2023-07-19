import Nav from '../components/Nav'
import Hero from '../components/Hero'
import Div from '../components/Div.jsx'
import Especial from '../components/Especial.jsx'
import Dest from '../components/Dest.jsx'
import Footer from '../components/Footer.jsx'
import Comprar from '../components/Comprar.jsx'
import Cart from '../components/Cart.jsx'

import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className='w-screen bg-neutral-800'>
      <Nav/>
      <Div/>
      <Hero/>
      <Div/>
      <Especial/>
      <Dest/>
      <Div/>
      <Footer/>
      <Comprar/>
      <Cart/>

    </div>
  )
}
