import { useState } from 'react'
import './index.css'

const Counter = () => {
  const [number, setNumber] = useState(0)
  const agregar = () => {
    setNumber(number + 1)
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
    <section className="counter-date">
      <button onClick={agregar}>+</button>
      <p>{number}</p>
      <button onClick={sacar}>-</button>
      <p>{instantTime}</p>
    </section>
  )
}
export default Counter
