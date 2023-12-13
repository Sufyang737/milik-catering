import React from "react";
import Slider from "./slider2";
import Link from "next/link";

export default function Dest({ product }) {
  return (
    <section className="w-full h-[50vh] mx-auto bg-neutral-800 flex flex-col justify-center items-center gap-8">
      <div className="w-3/4 flex flex row justify-between items-center">
        <h3>PRODUCTOS DESTACADOS</h3>
        <button>
          <Link href={"/products"}>VER MÁS</Link>
        </button>
      </div>
      <div className="h-full w-3/4">
        <Slider product={product} />
      </div>
    </section>
  );
}
