
export default function Hero({product}){
  return (
    <section className="w-full h-[85vh] bg-neutral-800 flex items-center justify-center ">
      <div className='w-3/5 p-24 flex flex-col items-center gap-12 text-4xl text-white'>
        <h2 className='w-2/3'>{product.title}</h2>
        <p className="font-light">{product.description}</p>
        <button className='transition-all  duration-300 p-4 border-4 border-yellow-500 text-3xl font-bold hover:bg-yellow-500 hover:text-neutral-800 hover:font-bold'><a href="#">MERCADITO</a></button>
      </div>
      
      <img src='https://admin-malik.s3.amazonaws.com/1690255528855.webp' width={100} height={100} className='w-2/5 h-full object-fit' alt="Picture of the author"/>
    </section>
  )
}

