import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/home";
import Category from "./pages/Category";
import ProductDetail from "./pages/ProductDetail";
import Search from "./pages/Search";

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
          path="/search"
          element={<Search />}
        />

      </Routes>
    </BrowserRouter>
  );
}

export default App;