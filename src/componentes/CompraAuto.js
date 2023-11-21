import React,{useState} from 'react'

export const CompraAuto = () => {
    const [contador,setcontador]=useState(0)
    const sumar=()=>setcontador(contador+1)
  return (
    <div>
        <button onClick={sumar}>Comprar {contador}</button>
        
    </div>
  )
}
