const ProductList = [
  {
    id: 1,
    title: "product",
    price: 99,
    image: "./public/profile.png"
  },
  {
    id: 2,
    title: "product",
    price: 99,
    image: "./public/profile.png"
  },
  {
    id: 3,
    title: "product",
    price: 99,
    image: "./public/profile.png"
  },
  {
    id: 4,
    title: "product",
    price: 99,
    image: "./public/profile.png"
  }
];

function getProductId() {
  let productData = ProductList.find((item) => item.id === id);
  return productData;
}
export { getProductId, ProductList };
