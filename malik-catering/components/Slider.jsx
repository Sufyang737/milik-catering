import React, { useRef, useState } from "react";
import Product from "./Product";

const Slider = () => {
  const [sliderCount, setSliderCount] = useState(0);
  const sliderWrap = useRef();

  const handleClickRight = () => {
    if (sliderCount === 0) {
      sliderWrap.current.classList.add('-translate-x-[25%]');
      setSliderCount(1);
    }
  };

  // const handleClickRight = ()=>{
  //   if (sliderCount > 1 ){
  //     sliderPercent = 0
  //     sliderCount = 0
  //   }else {
  //     sliderPercent = sliderPercent + 15
  //     sliderCount = sliderCount + 1
  //   }
  //   console.log(sliderPercent)
  // }


  // const handleClickLeft = ()=>{
  //   setTranslate()
  //   sliderCount--
  // }


  return (
    <div className="h-full overflow-hidden">
      <div
        className={'w-[200%] h-full mx-10 grid grid-flow-col auto-cols-auto gap-1 '}
        ref={sliderWrap}
      >
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
      </div>
      <button className="absolute bg-white -translate-y-[500%] -translate-x-[100%]">
        {/* Button content */}
      </button>
      <button
        className="absolute bg-white -translate-y-[500%] translate-x-[3000%]"
        onClick={handleClickRight}
      >
        {/* Button content */}
      </button>
    </div>
  );
};

export default Slider;
