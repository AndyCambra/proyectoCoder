import { useState } from 'react'
import './index.css'

const Counter = (props) => {
  const uniqueStock = props.stock
  const uniqueName = props.name
  console.log(22, uniqueStock, uniqueName)

  const [number, setNumber] = useState(0)
  const agregar = () => {
    if (number < uniqueStock) {
      setNumber(number + 1)
      console.log(`Sumaste al carrito ${number + 1} ${uniqueName}`)
    }
  }
  const sacar = () => {
    if (number > 0) {
      setNumber(number - 1)
    }
  }

  let realTime = new Date()
  let instantTime =
    realTime.getDate() +
    '/' +
    realTime.getMonth() +
    '/' +
    realTime.getFullYear() +
    '  ' +
    realTime.getHours() +
    ':' +
    realTime.getMinutes() +
    ':' +
    realTime.getSeconds()
  console.log(instantTime)
  return (
    <>
      <section className="counter-date">
        <button onClick={agregar}>+</button>
        <p>{number}</p>
        <button onClick={sacar}>-</button>
      </section>
      <div className="data-date">
        <p>{instantTime}</p>
      </div>
    </>
  )
}
export default Counter
