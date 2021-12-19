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
        const products = snapshot.docs.map((doc) => {
          return { id: doc.id, ...doc.data() }
        })
        console.log(products)
        const filteredItems = products.filter((p) => p.category === category)
        category === undefined ? setItems(products) : setItems(filteredItems)
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
