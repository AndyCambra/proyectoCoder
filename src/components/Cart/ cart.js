import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import { getFirestore, collection, addDoc } from 'firebase/firestore'
import { CartContext } from '../../Context/CartContext'
import Order from '../Order/Order'
import './cart.css'

const Cart = () => {
  const [form, getForm] = useState({ nombre: '', email: '' })
  const [goTicket, setGoTicket] = useState(false)
  const { cart, eliminar, totalCompra, deleteItem, getUser } = useContext(
    CartContext,
  )

  const llenarForm = (e) => {
    const { name, value } = e.target
    getForm({
      ...form,
      [name]: value,
    })
  }
  const realTime = new Date()

  const finalizar = () => {
    getUser(form)
    const db = getFirestore()
    const ref = collection(db, 'ticket')
    const newOrder = {
      buyer: form.email,
      items: cart,
      date: realTime,
      total: totalCompra,
    }
    console.log(newOrder)
    addDoc(ref, newOrder)
    setGoTicket(true)
    eliminar()
  }
  return (
    <>
      <>
        {!goTicket ? (
          <>
            <h3 className="cart-title">Detalle de tu compra</h3>
            {cart.map((item) => (
              <div key={item.id} className="result">
                <div className="result-det">
                  <p>
                    {item.cantidad} {item.name} $ {item.precio}
                  </p>
                  <button
                    className="B-eliminar"
                    onClick={() => deleteItem(item)}
                  >
                    Eliminar
                  </button>
                </div>
              </div>
            ))}
            {totalCompra > 0 ? (
              <>
                <p className="totalcompra">Total compra: $ {totalCompra}</p>
                <button className="B-vaciar" onClick={eliminar}>
                  Vaciar Carrito
                </button>
              </>
            ) : (
              <>
                <p>No agregaste nada todavía</p>
                <Link to="/productos">Productos</Link>
              </>
            )}
            <div />
            <div className="formuser">
              <form metod="POST" onSubmit={finalizar}>
                <p>Completá tus datos para finalizar la compra</p>
                <input
                  onChange={llenarForm}
                  type="name"
                  name="nombre"
                  placeholder="Nombre"
                />
                <input
                  onChange={llenarForm}
                  type="email"
                  name="email"
                  placeholder="Email"
                />
                <button
                  disabled={
                    cart?.length === 0 ||
                    form.nombre === '' ||
                    form.email === ''
                  }
                >
                  Finalizar Compra
                </button>
              </form>
            </div>
          </>
        ) : (
          <>
            <Order />
          </>
        )}
      </>
    </>
  )
}

export default Cart
