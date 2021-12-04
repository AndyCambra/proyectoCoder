import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react/cjs/react.development'

export const CartContext = React.createContext()

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([])
  const [totalCompra, setTotalCompra] = useState(0)

  const addToCart = (item, cantidad) => {
    setCart([...cart, { ...item, cantidad }])

    setTotalCompra(item.precio * cantidad)
  }

  const eliminar = () => {
    setCart([])
  }
  console.log(cart)
  console.log(11, totalCompra)

  return (
    <CartContext.Provider value={{ addToCart, cart, eliminar }}>
      {children}
    </CartContext.Provider>
  )
}
