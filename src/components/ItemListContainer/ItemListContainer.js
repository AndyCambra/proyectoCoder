import { products } from '../../ArrayProducts'
import ItemList from '../ItemList/ItemList'
import '../../ArrayProducts.js'
import './index.css'

import { useEffect, useState } from 'react/cjs/react.development'
import { useParams } from 'react-router-dom'

function ItemListContainer() {
  const { categoryId } = useParams()
  const [items, setItems] = useState([])

  useEffect(() => {
    const traerProducts = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(products)
      }, 1000)
    })

    traerProducts
      .then((res) => {
        const selectCategory = res.filter(
          (prod) => prod.categoryId === `${categoryId}`,
        )
        categoryId === undefined ? setItems(res) : setItems(selectCategory)
        console.log(setItems)
      })
      .catch((error) => {
        console.log(error)
      })
  }, [categoryId])

  return (
    <>
      <ItemList items={items} />
    </>
  )
}
export default ItemListContainer
