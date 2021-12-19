import React from 'react'

const Mensaje = ({ ord }) => {
  const nameProd = ord.items.map((i) => i.name)

  return (
    <div>
      <p>Id de la compra: {ord.id}</p>
      <p>Fecha: {ord.date}</p>
      <h3>Nombre del Producto: {nameProd}</h3>
      <p>Email: {ord.buyer}</p>
    </div>
  )
}

export default Mensaje
