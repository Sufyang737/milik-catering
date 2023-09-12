import React from 'react'

const Div = (props) => {
  return (
    <div className={`w-full h-1 ${props.theme ? 'bg-slate-100' : 'bg-neutral-800'}`}></div>
  )
}

export default Div