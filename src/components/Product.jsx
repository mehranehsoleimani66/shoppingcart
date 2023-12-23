import React from "react";

const Product = ({ image, price, title }) => {
  return (
    <div className="max-w-sm  rounded  overflow-hidden shadow-lg mt-5 bg-gray-900">
      <img
        className="w-full object-cover"
        src={image}
        alt="Sunset in the mountains"
      />
      <div className="px-6 py-4 flex flex-col justify-between items-end gap-5">
        <div className="font-bold text-xl mb-2">{title}</div>
        <p className="text-white text-base">{price}</p>
        <div className="flex justify-center w-full items-center">
          <button className="  outline-1 border border-spacing-1 border-white inline-white bg-transparent rounded-md px-7 py-1 text-sm font-semibold text-white">
            سبد خرید
          </button>
        </div>
      </div>
    </div>
  );
};

export default Product;
