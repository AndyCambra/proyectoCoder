import './index.css'
import Counter from '../Contador/Contador'
import { Link } from 'react-router-dom'

const ItemDetail = ({ item, onAdd, goCart }) => {
  return (
    <div className="list-containerd">
      <article className="card-detaild">
        <div className="topd">
          <p>{item.category}</p>
        </div>
        <h2 className="plantname">{item.name}</h2>
        <div className="card-container-d">
          <img
            className="img-products-detail"
            src={item.img}
            alt={item.name}
          ></img>
          <div className="info-card">
            <h3>Familia: {item.family}</h3>
            <p className="long-text">Cuidados: {item.cuidados}</p>
            <p className="long-text">Origen: {item.origen}</p>
            <p className="long-text">Cultivo: {item.cultivo}</p>
          </div>
        </div>
      </article>
      <div className="data-counter">
        <div className="data-plant">
          <h3>{item.name}</h3>
          <p>Maceta: {item.potsize}</p>
          <p>Precio: ${item.precio}</p>
          <p>Cantidad disponible: {item.stock}</p>
        </div>
        {goCart ? (
          <>
            <Link to="/Cart">Terminar compra</Link>
          </>
        ) : (
          <>
            <Counter stock={item.stock} onAdd={onAdd} />
          </>
        )}
      </div>
    </div>
  )
}

export default ItemDetail
