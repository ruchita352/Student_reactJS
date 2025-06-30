import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Component/Home'
import Aboutus from './Component/Aboutus'
import Contactus from './Component/Contactus'
import Products from './Component/Products'
import Navbar from './Component/Navbar'
import Footer from './Component/Footer'

const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path="/aboutus" element={<Aboutus/>}/>
          <Route path="/contactus" element={<Contactus/>}/>
          <Route path="/products" element={<Products/>}/>
        </Routes>
        <Footer/>
              </BrowserRouter>

    </div>
  )
}

export default App
