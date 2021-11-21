import './index.css'
import Counter from '../Contador/Contador'

const ItemDetail = ({ detail }) => {
  return (
    <div className="list-container">
      <article className="card-detail">
        <div className="card-container-d">
          <div className="top">
            <p>{detail.category}</p>
          </div>
          <h3>{detail.name}</h3>
          <img
            className="img-products-detail"
            src={detail.img}
            alt={detail.name}
          ></img>
          <div className="info-card">
            <p>Familia: {detail.family}</p>
            <p>Maceta: {detail.potsize}</p>
            <p>Precio: ${detail.precio}</p>
            <p>Cantidad disponible: {detail.stock}</p>
            <p className="long-text">Cuidados: {detail.cuidados}</p>
            <p className="long-text">Origen: {detail.origen}</p>
            <p className="long-text">Cultivo: {detail.cultivo}</p>
          </div>
          <Counter />
        </div>
      </article>
    </div>
  )
}

export default ItemDetail
