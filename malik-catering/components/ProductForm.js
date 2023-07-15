import Layaout from "@/components/layaout";
import axios from "axios";
import { redirect } from "next/dist/server/api-utils";
import { useState } from "react";
import { useRouter } from "next/router";

export default function ProductForm({_id,title:exitingTitle, description:existingDescription, price:exitingPrice,images,}){
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

    async function uploadImages(ev){
        const files = ev.target?.files;
        if(files?.length > 0){
            const data = new FormData();
            for (const file of filesA){
                data.append('file', file);
            }
            const res = await axios.post('/api/upload', data);
            console.log(res.data);
        }
    }


    return(
            <form onSubmit={saveProduct}>
                <label>Nombre del producto</label>
                <input type="text" placeholder="Nombre del producto" value={title} onChange={ev => setTitle(ev.target.value)}/>
                <label>Fotos</label>
                <div className="mb-2">
                    <label className="w-24 h-24 border text-center cursor-pointer flex flex-col items-center justify-center rounded-lg bg-gray-200">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5" />
                        </svg>
                        <div>
                            Subir foto
                        </div>
                        <input type="file" className="hidden" onChange={uploadImages}/>
                    </label>
                    {!images?.length && (<div>No hay fotos de este producto</div>)}
                </div>
                <label>Descripcion</label>
                <textarea placeholder="Descripcion" value={description} onChange={ev =>setDescription(ev.target.value)}></textarea>
                <label>Precio</label>
                <input type="number" placeholder="Precio" value={price} onChange={ev =>setPrice(ev.target.value)}/>
                <button type="submit" className="btn-primary">Guardar</button>
            </form>
    );
}