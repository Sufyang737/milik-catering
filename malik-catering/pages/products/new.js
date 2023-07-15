import ProductForm from "@/components/ProductForm";
import Layaout from "@/components/layaout";

export default function NewProduct(){
    return (
        <Layaout>
        <h1>Nuevo producto</h1>
        <ProductForm/>
        </Layaout>
    );
}