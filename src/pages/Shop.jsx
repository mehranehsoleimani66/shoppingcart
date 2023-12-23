import React from "react";
import Product from "../components/Product";
import { ProductList } from "../data/items";

const Shop = () => {
  return (
    <div className="grid grid-cols-4 gap-4 w-1/2 ">
      {ProductList.map((item) => (
        <div key={item.id}>
          <Product image={item.image} price={item.price} title={item.title} />
        </div>
      ))}
    </div>
  );
};

export default Shop;
