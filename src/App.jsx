import React from "react";
import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import Shop from "./pages/Shop";
import { CartProvider } from "./context/CartContext";
const App = () => {
  return (
    <div className=" flex flex-col justify-center items-center ">
      <CartProvider>
        <Navbar></Navbar>
        <Routes>
          <Route index element={<Shop />} />
        </Routes>
      </CartProvider>
    </div>
  );
};

export default App;
