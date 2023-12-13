import React from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import Product from "./Product";

const Slider2 = ({ product }) => {
  if (!Array.isArray(product) || product.length === 0) {
    return null;
  }

  return (
    <div className="w-full">
      <Splide
        aria-label="My Favorite Images"
        options={{
          type: "loop",
          width: "80vw",
          autoWidth: false,
          gap: "5rem",
          padding: { left: "3rem", right: "2rem" },
          perPage: 3,
        }}
      >
        {product.map((productItem) => (
          <SplideSlide key={productItem._id}>
            <Product
              images={productItem.images}
              title={productItem.title}
              price={productItem.price}
            />
          </SplideSlide>
        ))}
      </Splide>
    </div>
  );
};

export default Slider2;
