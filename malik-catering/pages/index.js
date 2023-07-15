import Layaout from "@/components/layaout";
import { useSession } from "next-auth/react";

export default function Home(){
  const {data: session} = useSession();
  console.log({session});
  return <Layaout>
    <div className="text-black flex">
        <h1>Hola!, <b>{session?.user?.name}</b></h1>
    </div>
  </Layaout>
}