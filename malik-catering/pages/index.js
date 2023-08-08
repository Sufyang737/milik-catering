import Nav from '../components/Nav'
import Hero from '../components/Hero.js';
import Div from '../components/Div.jsx'
import Especial from '../components/Especial.jsx'
import DEST from '../components/DEST.js'
import Footer from '../components/Footer.jsx'
import Comprar from '../components/Comprar.jsx'
import Checkout from '../components/Checkout.jsx'


import PRODUCT from '@/components/Product';



export default function Home() {
  
  return (
    <div className='w-full bg-neutral-800'>
      <Nav />
      <Div />
      <Hero /> 
      <Div />
      <Especial />
      <DEST/>
      <Div />
      <Footer />
      <Comprar />
      <Checkout/>
    </div>
  )
}
