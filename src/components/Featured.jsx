import React from "react";
import Card from "./Card";
import { products } from "../../Products";

function Featured() {
  return (
    <div className="h-auto bg-[#e9d2d6] w-full">
      <h1 className="text-white text-center py-8 text-3xl md:text-4xl lg:text-5xl font-semibold">
        BUILD YOUR ROUTINE
      </h1>
      <div className="px-4 md:px-8 lg:px-12">
        <div className="grid grid-cols-4 gap-4 bg-[#e8b5bd] py-4 rounded-md">
          {["Cleanse", "Tone", "Treat", "Hydrate"].map((step, index) => (
            <h1
              key={index}
              className="text-sm md:text-base text-center font-medium text-black"
            >
              {step}
            </h1>
          ))}
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2 py-10 place-items-center">
          {products.map((product, i) => (
            <Card
              key={i}
              image={product.image}
              title={product.title}
              subtitle={product.subtitle}
              originalPrice={product.originalPrice}
              discountedPrice={product.discountedPrice}
              discount={product.discount}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Featured;
