import React, { useState } from "react";
import { CgShoppingCart } from "react-icons/cg";

import Modals from "./modal/Modals";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";
const Navbar = () => {
  const [showModal, setShowModal] = useState(false);
  const cart = useContext(CartContext);
  return (
    <div className="w-3/4 flex justify-end bodrer border-b-2 p-2 border-gray-200 items-center mt-5 mr-auto ml-auto">
      <button
        onClick={() => setShowModal(true)}
        className="text-white w-32 gap-3 hover:bg-gray-700 h-8 flex  items-center justify-center border p-3 rounded-md border-gray-400 outline-8"
      >
        <CgShoppingCart /> سبد خرید
      </button>
      <Modals isvisible={showModal} onclose={() => setShowModal(false)} />
    </div>
  );
};

export default Navbar;
