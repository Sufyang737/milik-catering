import React, { useState } from "react";
import Product from "./Product";

const Slider = () => {
  const [Translate, setTranslate] = useState('250%')

  const handlClick = ()=>{

  }

  return (
    <div className="h-full overflow-hidden">
      <div className={'w-[200%] h-full mx-10 grid grid-flow-col auto-cols-auto gap-1 -translate-x-[' + Translate + ']'}>
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
      </div>
      <div className="absolute bg-white -translate-y-[500%] -translate-x-[100%]">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="black"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-12 h-12"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15.75 19.5L8.25 12l7.5-7.5"
          />
        </svg>
      </div>
      <div className="absolute bg-white -translate-y-[500%] translate-x-[3000%]">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="black"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-12 h-12"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M8.25 4.5l7.5 7.5-7.5 7.5"
          />
        </svg>
      </div>
    </div>
  );
};

export default Slider;
