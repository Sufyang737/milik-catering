import React from "react";
import Image from "next/image";
import { useState } from "react";
const Cartprod = (props) => {

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
    <div className={`w-full h-32 flex justify-evenly items-center border-b-2 ${props.theme ? 'bordewr-slate-100' : 'border-neutral-800'}`}>
      <Image
        width={1000}
        height={1000}
        src={"/../public/assets/img/Rectangle37.png"}
        className="w-1/4 object-fit"
      />
      <div className="flex flex-col justify-between items-center gap-9">
        <p className="text-xs h-auto">
          Idea mix de frutas para dps de un asado
        </p>
        <form
          className={`${props.theme ? 'bg-slate-100 text-black' : 'bg-neutral-800 text-white'} w-1/2 h-8 flex items-center justify-center font-bold`}
          id="myform"
          action="#"
        >
          <input className="cursor-pointer" type="button" defaultValue="-" field="quantity" onClick={handleClickRemove}/>
          <input
            className="w-3/5 text-center outline-0 bg-inherit"
            type="number"
            name="quantity"
            defaultValue={ProductQuantity}        
          />
          <input className="cursor-pointer" type="button" defaultValue="+" field="quantity" onClick={handleClickAdd} />
        </form>
      </div>
      <div className="flex flex-col justify-center gap-4 items-end">
        <button>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
            />
          </svg>
        </button>
        <div>$20.323</div>
      </div>
    </div>
  );
};

export default Cartprod;
