import React, { useEffect, useState } from 'react';
import Hamper from './hamper';
import { useSelector, useDispatch } from 'react-redux';
import { add } from './slice/Cartslice';

const Products = () => {
  const [products, setProducts] = useState([]);
  const cartItems = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const ADD = (item) => {
    const alreadyAdded = cartItems.find((i) => i.id === item.id);
    if (!alreadyAdded) {
      dispatch(add(item));
      console.log("Product added:", item); // ✅ This works
    }
  };
  
  

  useEffect(() => {
    setProducts(Hamper);
  }, []);

  return (
    <div>
      <div className="h-[140px] bg-[#F7444E]">
        <h2 className="pt-10 text-white text-5xl font-bold text-center">Product Grid</h2>
      </div>

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
            <p className="mt-2 font-bold text-lg text-center">
              {item.title}
              <span className="ml-20 font-normal">{item.price}</span>
            </p>
            <div className="opacity-0 group-hover:opacity-100 absolute top-24 left-1/4 transition duration-300 grid justify-center gap-4 mt-5">
              <button
                className="bg-[#F7444E] text-white px-6 py-2 rounded-3xl hover:bg-white hover:text-[#F7444E] border border-[#F7444E]"
                onClick={() => ADD(item)}
              >
                Add to Cart
              </button>
              <button className="bg-black text-white px-8 py-2 rounded-3xl hover:bg-white hover:text-black border border-black">
                Buy Now
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-10 mb-16 text-center">
        <button className="w-[230px] text-lg bg-[#F7444E] text-white px-6 py-2 hover:bg-white hover:text-[#F7444E] border border-[#F7444E]">
          View All Products
        </button>
      </div>
    </div>
  );
};

export default Products;
