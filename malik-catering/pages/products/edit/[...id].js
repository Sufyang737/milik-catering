import ProductForm from "@/components/ProductForm";
import Layaout from "@/components/layaout";
import axios from "axios";
import { useRouter } from "next/router";
import { useState } from "react";
import { useEffect } from "react";

export default function EditProductPage(){
    const [productInfo, setProductInfo] = useState(null);
    const router = useRouter();
    const {id} = router.query;
    useEffect( () => {
        if(!id){
            return;
        }
        axios.get('/api/products?id='+id).then(response =>{
            setProductInfo(response.data)
        });
    }, [id]);
    return(
        <Layaout>
        <h1>Editar producto</h1>
        {productInfo && (
            <ProductForm {...productInfo} />
        )}
        </Layaout>
    );
}