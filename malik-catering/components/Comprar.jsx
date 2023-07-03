import React from "react";

const Comprar = () => {
  return (
    <section className="w-full h-screen p-36 flex items-center">
      <div className="w-2/5 h-full bg-red-500">as</div>
      <div className="w-3/5 h-full p-12 flex flex-col items-start justify-evenly">
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
