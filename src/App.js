import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Cart from "./Pages/Cart";
import AdminDashboard from "./Pages/AdminDashboard";
import AddProduct from "./Pages/AddProduct";
import Navbar from "./components/NavBar";
import { CartProvider } from "./context/CartContext";
import { ProductProvider } from "./context/ProductContext";

function App() {
  return (
    <BrowserRouter>
      <ProductProvider>
        <CartProvider>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/admin" element={<AdminDashboard />} />
            <Route path="/add-product" element={<AddProduct />} />
          </Routes>
        </CartProvider>
      </ProductProvider>
    </BrowserRouter>
  );
}

export default App;
