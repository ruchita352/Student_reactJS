import React from "react";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <div>
      <div class="flex gap-8 mt-10 bg-[#F8F8F8]">
        <div class="w-[350px] ml-52 mt-20 mb-20">
          <img
            class="w-97 h-9 mb-6"
            src="https://themewagon.github.io/famms/images/logo.png"
          />
          <p>
            <b>ADDRESS: </b> 28 White tower, Street Name New Delhi, INDIA{" "}
          </p>
          <br />
          <p>
            <b>TELEPHONE: </b> +91 9234 5678 99{" "}
          </p>
          <br />
          <p>
            <b>EMAIL: </b> FammsIndia@gmail.com
          </p>
        </div>
        <div class="mt-20 mb-20">
          <p class="mb-6 font-bold text-lg">MENU</p>
          <ul class="grid gap-2">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/aboutus">About</NavLink>
            <NavLink to="/products">Products</NavLink>
            <NavLink to="/contactus">Contact Us</NavLink>
            <NavLink to="/products">Search</NavLink>
          </ul>
        </div>
        <div class="m-20">
          <p class="mb-6 font-bold text-lg">ACCOUNT</p>
          <ul class="grid gap-2">
            <NavLink to="/">Account</NavLink>
            <NavLink to="/aboutus">Login</NavLink>
            <NavLink to="/products">Registration</NavLink>
            <NavLink to="/contactus">Shopping</NavLink>
            <NavLink to="/">Checkout</NavLink>
          </ul>
        </div>
        <div class="m-20">
          <p class="mb-6 font-bold text-lg">NEWSLETTER</p>
          <p>
            Subscribe to our newsletter and get <br /> update notifications.
          </p>

          <input
            type="text"
            class="p-3 mt-5 border bg-white-500"
            placeholder="Enter Your Mail"
          ></input>
          <button class="bg-[#F7444E] p-3 text-white">Subscribe</button>
        </div>
      </div>
      <div class="bg-[#222222] text-white p-4 ">
        <p class="justify-self-center">
          © 2022 All Rights Reserved <br />
          Distributed By <span class="text-[#F7444E]">ThemeWagon</span>
        </p>
      </div>
    </div>
  );
};

export default Footer;
