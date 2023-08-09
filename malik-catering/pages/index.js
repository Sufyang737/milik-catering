import Nav from '../components/NAV.js'
import Hero from '../components/Hero.js';
import Div from '../components/Div.jsx'
import Especial from '../components/Especial.jsx'
import DEST from '../components/DEST.js'
import Footer from '../components/Footer.jsx'
import Comprar from '../components/Comprar.jsx'
import Cart from '../components/Cart.jsx'


import PRODUCT from '@/components/Product';
import { Product } from '@/models/Product.js';
import { mongooseConnect } from '@/lib/mongoose.js';
import Checkout from '@/components/Checkout.jsx';



export default function Home({ featuredProduct }) {
  console.log(featuredProduct)
  return (
    <div className='w-full bg-neutral-800'>
      <Nav />
      <Div />
      <Hero /> 
      <Div />
      <Especial/>
      <DEST product={featuredProduct}/>
      <Div />
      <Footer />
      <Checkout></Checkout>
    </div>
  )
}

export async function getServerSideProps() {
  const featuredProductsIds = [
    '64bf40fb0718263753d5cd95',
    '64ced014142d8fa366047505',
    '64ced04e142d8fa36604750d',
    '64ced086142d8fa366047514',
    '64ced0ad142d8fa36604751b',
  ];

  await mongooseConnect();

  
  const featuredProduct = await Promise.all(
    featuredProductsIds.map(async (productId) => {
      return await Product.findById(productId);
    })
  );

  return {
    props: {
      featuredProduct: featuredProduct.map((product) =>
        JSON.parse(JSON.stringify(product))
      ),
    }, 
  };
}
