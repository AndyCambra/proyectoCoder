import React from 'react'
import './mensaje.css'

const Mensaje = ({ ord }) => {
  const detailProd = ord.items.map((i) => i)
  console.log(ord)

  return (
    <div className="mensaje-box">
      <h3>Nombre del Producto: {detailProd.name}</h3>
      <h3>Total: ${ord.total}</h3>
      <p>Id de la compra: {ord.id}</p>
      <p>Fecha: {ord.date}</p>
      <p>Email: {ord.buyer}</p>
    </div>
  )
}

export default Mensaje
