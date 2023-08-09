import Nav from "@/components/NAV";
import { mongooseConnect } from "@/lib/mongoose";
import { Product } from "@/models/Product";
import Image from "next/image";
import { useState, useEffect } from "react";


export default function ProductPage({ product }) {
  const [ProductQuantity, setProductQuantity] = useState(0);


  const handleClickAdd = () => {

    setProductQuantity((prevQuantity) => prevQuantity + 1);
  };

  const handleClickRemove = () => {
    if (ProductQuantity > 0) {
      setProductQuantity((prevQuantity) => prevQuantity - 1);
    } else {
      return;
    }
  };
  return (
    <>
    <Nav/>
    <section className="w-full h-screen p-48 flex items-center ">
      <div className="w-2/5 h-full flex flex-col gap-10 items-center justify-center">
        <Image width={10000} height={1000} src={'/../public/assets/img/Rectangle37.png'} className="h-full w-full object-contain" />
        <div className="flex items-center justify-between">
          <Image width={1000} height={1000} src={product.images?.[0]} className="w-[30%] object-fit" />
          <Image width={1000} height={1000} src={'/../public/assets/img/Rectangle37.png'} className="w-[30%] object-fit" />
          <Image width={1000} height={1000} src={'/../public/assets/img/Rectangle37.png'} className="w-[30%] object-fit" />
        </div>
      </div>
      <div className="w-3/5 h-full px-24 pb-12 flex flex-col items-start justify-between">
        <div className="flex flex-col gap-5">
          <h3 className="text-4xl font-bold">{product.title}</h3>
          <p>{product.description}</p>
          <p className="text-2xl font-bold">${product.price}</p>
        </div>
        <div className="flex flex-col gap-5">
          <p className="text-2xl font-bold">Cantidad</p>
          <form className="w-3/5 h-8 bg-white flex items-center justify-center text-black" id="myform" action="#">
            <input
              className="cursor-pointer"
              type="button"
              value="-"
              field="quantity"
              onClick={handleClickRemove}
            />
            <input className="w-3/5 text-center outline-0" type="number" name="quantity" value={ProductQuantity} />
            <input
              className="cursor-pointer"
              type="button"
              value="+"
              field="quantity"
              onClick={handleClickAdd}
            />
          </form>
        </div>
        <button className="w-1/3 h-12 bg-white text-2xl text-black font-bold">COMPRAR</button>
      </div>
    </section>
    </>
  )
}

export async function getServerSideProps(context) {
  await mongooseConnect();
  const { id } = context.query;
  const product = await Product.findById(id);
  return {
    props: {
      product: JSON.parse(JSON.stringify(product)),
    }
  }
}