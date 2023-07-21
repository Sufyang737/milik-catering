import Layaout from "@/components/layaout";
import axios from "axios";
import { useRouter } from "next/router";
import { useState } from "react";
import { useEffect } from "react";

export default function DeletProductPage(){
    const router = useRouter();
    const [productInfo,setProductInfo] = useState();
    const {id} = router.query;
    useEffect(() => {
        if (!id) {
            return;
        }
            axios.get('/api/products?id='+id).then(response => {
            setProductInfo(response.data);
        });
    }, [id]);
    function goBack() {
        router.push('/products');
    }
    async function deleteProduct() {
        await axios.delete('/api/products?id='+id);
        goBack();
    }
    return(
        <Layaout>
            <h1 className="text-center">Realmente quieres eliminiar el producto &nbsp;{productInfo?.title}</h1>
            <div className="flex gap-2 justify-center">
            <button className="btn-green" onClick={goBack} >No eliminar</button>
            <button className="btn-red" onClick={deleteProduct}>Si eliminar</button>
            </div>
        </Layaout>
    )
}