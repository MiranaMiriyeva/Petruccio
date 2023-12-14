import React from 'react'
import { Route, Routes } from 'react-router'
import Home from './Pages/Home'
import Menu from './Pages/Menu'
import Order from './Pages/Order-now'
import Aboutus from './Pages/About-us'
import Header from './components/Header'
import './App.css';
import Footer from './components/Footer'
import Favorites from './Pages/Favorites'

const App = () => {
  return (
    <>
    <Header />
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/menu' element={<Menu />} />
      <Route path='/favorites' element={<Favorites />} />
      <Route path='/order' element={<Order />} />
      <Route path='/aboutus' element={<Aboutus />} />
    </Routes>
    <Footer/>
   
  </>
  )
}

export default App