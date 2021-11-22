import { products } from '../../ArrayProducts'
import ItemList from '../ItemList/ItemList'
import './index.css'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

function ItemListContainer() {
  const { category } = useParams()
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
          (prod) => prod.category === `${category}`,
        )
        category === undefined ? setItems(res) : setItems(selectCategory)
        console.log(setItems)
      })
      .catch((error) => {
        console.log(error)
      })
  }, [category])

  return (
    <>
      <ItemList items={items} />
    </>
  )
}
export default ItemListContainer
