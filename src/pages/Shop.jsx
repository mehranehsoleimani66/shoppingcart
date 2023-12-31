import React from "react";

import { productList } from "../data/items";
import ProductItem from "../components/ProductItem";

const Shop = () => {
  console.log(productList);
  return (
    <div className="grid grid-cols-4 gap-4 w-3/4 ">
      {productList.map((item) => (
        <div key={item.id}>
          <ProductItem product={item} />
        </div>
      ))}
    </div>
  );
};

export default Shop;
