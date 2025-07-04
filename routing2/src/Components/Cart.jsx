import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart } from './slice/Cartslice'; 

const Cart = () => {
  const cartItems = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  console.log("Cart Items:", cartItems); 

  return (
    <div className="ml-48 mr-40 mt-16 grid grid-cols-3 gap-10">
      {cartItems.length === 0 ? (
        <p className="text-center col-span-3 text-xl font-semibold">Your cart is empty.</p>
      ) : (
        cartItems.map((item, index) => (
          <div
            key={index}
            className="group relative border-[9px] border-white shadow-lg pt-10 pb-5 px-5 h-[330px] w-[350px] bg-[#F7F8F9]"
          >
            <div className="flex justify-center">
              <img className="w-[180px] h-[180px] object-contain" src={item.image} alt={item.title} />
            </div>
            <p className="mt-2 font-bold text-lg text-center">
              {item.title}
              <span className="ml-20 font-normal">{item.price}</span>
            </p>
            <div className="absolute bottom-4 left-1/4">
              <button
                className="bg-red-600 text-white px-6 py-2 rounded-3xl hover:bg-white hover:text-red-600 border border-red-600"
                onClick={() => dispatch(removeFromCart(item))} 
              >
                Remove
              </button>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default Cart;
