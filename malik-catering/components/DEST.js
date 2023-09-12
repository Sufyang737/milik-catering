import React from 'react'
import Slider from './Slider'

const Dest = (props) => {
  return (
    <section className='w-3/4 h-[50vh] mx-auto flex flex-col justify-center items-center gap-8' >
      <div className='w-full flex flex row justify-between items-center'>
        <h3>PRODUCTOS DESTACADOS</h3>
        <button><a href="#">VER MÁS</a></button>
      </div>
      <div className='h-full'>
        <Slider theme={props.theme}/>
      </div>
           
    </section>
  )
}

export default Dest

