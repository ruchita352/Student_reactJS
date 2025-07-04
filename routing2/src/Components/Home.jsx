import React, { useEffect, useState } from 'react';
import Hamper from './hamper';

const Home = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    setProducts(Hamper);
  }, []);

  return (
    <div>
      {/* Hero Section */}
      <div className="relative">
        <img
          className="w-full h-[700px] object-cover object-top"
          src="https://themewagon.github.io/famms/images/slider-bg.jpg"
          alt="Hero Banner"
        />
        <div className="w-1/3 absolute top-20 left-48">
          <h1 className="text-[#002C3E] font-semibold text-7xl">
            <span className="text-[#F7444E]">Sale 20% Off</span>
            <br />
            On Everything
          </h1>
          <p className="pt-6 text-lg">
            Explicabo esse amet tempora quibusdam laudantium, laborum eaque
            magnam fugiat hic? Esse dicta aliquid error repudiandae earum
            suscipit fugiat molestias, veniam, vel architecto veritatis delectus
            repellat modi impedit sequi.
          </p>
          <button className="w-48 h-12 bg-[#F7444E] font-bold text-white mt-10 border-none">
            Shop Now
          </button>
        </div>
      </div>

      {/* Why Shop Section */}
      <div className="mt-14 mb-10 text-center">
        <p className="font-playfair font-semibold text-6xl">Why Shop With Us</p>
        <div className="mt-4 mx-auto h-[5px] w-16 bg-[#F7444E]"></div>
      </div>
      <div className="flex justify-center mb-16 gap-10 flex-wrap">
        {/* Card 1 */}
        <div className="text-center rounded-lg h-[250px] w-[350px] bg-[#002C3E] text-white">
          <img
            className="mx-auto mt-8 mb-4 h-[60px] w-[60px] filter invert sepia hue-rotate-345 saturate-200"
            src="/shipped.png"
            alt="Fast Delivery"
          />
          <p className="font-bold text-2xl">Fast Delivery</p>
          <p className="mt-2 text-lg">within 2-3 days at your doorstep</p>
        </div>

        {/* Card 2 */}
        <div className="text-center rounded-lg h-[250px] w-[350px] bg-[#002C3E] text-white">
          <img
            className="mx-auto mt-8 mb-4 h-[60px] w-[60px] filter invert sepia hue-rotate-345 saturate-200"
            src="/free.png"
            alt="Free Shipping"
          />
          <p className="font-bold text-2xl">Free Shipping</p>
          <p className="mt-2 text-lg">free delivery for every product</p>
        </div>

        {/* Card 3 */}
        <div className="text-center rounded-lg h-[250px] w-[350px] bg-[#002C3E] text-white">
          <svg
            className="mx-auto mt-8 mb-4"
            xmlns="http://www.w3.org/2000/svg"
            height="60px"
            viewBox="0 -960 960 960"
            width="80px"
            fill="white"
          >
            <path d="m387-412 35-114-92-74h114l36-112 36 112h114l-93 74 35 114-92-71-93 71ZM240-40v-309q-38-42-59-96t-21-115q0-134 93-227t227-93q134 0 227 93t93 227q0 61-21 115t-59 96v309l-240-80-240 80Zm240-280q100 0 170-70t70-170q0-100-70-170t-170-70q-100 0-170 70t-70 170q0 100 70 170t170 70ZM320-159l160-41 160 41v-124q-35 20-75.5 31.5T480-240q-44 0-84.5-11.5T320-283v124Zm160-62Z" />
          </svg>
          <p className="font-bold text-2xl">Best Quality</p>
          <p className="mt-2 text-lg">100% verified best products</p>
        </div>
      </div>

      {/* New Arrivals */}
      <div className="flex bg-[#D4CED0] mb-10 relative">
        <img
          className="h-[500px] ml-48"
          src="https://ecommerce-site-eta.vercel.app/images/arrival-bg.png"
          alt="New Arrivals"
        />
        <div className="absolute right-[350px] top-[130px]">
          <p className="font-playfair text-[#002C3E] font-bold text-6xl">New Arrivals</p>
          <p className="mt-8 text-[18px] leading-7">
            DON'T BLINK!!<br />
            Shop our latest collection and grab your favorites<br />
            Cause every season calls for a whole new wardrobe
          </p>
          <button className="text-white bg-[#F7444E] mt-8 p-3 w-[180px]">
            Shop Now
          </button>
        </div>
      </div>

      {/* Product Listing */}
      <div className="mt-14 mb-10 text-center">
        <p className="font-playfair font-semibold text-6xl">
          Our <span className="text-[#F7444E]">products</span>
        </p>
        <div className="mt-4 mx-auto h-[5px] w-16 bg-[#F7444E]"></div>
      </div>

      <div className="ml-48 mr-40 mt-16 grid grid-cols-3 gap-10">
        {products.map((item, index) => (
          <div
            key={index}
            className="group relative border-[9px] border-white shadow-lg pt-10 pb-5 px-5 h-[330px] w-[350px] bg-[#F7F8F9]"
          >
            <div className="flex justify-center">
              <img
                className="w-[180px] h-[180px] object-contain"
                src={item.image}
                alt={item.title}
              />
            </div>
            <p className="mt-4 font-bold text-lg text-center">
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

      {/* View All Products Button */}
      <div className="mt-10 mb-16 text-center">
        <button className="w-[220px] text-lg bg-[#F7444E] text-white px-6 py-2 hover:bg-white hover:text-[#F7444E] border border-[#F7444E]">
          View All Products
        </button>
      </div>

      {/* Subscribe Section */}
      <div className="bg-[#D4CED0] h-[400px] p-20 text-center grid gap-6">
        <p className="font-playfair text-[#002C3E] font-semibold text-[40px]">
          Subscribe To Get Discount Offers
        </p>
        <input
          type="text"
          className="w-[700px] mx-auto rounded-full p-4 h-[60px]"
          placeholder="Enter Your Email"
        />
        <button className="w-[280px] mx-auto font-semibold rounded-full bg-[#F7444E] text-white py-2 hover:bg-white hover:text-[#F7444E] border border-[#F7444E]">
          SUBSCRIBE
        </button>
      </div>

      {/* Testimonials */}
      <div className="mt-14 mb-10 text-center">
        <p className="font-playfair font-semibold text-6xl">Customer's Testimonial</p>
        <div className="mt-4 mx-auto h-[5px] w-16 bg-[#F7444E]"></div>
      </div>
    </div>
  );
};

export default Home;
