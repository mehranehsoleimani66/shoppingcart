import React from "react";
import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import Shop from "./pages/Shop";
const App = () => {
  return (
    <div className=" flex flex-col justify-center items-center ">
      <Navbar></Navbar>
      <Routes>
        <Route index element={<Shop />} />
      </Routes>
    </div>
  );
};

export default App;
