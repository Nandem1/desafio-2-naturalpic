import { React, useEffect, useState } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import MyContext from '../src/MyContext'
import Home from './views/Home'
import Favorites from './views/Favorites'
import NavbarMain from './components/NavbarMain'

function App() {
  const sourceAPI = '../fotos.json'
  const [data, setData] = useState([])
  const [arrayFav, setArrayFav] = useState([])
  const globalContext = { data, arrayFav, setArrayFav }

  const getData = async () => {
    const res = await fetch(sourceAPI)
    const dataInitial = await res.json()
    setData(dataInitial.photos)
  }

  useEffect(() => {
    getData()
  },[])

  return (
    <div className="App">
      <MyContext.Provider value={globalContext}>
        <BrowserRouter>
          <NavbarMain />
          <Routes>
            <Route path='/desafio-2-naturalpic/' element={<Home />} />
            <Route path='/favorites' element={<Favorites />} />
          </Routes>
        </BrowserRouter>
      </MyContext.Provider>
    </div>
  )
}

export default App
