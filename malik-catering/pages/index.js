import Nav from '../components/Nav'
import Hero from '../components/Hero.js';
import Div from '../components/Div.jsx'
import Especial from '../components/Especial.jsx'
import Dest from '../components/Dest.js'
import Footer from '../components/Footer.jsx'
import Comprar from '../components/Comprar.jsx'
import Cart from '../components/Cart.jsx'

import { Product } from '@/models/Product'
import { mongooseConnect } from '@/lib/mongoose'
import PRODUCT from '@/components/Product';



export default function Home({ featuredProduct, newProducts }) {
  console.log({newProducts})
  return (
    <div className='w-full bg-neutral-800'>
      <Nav />
      <Div />
      <Hero product={featuredProduct} /> 
      <Div />
      <Especial />
      <Dest/>
      <PRODUCT products = {newProducts}/>
      <Div />
      <Footer />
      <Comprar />

    </div>
  )
}

export async function getServerSideProps() {
  const featuredProductId = '64bf40fb0718263753d5cd95';
  await mongooseConnect();
  const featuredProduct = await Product.findById(featuredProductId);
  const newProducts = await Product.find({}, null, {sort: {'_id' :-1}})
  return {
    props: { featuredProduct: JSON.parse(JSON.stringify(featuredProduct)),
      newProducts: JSON.parse(JSON.stringify(newProducts))
    },
  }
}
