import React from "react";

const Aboutus = () => {
  return (
    <div>
      <div class="h-[140px] bg-[#F7444E]">
        <h2 class="pt-10 text-white text-5xl font-bold justify-self-center">
          About Us
        </h2>
      </div>
      <div class="mt-14 mb-10 justify-self-center">
        <p class="font-playfair font-semibold text-6xl">Why Shop With Us</p>
        <div class="mt-4 ml-56 h-[5px] w-16 bg-[#F7444E]"></div>
      </div>
      <div class="flex ml-40  mb-20 gap-10">
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
    </div>
  );
};

export default Aboutus;
