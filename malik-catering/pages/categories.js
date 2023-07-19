import Layaout from "@/components/layaout";
import { useState } from "react";

export default function Categories(){
    const [name, setName] = useState('')

    function saveCategory(){
        
    }

    return(
        <Layaout>
            <h1>Categoria</h1>
            <label>Tipo de categoria</label>
            <form  onSubmit={saveCategory} className="flex gap-1">
                <input type="text" className="mb-0" onChange={ev => setName(ev.target.value)} value={name} placeholder={'Nombre...'} />
                <button className="btn btn-primary py-1" type="submit">Guardar</button>
            </form>
        </Layaout>
    );
}