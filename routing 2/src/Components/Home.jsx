import { Scripts } from "react-router-dom";
import React, { useEffect, useState } from 'react';
import Hamper from './hamper'; 

const Home = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    setProducts(Hamper);
  }, []);
  return (
    <div>
      <div class="relative">
        <img
          class="w-full h-[700px] object-cover object-top"
          src="https://themewagon.github.io/famms/images/slider-bg.jpg"
        />

        <div class="w-1/3 absolute top-20 left-48">
          <h1 class="text-[#002C3E] font-semibold text-7xl">
            <span class="text-[#F7444E]"> Sale 20% Off </span>
            <br />
            On Everything
          </h1>
          <p class="pt-6 text-lg">
            Explicabo esse amet tempora quibusdam laudantium, laborum eaque
            magnam fugiat hic? Esse dicta aliquid error repudiandae earum
            suscipit fugiat molestias, veniam, vel architecto veritatis delectus
            repellat modi impedit sequi.
          </p>
          <button class="w-48 h-12 bg-[#F7444E] font-bold text-white mt-10 border-none">
            Shop Now
          </button>
        </div>
      </div>
      <div class="mt-14 mb-10 justify-self-center">
        <p class="font-playfair font-semibold text-6xl">Why Shop With Us</p>
        <div class="mt-4 ml-56 h-[5px] w-16 bg-[#F7444E]"></div>
      </div>
      <div class="flex ml-40 mb-16 gap-10">
        <div class="text-center rounded-lg h-[250px] w-[350px] bg-[#002C3E] text-white">
          <img
            class="justify-self-center mt-8 mb-4 h-[60px] w-[60px] filter invert sepia hue-rotate-345 saturate-200"
            src="/shipped.png"
          ></img>
          <p class="font-bold text-2xl">Fast Delivery</p>
          <p class="mt-2 text-lg">within 2-3 days at your doorstep</p>
        </div>
        <div class="text-center rounded-lg h-[250px] w-[350px] bg-[#002C3E] text-white">
          <img
            class="justify-self-center mt-8 mb-4 h-[60px] w-[60px] filter invert sepia hue-rotate-345 saturate-200"
            src="/free.png"
          ></img>
          <p class="font-bold text-2xl">Free Shiping</p>
          <p class="mt-2 text-lg">free delivery for every product</p>
        </div>
        <div class="text-center rounded-lg h-[250px] w-[350px] bg-[#002C3E] text-white">
          <svg
            class="justify-self-center mt-8 mb-4"
            xmlns="http://www.w3.org/2000/svg"
            height="60px"
            viewBox="0 -960 960 960"
            width="80px"
            fill="white"
          >
            <path d="m387-412 35-114-92-74h114l36-112 36 112h114l-93 74 35 114-92-71-93 71ZM240-40v-309q-38-42-59-96t-21-115q0-134 93-227t227-93q134 0 227 93t93 227q0 61-21 115t-59 96v309l-240-80-240 80Zm240-280q100 0 170-70t70-170q0-100-70-170t-170-70q-100 0-170 70t-70 170q0 100 70 170t170 70ZM320-159l160-41 160 41v-124q-35 20-75.5 31.5T480-240q-44 0-84.5-11.5T320-283v124Zm160-62Z" />
          </svg>
          <p class="font-bold text-2xl">Best Quality</p>
          <p class="mt-2 text-lg">100% verified best products</p>
        </div>
      </div>
      <div class="flex bg-[#D4CED0] mb-10">
        <img
          class="relative h-[500px] ml-48"
          src="https://ecommerce-site-eta.vercel.app/images/arrival-bg.png"
        ></img>
        <div class="absolute right-[350px] mt-32">
          <p class="font-playfair text-[#002C3E] font-bold text-6xl">
            New Arrivals
          </p>
          <p class="mt-8 text-[18px]">
            DON'T BLINK!!
            <br />
            Shop our latest collection and grab your favorites
            <br />
            Cause every season calls for a whole new wardrobe
          </p>
          <button class="text-white bg-[#F7444E] mt-8 p-3 w-[180px]">
            Shop Now
          </button>
        </div>
      </div>

      <div class="mt-14 mb-10 justify-self-center">
        <p class="font-playfair font-semibold text-6xl">
          Our <span class="text-[#F7444E]">products</span>
        </p>
        <div class="mt-4 ml-36 h-[5px] w-16 bg-[#F7444E]"></div>
      </div>
      <div className="ml-48 mr-40 mt-16 grid grid-cols-3 gap-10">
      {products.map((item, index) => (
        <div
          key={index}
          className="group relative border-[9px] border-white shadow-lg pt-10 pb-5 px-5 h-[330px] w-[350px] bg-[#F7F8F9] justify-items-center"
        >
          <div className="flex justify-center">
            <img
              className="w-[180px] h-[180px] object-contain"
              src={item.image}
            />
          </div>
          <br />
          <p className="mt-2 font-bold text-lg text-center">
            {item.title}
            <span className="ml-20 font-normal">{item.price}</span>
          </p>
          <div className="opacity-0 group-hover:opacity-100 absolute top-24 left-1/4 transition duration-300 grid justify-center gap-4 mt-5">
            <button className="bg-[#F7444E] text-white px-6 py-2 rounded-3xl hover:bg-white hover:text-[#F7444E] border border-[#F7444E]">
              Add to Cart
            </button>
            <button className="bg-black text-white px-8 py-2 rounded-3xl hover:bg-white hover:text-black border border-black">
              Buy Now
            </button>
          </div>
        </div>
      ))}
      </div>
      <div class="mt-10 mb-16 justify-self-center">
        <button class="w-[220px] text-lg bg-[#F7444E] text-white px-6 py-2 hover:bg-white hover:text-[#F7444E] border border-[#F7444E]">
          View All Products
        </button>
      </div>
      <div class="bg-[#D4CED0] h-[400px] p-20 justify-items-center grid gap-10">
        <p class="font-playfair text-[#002C3E] font-semibold  text-[40px]">
          Subscribe To Get Discount Offers
        </p>
        <input
          type="text"
          class="w-[700px] rounded-full p-4 h-[60px]"
          placeholder="Enter Your Mail"
        ></input>
        <button class="w-[280px] mt-4 font-semibold rounded-full  bg-[#F7444E] text-white py-2 hover:bg-white hover:text-[#F7444E] border border-[#F7444E]">
          SUBSCRIBE
        </button>
      </div>
      <div class="mt-14 mb-10 justify-self-center">
        <p class="font-playfair font-semibold text-6xl">
          Customer's Testimonial
        </p>
        <div class="mt-4 ml-72 h-[5px] w-16 bg-[#F7444E]"></div>
      </div>
    </div>
  );
};

export default Home;
