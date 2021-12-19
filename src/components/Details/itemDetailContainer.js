import ItemDetail from './itemDetail'
import { Fragment, useEffect, useState, useContext } from 'react'
import { useParams } from 'react-router-dom'
import { CartContext } from '../../Context/CartContext'
import { getFirestore, getDoc, doc } from 'firebase/firestore'

function ItemDetailContainer() {
  const { id } = useParams()
  const [item, setItem] = useState({})
  const [goCart, setGoCart] = useState(false)
  const [loading, setLoaging] = useState(true)
  const { addToCart } = useContext(CartContext)

  useEffect(() => {
    setLoaging(true)

    const db = getFirestore()
    const ref = doc(db, 'products', id)

    getDoc(ref)
      .then((snapshot) => {
        setItem({ id: snapshot.id, ...snapshot.data() })
        setLoaging(false)
      })

      .catch((error) => {
        console.log(error)
      })
  }, [id])

  const onAdd = (cantidad) => {
    //console.log({ ...item, cantidad })
    addToCart(item, cantidad)
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
