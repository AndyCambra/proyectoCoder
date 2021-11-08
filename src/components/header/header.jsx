import './index.css'
import cart from '../../iconos/cart-plus-solid.svg'

const Header = () => {
  return (
    <>
      <nav className="navBar">
        <div className="logobox">
          <h2 className="logo">CCBA</h2>
        </div>
        <div className="items">
          <p>Home</p>
          <p>Contacto</p>
          <p>Productos</p>
          <p>Cuidados</p>
          <p>Colección</p>
          <p>
            <img src={cart} className="cart-icon" alt="cart" />
          </p>
        </div>
      </nav>
      <p className="bajada">Cactus de Colección Buenos Aires</p>
    </>
  )
}
export default Header
