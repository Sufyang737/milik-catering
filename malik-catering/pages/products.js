import Layaout from "@/components/layaout";
import Link from "next/link";

export default function Products(){
    return(
        <Layaout>
            <Link className="bg-green-700 text-white py-2 px-2 rounded-md" href={'/products/new'}>Nuevo producto</Link>
        </Layaout>
    );
}