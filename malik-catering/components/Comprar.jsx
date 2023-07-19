import React from "react";
import Image from "next/image";

const Comprar = () => {
  return (
    <section className="w-full h-screen p-48 flex items-center ">
      <div className="w-2/5 h-full flex flex-col gap-10 items-center justify-center">
        <Image  width={10000} height={1000} src={'/../public/assets/img/Rectangle37.png'} className="h-full w-full object-contain"/>
        <div className="flex items-center justify-between">
          <Image  width={1000} height={1000} src={'/../public/assets/img/Rectangle37.png'} className="w-[30%] object-fit"/>
          <Image  width={1000} height={1000} src={'/../public/assets/img/Rectangle37.png'} className="w-[30%] object-fit"/>
          <Image  width={1000} height={1000} src={'/../public/assets/img/Rectangle37.png'} className="w-[30%] object-fit"/>
        </div>
      </div>
      <div className="w-3/5 h-full px-24 pb-12 flex flex-col items-start justify-between">
        <div className="flex flex-col gap-5">
          <h3 className="text-4xl font-bold">Hamburguesa</h3>
          <p>Come solo una persona no viene con papas</p>
          <p  className="text-2xl font-bold">$800.0</p>
        </div>
        <div className="flex flex-col gap-5">
          <p className="text-2xl font-bold">Cantidad</p>
          <form className="w-3/5 h-8 bg-white flex items-center justify-center text-black" id="myform" action="#">
            <input
              className=""
              type="button"
              value="-"
              field="quantity"
            />
            <input className="w-3/5 text-center outline-0" type="text" name="quantity" value="0"/>
            <input
              className=""
              type="button"
              value="+"
              field="quantity"
            />
          </form>
        </div>
        <button className="w-1/3 h-12 bg-white text-2xl text-black font-bold">COMPRAR</button>
      </div>
    </section>
  );
};

export default Comprar;
