import './index.css'

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
        </div>
      </nav>
      <p className="bajada">Cactus de Colección Buenos Aires</p>
    </>
  )
}
export default Header
