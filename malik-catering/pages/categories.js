import Layaout from "@/components/layaout";
import axios from "axios";
import { useEffect, useState } from "react";


export default function Categories(){
    const [name, setName] = useState('')
    const [categories, setCategories] = useState([])
    const [parentCategory, setParentCategory] = useState('')
    const [editedCategory, setEditedCategory] = useState(null)
    useEffect(() => {
         fetchCategories();
    }, []);

    function fetchCategories() {
        axios.get('/api/categories').then(result => {
                setCategories(result.data);
        });
    }
    async function saveCategory(ev){
        ev.preventDefault();
        const data = {name, parentCategory};

        if(editedCategory){
            await axios.put('/api/categories', {...data,
            _id: editedCategory._id});
        }
        else{
            await axios.post('/api/categories', data);
        }
        setName('');
        fetchCategories();
    }

    function editCategory(category){
        setEditedCategory(category);
        setName(category.name);
        setParentCategory(category?.parent?._id);
    }

    return(
        <Layaout>
            <h1>Categoria</h1>
            
            <form  onSubmit={saveCategory} className="flex gap-1">
                <input type="text" className="mb-0" onChange={ev => setName(ev.target.value)} value={name} placeholder={'Nombre...'} />
                <select className="mb-0" value={parentCategory} onChange={ev => setParentCategory(ev.target.value)}>
                    <option value="0">No tiene ninguna categoria</option>
                    {categories.length > 0 && categories.map
                        (category => (
                            <option value={category._id}>{
                                category.name
                            }</option>
                        ))}
                </select>
                <button className="btn btn-primary py-1" type="submit">Guardar</button>
            </form>
            <table className="basic mt-4">
                <thead>
                        <tr>
                            <td>
                                Categoria nombre
                            </td>
                            <td>
                                Categoria principal
                            </td>
                        </tr>
                </thead>
                <tbody>
                    {categories.length > 0 && categories.map
                        (category => (
                            <tr>
                                <td>
                                    {category.name}
                                </td>
                                <td>
                                    {category?.parent?.name}
                                </td>
                                <td>
                                    <button className="btn-green mr-2" onClick={() => editCategory(
                                        category
                                    )} >Editar</button>
                                    <button className="btn-red" >Eliminar</button>
                                </td>
                            </tr>
                    ))}
                </tbody>
            </table>
        </Layaout>
    );
}