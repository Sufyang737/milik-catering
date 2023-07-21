import Layaout from "@/components/layaout";
import axios from "axios";
import { redirect } from "next/dist/server/api-utils";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Spinner from "./Spinner";
import { ReactSortable } from "react-sortablejs";
export default function ProductForm({_id,title:exitingTitle, description:existingDescription, price:exitingPrice,images:existingImages,category:assignedCategory}){
    const [title, setTitle] = useState(exitingTitle ||'');
    const [images, setImages] = useState(existingImages||[]);
    const [category, setCategory] = useState(assignedCategory || '');
    const [description, setDescription] = useState( existingDescription ||'');
    const [price, setPrice] = useState( exitingPrice || '');
    const [goToProducts, setGoToProducts] = useState(false);
    const [isUploading, setIsUploading] = useState(false);
    const router = useRouter();
    const [categories, setCategories] = useState([])
    useEffect(() =>{
        axios.get('/api/categories').then(result =>{
            setCategories(result.data);
        })
    }, [])
    async function saveProduct(ev){
        ev.preventDefault();
        const data = {title, description, price, images, category};
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
            setIsUploading(true)
            const data = new FormData();
            for (const file of files){
                data.append('file', file);
            }
            const res = await axios.post('/api/upload', data);
            setImages(oldImages => {
                return [...oldImages, ...res.data.links];
            });
            setIsUploading(false);
        }
    }

    function uploadImagesOrder(images){
        setImages(images)
    }

    return(
            <form onSubmit={saveProduct}>
                <label>Nombre del producto</label>
                <input type="text" placeholder="Nombre del producto" value={title} onChange={ev => setTitle(ev.target.value)}/>
                <label>Categoria</label>
                <select value={category} onChange={ev => setCategory(ev.target.value)}>
                    <option value="">Seleccione una categoria</option>
                    {categories.length > 0 && categories.map(c => (
                        <option  value={c._id}>{c.name}</option>
                    ))}
                </select>
                <label>Fotos</label>
                <div className="mb-2 flex flex-wrap gap-2">
                <ReactSortable list={images} className="flex flex-wrap gap-1" setList={uploadImagesOrder}>
                    {!!images?.length && images.map(link => (
                        <div key={link} className="h-24"> 
                            <img src={link} alt="..." className="rounded-lg"/>
                        </div>
                    ))}
                </ReactSortable>
                    {isUploading && (
                        <div className="h-24 flex items-center">
                            <Spinner/>
                        </div>
                    )}
                    <label className="w-24 h-24 border text-center cursor-pointer flex flex-col items-center justify-center rounded-lg bg-gray-200">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5" />
                        </svg>
                        <div>
                            Subir foto
                        </div>
                        <input type="file" className="hidden" onChange={uploadImages}/>
                    </label>
                </div>
                <label>Descripcion</label>
                <textarea placeholder="Descripcion" value={description} onChange={ev =>setDescription(ev.target.value)}></textarea>
                <label>Precio</label>
                <input type="number" placeholder="Precio" value={price} onChange={ev =>setPrice(ev.target.value)}/>
                <button type="submit" className="btn-primary">Guardar</button>
            </form>
    );
}