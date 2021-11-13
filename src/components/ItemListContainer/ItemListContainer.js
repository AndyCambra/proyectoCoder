import { products } from '../../ArrayProducts'
import ItemList from '../ItemList/ItemList'
import '../../ArrayProducts.js'
import './index.css'
import { useState } from 'react/cjs/react.development'

function ItemListContainer() {
  const [items, setItems] = useState([])
  const traerProducts = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(products)
    }, 2000)
  })
  traerProducts
    .then((res) => {
      setItems(res)
    })
    .catch((error) => {
      console.log(error)
    })
  return (
    <>
      <ItemList items={items} />
    </>
  )
}
export default ItemListContainer
