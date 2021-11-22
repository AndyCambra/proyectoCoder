import './index.css'
import Counter from '../Contador/Contador'

const ItemDetail = ({ item }) => {
  console.log(111, item)
  return (
    <div className="list-container">
      <article className="card-detail">
        <div className="card-container-d">
          <div className="top">
            <p>{item.category}</p>
          </div>
          <h3>{item.name}</h3>
          <img
            className="img-products-detail"
            src={item.img}
            alt={item.name}
          ></img>
          <div className="info-card">
            <p>Familia: {item.family}</p>
            <p>Maceta: {item.potsize}</p>
            <p>Precio: ${item.precio}</p>
            <p>Cantidad disponible: {item.stock}</p>
            <p className="long-text">Cuidados: {item.cuidados}</p>
            <p className="long-text">Origen: {item.origen}</p>
            <p className="long-text">Cultivo: {item.cultivo}</p>
          </div>
          <Counter />
        </div>
      </article>
    </div>
  )
}

export default ItemDetail
