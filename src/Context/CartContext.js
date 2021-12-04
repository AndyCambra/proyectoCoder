import React from 'react'
import { useState } from 'react'

export const CartContext = React.createContext()

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([])
  const [totalCompra, setTotalCompra] = useState(0)

  const addToCart = (item, cantidad) => {
    let total = 0

    cart.map((p) => (total += p.cantidad * p.precio))

    const isExistId = cart.findIndex((p) => p.id === item.id)
    if (isExistId === -1) {
      setCart([...cart, { ...item, cantidad }])
    } else {
      const oldQuantity = cart[isExistId].cantidad
      const newCart = cart.filter((p) => p.id !== item.id)
      setCart([...newCart, { ...item, cantidad: oldQuantity + cantidad }])
    }

    total += item.precio * cantidad

    setTotalCompra(total)
  }
  const deleteItem = (item) => {
    setCart(cart.filter((p) => p.id !== item.id))
    setTotalCompra(totalCompra - item.precio * item.cantidad)
  }
  const eliminar = () => {
    setCart([])
  }
  console.log(1, cart)
  console.log(11, totalCompra)

  return (
    <CartContext.Provider
      value={{ addToCart, cart, eliminar, totalCompra, deleteItem }}
    >
      {children}
    </CartContext.Provider>
  )
}
