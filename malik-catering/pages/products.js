import Nav from "@/components/navbar.js";
import ProductsGrid from "@/components/productGrid";
import { mongooseConnect } from "@/lib/mongoose";
import { Product } from "@/models/Product";
import { styled } from "styled-components";

const Title = styled.h1`
  font-size: 1.5em;
`;

export default function ProductsPage({ products }) {
  return (
    <div className="bg-neutral-800 h-screen">
      <Nav />
      <div className="mx-36 flex flex-col justify-center gap-12">
        <Title>Mas productos</Title>
        <ProductsGrid products={products} />
        {products?.length}{" "}
      </div>
    </div>
  );
}

export async function getServerSideProps() {
  await mongooseConnect();
  const products = await Product.find({}, null, { sort: { _id: -1 } });
  return {
    props: {
      products: JSON.parse(JSON.stringify(products)),
    },
  };
}
