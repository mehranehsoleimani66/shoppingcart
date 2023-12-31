// import React from "react";
// import Navbar from "./components/Navbar";
// import { Routes, Route } from "react-router-dom";
// import Shop from "./pages/Shop";
// import { CartProvider } from "./context/CartContext";
// const App = () => {
//   return (
//     <div className=" flex flex-col justify-center items-center ">
//       <CartProvider>
//         <Navbar></Navbar>
//         <Routes>
//           <Route index element={<Shop />} />
//         </Routes>
//       </CartProvider>
//     </div>
//   );
// };

// export default App;
import { Routes, Route } from "react-router-dom";
import { CartProvider } from "./context/CartContext";
import Navbar from "./components/Navbar";
import Shop from "./pages/Shop";

function App() {
  return (
    <CartProvider>
      <Navbar></Navbar>
      <Routes>
        <Route index element={<Shop />} />
        {/* <Route path="/success" element={<Success />} /> */}
      </Routes>
    </CartProvider>
  );
}

export default App;
