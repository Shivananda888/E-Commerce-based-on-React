import { v4 as uuid } from "uuid";

const products = [
  {
    id: uuid(),
    name: "Wireless Headphones",
    price: 2999,
    category: "Electronics",
    image: "https://via.placeholder.com/200",
    stock: 10
  },
  {
    id: uuid(),
    name: "Running Shoes",
    price: 1999,
    category: "Fashion",
    image: "https://via.placeholder.com/200",
    stock: 15
  }
];

export default products;
