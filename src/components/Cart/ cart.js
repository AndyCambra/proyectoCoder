import React, { useContext } from 'react'
import { CartContext } from '../../Context/CartContext'

const Cart = () => {
  const { cart, eliminar, total } = useContext(CartContext)
  return (
    <div>
      {cart.map((item) => (
        <div key={item.id}>
          <p>
            {item.cantidad} {item.name} $ {item.precio}
          </p>
        </div>
      ))}
      <button onClick={eliminar}>Vaciar Carrito</button>
    </div>
  )
}

export default Cart
