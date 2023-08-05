import React, { useRef, useState } from "react";
import Product from "./Product";

const Slider = () => {
  const [sliderCount, setSliderCount] = useState(0);
  const sliderWrap = useRef();

  const handleClickRight = () => {
    if (sliderCount === 0) {
      sliderWrap.current.classList.remove("-translate-x-[0%]")
      sliderWrap.current.classList.add("-translate-x-[50%]");
      setSliderCount(1);
    }else if(sliderCount === 1){
      sliderWrap.current.classList.remove("-translate-x-[50%]");
      sliderWrap.current.classList.add("-translate-x-[100%]");
      setSliderCount(2);
    }else if(sliderCount ===2){
      sliderWrap.current.classList.remove("-translate-x-[100%]");
      sliderWrap.current.classList.add("-translate-x-[0%]");
      setSliderCount(0);
    }
  };

  const handleClickLeft = () => {
    if (sliderCount === 0) {
      sliderWrap.current.classList.remove("-translate-x-[0%]")
      sliderWrap.current.classList.add("-translate-x-[100%]");
      setSliderCount(2);
    }else if(sliderCount === 1){
      sliderWrap.current.classList.remove("-translate-x-[50%]")
      sliderWrap.current.classList.add("-translate-x-[0%]");
      setSliderCount(0);
    }else if(sliderCount ===2){
      sliderWrap.current.classList.remove("-translate-x-[100%]")
      sliderWrap.current.classList.add("-translate-x-[50%]");
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
    <div className="relative h-full">
      <div className="h-full overflow-hidden">
        <div className={"w-[200%] h-full mx-10 grid grid-flow-col auto-cols-auto gap-1 transition-all"} ref={sliderWrap}>
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
        </div>
      </div>
      <button className="absolute top-1/2 -left-8" onClick={handleClickLeft}>
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
            d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18"
          />
        </svg>
      </button>
      <button className="absolute top-1/2 -right-8" onClick={handleClickRight}>
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
            d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
          />
        </svg>
      </button>
    </div>
  );
};

export default Slider;
