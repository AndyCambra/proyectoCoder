import { products } from '../../ArrayProducts'
import ItemDetail from './itemDetail'
import { Fragment, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

function ItemDetailContainer() {
  const { id } = useParams()
  const [item, setItem] = useState({})

  useEffect(() => {
    const getProduct = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(products)
      }, 1000)
      console.log(products)
    })
    getProduct
      .then((res) => {
        const itemFind = res.find((prod) => prod.id === parseInt(id))

        setItem(itemFind)
      })
      .catch((error) => {
        console.log(error)
      })
  }, [id])

  return (
    <Fragment>
      <ItemDetail item={item} />
    </Fragment>
  )
}
export default ItemDetailContainer
