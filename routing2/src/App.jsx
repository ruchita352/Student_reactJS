import React from 'react'
import { BrowserRouter , Routes , Route } from 'react-router-dom'
import Navbar from './Components/Navbar'
import Home from './Components/Home'
import Aboutus from './Components/Aboutus'
import Products from './Components/Products'
import Contactus from './Components/Contactus'
import Footer from './Components/Footer'
import { Provider } from 'react-redux'
import { store } from './Components/slice/Store'
import Cart from './Components/Cart'

const App = () => {
  return (
    <div>
    <Provider store={store}>
      <BrowserRouter>
        <Navbar/>
          <Routes>
            <Route path="/" element={<Home/>} /> 
            <Route path="/aboutus" element={<Aboutus/>} /> 
            <Route path="/products" element={<Products/>} /> 
            <Route path="/contactus" element={<Contactus/>} /> 
            <Route path="/cart" element={<Cart/>}/>
          </Routes>
        <Footer/> 
      </BrowserRouter>
      </Provider>
    </div>
  )
}

export default App
