import Nav from '../components/Nav'
import Hero from '../components/Hero.js';
import Div from '../components/Div.jsx'
import Especial from '../components/Especial.jsx'
import Dest from '../components/Dest.jsx'
import Footer from '../components/Footer.jsx'
import Comprar from '../components/Comprar.jsx'
import Cart from '../components/Cart.jsx'

import { Product } from '@/models/Product'
import { mongooseConnect } from '@/lib/mongoose'



export default function Home({product}) {
  console.log(product);
  return (
    <div className='w-full bg-neutral-800'>
      <Nav />
      <Div />
      <Hero product={product} />
      <Div />
      <Especial />
      <Dest />
      <Div />
      <Footer />
      <Comprar />

    </div>
  )
}

export async function getServerSideProps() {
  const featuredProductId = '64bf40fb0718263753d5cd95';
  await mongooseConnect();
  const product = await Product.findById(featuredProductId);
  return {
    props: { product: JSON.parse(JSON.stringify(product))},
  }
}
