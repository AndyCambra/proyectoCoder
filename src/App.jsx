import { Fragment } from 'react'
import './App.css'
import ItemDetailContainer from './components/Details/itemDetailContainer'

import Header from './components/header/header'
import Landing from './components/Landing/landing'

const App = () => {
  return (
    <Fragment>
      <Header />
      <Landing />
      <ItemDetailContainer />
    </Fragment>
  )
}

export default App
