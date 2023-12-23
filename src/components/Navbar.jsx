import React from "react";
import { CgShoppingCart } from "react-icons/cg";
const Navbar = () => {
  return (
    <div className="w-1/2 flex justify-end bodrer border-b-2 p-2 border-gray-200 items-center mt-5 mr-auto ml-auto">
      <button className="text-white w-32 gap-3 hover:bg-gray-700 h-8 flex  items-center justify-center border p-3 rounded-md border-gray-400 outline-8">
        <CgShoppingCart /> سبد خرید
      </button>
    </div>
  );
};

export default Navbar;
