import Nav from '@/components/nav'
// import Link from 'next/link';
import { useSession, signIn, signOut } from "next-auth/react"

export default function Layaout({children}) {
  const { data: session } = useSession()
  if(!session){
    return (
      <div className="bg-blue-900 h-screen w-screen flex items-center">
        <div clasName="text-center justify-center w-full">
          <button className="bg-white p-2 rounded-lg px-4" onClick={() => signIn('google')}>Login con google</button>
        </div>
      </div>
    )
  }
  
  return(
    <div className="bg-blue-900 min-h-screen flex">
      <Nav/>
      <div className="bg-white flex-grow mt-2 mr-2 mb-2 rounded-lg p-4">{children}</div>
    </div>
  );
}
