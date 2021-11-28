import { products } from '../../ArrayProducts'
import ItemDetail from './itemDetail'
import { Fragment, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

function ItemDetailContainer() {
  const { id } = useParams()
  const [item, setItem] = useState({})
  const [goCart, setGoCart] = useState(false)
  const [loading, setLoaging] = useState(true)

  useEffect(() => {
    setLoaging(true)
    const getProduct = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(products)
      }, 1000)
    })
    getProduct
      .then((res) => {
        const itemFind = res.find((prod) => prod.id === parseInt(id))
        setItem(itemFind)
        setLoaging(false)
      })
      .catch((error) => {
        console.log(error)
      })
  }, [id])

  const onAdd = (cantidad) => {
    console.log({ ...item, cantidad })
    setGoCart(true)
  }

  return (
    <Fragment>
      {loading ? (
        <h2>Cargando...</h2>
      ) : (
        <ItemDetail item={item} onAdd={onAdd} goCart={goCart} />
      )}
    </Fragment>
  )
}
export default ItemDetailContainer
