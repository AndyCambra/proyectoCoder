import ItemListContainer from '../../components/ItemListContainer/ItemListContainer'
import { Link } from 'react-router-dom'

const Productos = () => {
  return (
    <>
      <div className="catalogo_nav">
        <h1>Catalogo</h1>
        <nav>
          <ul>
            <Link to="/productos/cactus">
              <li>Cactus</li>
            </Link>
            <Link to="/productos/suculentas">
              <li>Suculentas</li>
            </Link>
          </ul>
        </nav>
      </div>
      <ItemListContainer />
    </>
  )
}
export default Productos
