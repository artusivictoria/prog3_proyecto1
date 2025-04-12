import React from 'react'

export default function Detalle(props) {
  const idFicha = props.match.params.id
  console.log('El idficha es: ',idFicha)
  return (
    <div>
    Detalle de la ficha {idFicha}
    </div>
    
  )
}

