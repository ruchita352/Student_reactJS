import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <div> 
        <div class="pt-5 pb-5 pl-8 flex items-center">
            <div>
                <img
                class="pl-20 pr-20 ml-20 mr-20 items-center w-97 h-11"
                src="https://themewagon.github.io/famms/images/logo.png"
                />
            </div> 
            <div class="pl-8 ml-20"> 
                <ul class="flex gap-10 font-bold">
                    <NavLink className={({ isActive }) => isActive ? "text-[#F7444E]" : "hover:text-[#F7444E]"} to="/">HOME</NavLink>
                    <NavLink className={({ isActive }) => isActive ? "text-[#F7444E]" : "hover:text-[#F7444E]"} to="/products">PRODUCTS</NavLink>
                    <NavLink className={({ isActive }) => isActive ? "text-[#F7444E]" : "hover:text-[#F7444E]"} to="/aboutus">ABOUT</NavLink>
                    <NavLink className={({ isActive }) => isActive ? "text-[#F7444E]" : "hover:text-[#F7444E]"} to="/contactus">CONTACT US</NavLink>
                </ul>
            </div>
            
            <div class="pl-10 flex gap-10">
             <NavLink to='/cart'> <i class="fa-solid fa-cart-shopping hover:text-[#F7444E]"></i></NavLink>
                <i class="fa-solid fa-magnifying-glass hover:text-[#F7444E]"></i>
            </div>
        </div>
    </div>
    
  )
}

export default Navbar
