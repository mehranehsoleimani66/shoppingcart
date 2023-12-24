import { useContext } from "react";

import { CartContext } from "../context/CartContext";

function ProductItem({ product }) {
  const cart = useContext(CartContext);

  const productQuantity = cart.getProductQuantity(product.id);

  return (
    <div className="  rounded flex flex-col justify-center items-center overflow-hidden shadow-lg mt-5 bg-gray-900 px-3 py-3">
      <img className=" object-cover" src={product.image} alt="" />
      <div className="px-6 py-4 flex flex-col justify-between items-end gap-5">
        <div className="font-bold text-lg mb-2">{product.title}</div>
        <p className="text-white text-base  " dir="rtl">
          {product.price} تومان
        </p>
        {productQuantity > 0 ? (
          <>
            <form className=" justify-center flex gap-3  items-center w-full  ">
              <button
                onClick={() => cart.addItemToCart(product.id)}
                className="text-center border px-3 py-1 border-gray-100 text-white rounded-md"
              >
                +
              </button>
              <label>تعداد محصول :{productQuantity}</label>
              <button className=" text-center border px-3 py-1  border-gray-100  text-white rounded-md">
                -
              </button>
            </form>
          </>
        ) : (
          <>
            <div className="flex justify-center w-full items-center">
              <button
                onClick={() => cart.addItemToCart(product.id)}
                className="hover:bg-gray-700 active:bg-gray-700 focus:outline-none focus:ring focus:ring-gray-700 border border-spacing-1 border-white inline-white bg-transparent rounded-md px-7 py-1 text-sm font-semibold text-white"
              >
                افزودن به سبد خرید
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default ProductItem;
