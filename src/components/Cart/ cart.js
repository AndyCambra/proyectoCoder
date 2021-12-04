import React, { useContext } from 'react'

import { CartContext } from '../../Context/CartContext'

const Cart = () => {
  const { cart, eliminar, totalCompra, deleteItem } = useContext(CartContext)
  return (
    <div>
      {cart.map((item) => (
        <div key={item.id}>
          <p>
            {item.cantidad} {item.name} $ {item.precio}
          </p>
          <button onClick={() => deleteItem(item)}>Eliminar</button>
        </div>
      ))}
      <p>total: {totalCompra}</p>
      <button onClick={eliminar}>Vaciar Carrito</button>
    </div>
  )
}

export default Cart
