import Layaout from "@/components/layaout";
import axios from "axios";
import { redirect } from "next/dist/server/api-utils";
import { useState } from "react";
import { useRouter } from "next/router";

export default function ProductForm({_id,title:exitingTitle, description:existingDescription, price:exitingPrice,}){
    const [title, setTitle] = useState(exitingTitle ||'');
    const [description, setDescription] = useState( existingDescription ||'');
    const [price, setPrice] = useState( exitingPrice || '');
    const [goToProducts, setGoToProducts] = useState(false);
    const router = useRouter();
    async function saveProduct(ev){
        ev.preventDefault();
        const data = {title, description, price};
        if (_id){
            await axios.put('/api/products', {...data, _id})
        }
        else{
            await axios.post('/api/products', data);
        }
        setGoToProducts(true);
    }
    if (goToProducts){
        router.push('/products')
    }
    return(
            <form onSubmit={saveProduct}>
                <label>Nombre del producto</label>
                <input type="text" placeholder="Nombre del producto" value={title} onChange={ev => setTitle(ev.target.value)}/>
                <label>Descripcion</label>
                <textarea placeholder="Descripcion" value={description} onChange={ev =>setDescription(ev.target.value)}></textarea>
                <label>Precio</label>
                <input type="number" placeholder="Precio" value={price} onChange={ev =>setPrice(ev.target.value)}/>
                <button type="submit" className="btn-primary">Guardar</button>
            </form>
    );
}