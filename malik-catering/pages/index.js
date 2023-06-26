import Nav from '../components/Nav'
import Hero from '../components/Hero'
import Div from '../components/Div.jsx'
import Especial from '../components/Especial.jsx'
import Dest from '../components/Dest.jsx'


import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className='w-screen'>
      <Nav/>
      <Div/>
      <Hero/>
      <Div/>
      <Especial/>
      <Dest/>s
     

    </div>
  )
}
