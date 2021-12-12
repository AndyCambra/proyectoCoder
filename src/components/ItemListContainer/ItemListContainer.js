import { products } from '../../ArrayProducts'
import ItemList from '../ItemList/ItemList'
import './index.css'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getFirestore, collection, getDocs } from 'firebase/firestore'

function ItemListContainer() {
  const { category } = useParams()
  const [items, setItems] = useState([])

  useEffect(() => {
    const db = getFirestore()
    const ref = collection(db, 'products')

    getDocs(ref)
      .then((snapshot) => {
        const filteredItems = snapshot.docs.map((p) => p.data())
        return category
          ? setItems(filteredItems.filter((p) => p.category === category))
          : setItems(filteredItems)
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
