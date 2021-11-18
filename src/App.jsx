import { Fragment } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import ItemDetailContainer from './components/Details/itemDetailContainer'
import Home from  './pages/Home/home'
import Header from './components/header/header'
import Productos from './pages/Productos/productos'


const App = () => {
  return (
    <Fragment>
      
      <BrowserRouter>
      <Header />
      
    <Routes>
      <Route path='/home' element={<Home />} />
      <Route path='/productos' element={<Productos />} />
      <Route path='/productos/:productosId' element={<ItemDetailContainer />} />
    </Routes>
      
     
      </BrowserRouter>
      
    </Fragment>
  )
}

export default App
