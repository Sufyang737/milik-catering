import Layaout from "@/components/layaout";
import axios from "axios";
import { useState } from "react";

export default function NewProduct(){
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('');

    async function createProduct(ev){
        ev.preventDefault();
        const data = {title, description, price};
        await axios.post('/api/products', data);
        
    }
    return(
        <Layaout>
            <form onSubmit={createProduct}>
                <h1>Nuevo producto</h1>
                <label>Nombre del producto</label>
                <input type="text" placeholder="Nombre del producto" value={title} onChange={ev => setTitle(ev.target.value)}/>
                <label>Descripcion</label>
                <textarea placeholder="Descripcion" value={description} onChange={ev =>setDescription(ev.target.value)}></textarea>
                <label>Precio</label>
                <input type="number" placeholder="Precio" value={price} onChange={ev =>setPrice(ev.target.value)}/>
                <button type="submit" className="btn-primary">Guardar</button>
            </form>
        </Layaout>
    );
}