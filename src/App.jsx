import { Fragment } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import ItemDetailContainer from './components/Details/itemDetailContainer'
import Home from  './pages/Home/home'
import Header from './components/header/header'
import Productos from './pages/Productos/productos'
import Contacto from './pages/Contacto/contacto'
import Cuidados from './pages/Cuidados/Cuidados'
import Coleccion from './pages/Coleccion/Coleccion'
import Cart from './components/Cart/ cart'
import { CartProvider } from './Context/CartContext'



function App() {
  return (
    <Fragment>
    <CartProvider>
      <BrowserRouter>
     
      <Header />
      
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/productos' element={<Productos />} />
      <Route path='/productos/:category' element={<Productos />} />
      <Route path='/item/:id' element={<ItemDetailContainer />} />
      <Route path='/cart' element={<Cart />} />
    
      <Route path='/contacto' element={<Contacto />} />
      <Route path='/cuidados' element={<Cuidados />} />
      <Route path='/coleccion' element={<Coleccion />} />
     </Routes>
     
     
      </BrowserRouter>
      
      </CartProvider>
    </Fragment>
  )
}

export default App
