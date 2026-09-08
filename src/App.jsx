import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/home";
import Category from "./pages/Category";
import ProductDetail from "./pages/ProductDetail";
import Products from "./pages/Products";
import Search from "./pages/Search";
import Cart from "./pages/Cart";
import Order from "./pages/Order";
import Payment from "./pages/Payment";

import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route
          path="/"
          element={<Home />}
        />

        <Route
          path="/kategori/:categoryName"
          element={<Category />}
        />

        <Route
          path="/produk/:productName"
          element={<ProductDetail />}
        />

        <Route
           path="/produk"
            element={<Products />}
        />

        <Route
          path="/search"
          element={<Search />}
        />

        {/* Halaman Cart */}
        <Route
          path="/cart"
          element={<Cart />}
        />
         
        <Route
         path="/order" 
         element={<Order />}
          />
          <Route 
          path="/payment"
          element={<Payment />}
           />

      </Routes>
    </BrowserRouter>
  );
}

export default App;