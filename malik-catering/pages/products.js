import Nav from "@/components/NAV";
import ProductsGrid from "@/components/ProductsGrid";
import { mongooseConnect } from "@/lib/mongoose";
import { Product } from "@/models/Product";
import { styled } from "styled-components";

const Title = styled.h1`
    font-size: 1.5em;
`;

export default function ProductsPage ({products}){
    return(
    <>
        <Nav></Nav>
        <Title>Mas porductos</Title>
        <ProductsGrid products={products} />
        {products?.length}
    </> 

    )
}

export async function getServerSideProps () {
    await mongooseConnect();
    const products = await Product.find({}, null, {sort:{'_id':-1}});
    return{
        props:{
            products: JSON.parse(JSON.stringify(products ))
        }
    }
}