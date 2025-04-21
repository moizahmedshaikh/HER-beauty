import React from "react";
import { HiMagnifyingGlass } from "react-icons/hi2";

function Card({
  image,
  title,
  subtitle,
  originalPrice,
  discountedPrice,
  discount = "-25%",
}) {
  return (
    <div className="py-5 w-[90%]">
      <div className="group relative cursor-pointer transition-all flex flex-col justify-center items-center bg-white overflow-hidden">
        {discount && (
          <div className="bg-gray-100 absolute top-4 left-1 z-10">
            <p className="outline-pink-300 text-pink-400 outline text-[10px] px-2">
              {discount}
            </p>
          </div>
        )}

        <div className="absolute top-2 right-2 cursor-pointer opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
          <button className="bg-white p-3 rounded-full shadow-md hover:bg-gray-100">
            <HiMagnifyingGlass size={16} className="text-gray-600" />
          </button>
        </div>

        <img src={image} alt={title} className="w-full" />

        {/* Buy Now Button - center me on hover */}
        <div className="absolute inset-0 flex items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
          <button className="text-[13px] text-black px-4 py-2 w-full mx-2 bg-[#e8b5bd] rounded shadow font-semibold">
            Buy Now
          </button>
        </div>

        <div className="py-2 text-start">
          <h1 className="text-[#e85e73] font-semibold">{title}</h1>
          <h2 className="text-[12px]">{subtitle}</h2>
        </div>

        <div className="relative group bg-green-200 flex justify-around items-center w-full py-2 overflow-hidden z-0">
          {/* Black rising overlay */}
          <div className="absolute inset-0 bg-black translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out z-0" />

          {/* Content over black overlay */}
          <div className="relative z-10 flex justify-around items-center w-full px-4">
            <button className="text-[14px] tracking-wide font-semibold group-hover:text-white transition-colors duration-300">
              ADD TO BAG
            </button>
            <div className="flex gap-x-2 items-center">
              <p className="text-gray-500 group-hover:text-gray-200 text-[11px] line-through">
                {originalPrice}
              </p>
              <p className="text-[15px] text-red-500">{discountedPrice}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
