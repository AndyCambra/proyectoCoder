import { useState } from 'react'
import './index.css'

const Counter = ({ stock, onAdd }) => {
  const [number, setNumber] = useState(0)
  const agregar = () => {
    if (number !== stock) {
      setNumber(number + 1)
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
      <button
        className="add-button"
        disabled={number === 0}
        onClick={() => onAdd(number)}
      >
        Agregar al carrito
      </button>

      <div className="data-date">
        <p>{instantTime}</p>
      </div>
    </>
  )
}
export default Counter
