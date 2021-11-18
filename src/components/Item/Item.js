import './index.css'
import Counter from '../Contador/Contador'
import { Link } from 'react-router-dom'

const Item = ({ item }) => {
  return (
    <div className="list-container">
      <article className="card">
        <div className="card-container">
          <div className="top">
            <p>{item.category}</p>
          </div>
          <h3>{item.name}</h3>
          <img className="img-products" src={item.img} alt={item.name}></img>
          <div className="info-card">
            <p>Familia: {item.family}</p>
            <p>Maceta: {item.potsize}</p>
            <p>Precio: ${item.precio}</p>
            <Link to={`/productos/${item.id}`}>
              <p>Ver más...</p>
            </Link>
          </div>
          <Counter />
        </div>
      </article>
    </div>
  )
}
export default Item
