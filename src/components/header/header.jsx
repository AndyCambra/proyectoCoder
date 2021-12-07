import React, { useContext } from 'react'
import './index.css'
import cart from '../../iconos/cart-plus-solid.svg'
import { Link } from 'react-router-dom'

import { CartContext } from '../../Context/CartContext'

const Header = () => {
  const { itemQty } = useContext(CartContext)
  return (
    <>
      <nav className="navBar">
        <div className="logobox">
          <h2 className="logo">CCBA</h2>
        </div>
        <div className="items">
          <Link to="/"><p>Home</p></Link>
          <Link to="/contacto"><p>Contacto</p></Link>
          <Link to="/productos"><p>Productos</p></Link>
          <Link to="/cuidados"><p>Cuidados</p></Link>
          <Link to="/coleccion"><p>Colección</p></Link>
          
          <p>
           <Link to="/cart"> <img src={cart} className="cart-icon" alt="cart" /></Link>
          </p>
          {itemQty > 0 && (<p>{itemQty}</p>)}
          
        </div>
      </nav>
      <p className="bajada">Cactus de Colección Buenos Aires</p>
    </>
  )
}
export default Header
