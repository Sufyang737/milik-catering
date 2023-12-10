import { useState } from "react";
import Navbar from "../components/Nav2";
import Hero from "../components/Hero.js";
import Div from "../components/Div.jsx";
import Especial from "../components/Especial.jsx";
import DEST from "../components/DEST.js";
import Footer from "../components/Footer.jsx";

export default function Home() {
  const [Theme, setTheme] = useState(true);

  const handleClick = () => {
    setTheme(!Theme);
  };
  return (
    <div className={`${Theme ? "dark" : " "}`}>
      <div
        className={`w-full dark:bg-neutral-800 dark:text-white bg-slate-100 text-black`}
      >
        <button
          className="fixed right-0 w-12 h-12 bg-red-500"
          onClick={handleClick}
        ></button>
        <Navbar theme={Theme} />
        <Div />
        <Hero />
        <Div />
        <Especial />
        <DEST />
        <Div />
        <Footer />
      </div>
    </div>
  );
}
