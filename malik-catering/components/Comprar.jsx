import Image from "next/image";
import { useState , useEffect} from "react";


export default function Comprar(props){
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
          <form className={`w-3/5 h-8 flex items-center justify-center text-black ${props.theme ? 'bg-slate-100' : 'bg-neutral-800 text-white'}`} id="myform" action="#">
            <input
              className="cursor-pointer"
              type="button"
              defaultValue="-"
              field="quantity"
              onClick={handleClickRemove}
            />
            <input className={`w-3/5 text-center outline-0 ${props.theme ? 'bg-slate-100' : 'bg-neutral-800'}`} type="number" name="quantity" defaultValue={ProductQuantity} />
            <input
              className="cursor-pointer"
              type="button"
              defaultValue="+"
              field="quantity"
              onClick={handleClickAdd}
            />
          </form>
        </div>
        <button className={`w-1/3 h-12 text-2xl text-black font-bold ${props.theme ? 'bg-slate-100' : 'bg-neutral-800 text-white'}`}>COMPRAR</button>
      </div>
    </section>
  );
};
