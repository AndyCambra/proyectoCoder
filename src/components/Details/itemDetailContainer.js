import { fakeObjet } from '../../fakeObjet'
import ItemDetail from './itemDetail'
import { Fragment, useEffect, useState } from 'react'

function ItemDetailContainer() {
  const [detail, setDetail] = useState({})
  useEffect(() => {
    const getProducts = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(fakeObjet)
      }, 2000)
    })
    getProducts
      .then((res) => {
        setDetail(res)
        console.log(res)
      })
      .catch((error) => {
        console.log(error)
      })
    console.log(11, detail)
  })
  return (
    <Fragment>
      <ItemDetail detail={detail} />
    </Fragment>
  )
}
export default ItemDetailContainer
