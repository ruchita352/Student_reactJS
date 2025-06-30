import React from 'react'
import { NavLink } from 'react-router-dom'



const Navbar = () => {
  return (
    <div>
<ul>
<NavLink to="/">Home</NavLink>
<NavLink to='/aboutus'>Aboutus</NavLink>
<NavLink to="/contactus">Contactus</NavLink>
<NavLink to="/products">Products</NavLink>
</ul>
    </div>
  )
}

export default Navbar
