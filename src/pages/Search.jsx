import { useState } from "react";
import Navbar from "../components/Navbar";
import ProductCard from "../components/ProductCard";
import products from "../data/products";

function Search() {
  const [keyword, setKeyword] = useState("");

  // Filter produk berdasarkan nama, kategori, atau toko
  const searchResults = products.filter((product) => {
    const searchKeyword = keyword.toLowerCase();

    return (
      product.name.toLowerCase().includes(searchKeyword) ||
      product.category.toLowerCase().includes(searchKeyword) ||
      product.store.toLowerCase().includes(searchKeyword)
    );
  });

  return (
    <>
      <Navbar />

      <main className="search-page">
        {/* HEADER */}
        <section className="search-header">
          <p>CARI PRODUK</p>

          <h1>Temukan Produk Favoritmu</h1>

          <span>
            Cari berbagai produk menarik dari UMKM lokal
            Indonesia.
          </span>

          {/* INPUT SEARCH */}
          <div className="search-page-input">
            <span>🔍</span>

            <input
              type="text"
              placeholder="Cari produk, kategori, atau toko..."
              value={keyword}
              onChange={(e) => setKeyword(e.target.value)}
            />
          </div>
        </section>

        {/* HASIL PENCARIAN */}
        <section className="section">
          <div className="search-result-title">
            <div>
              <p className="section-label">
                HASIL PENCARIAN
              </p>

              <h2>
                {keyword
                  ? `Hasil untuk "${keyword}"`
                  : "Semua Produk"}
              </h2>
            </div>

            <span>
              {searchResults.length} Produk ditemukan
            </span>
          </div>

          {/* PRODUK DITEMUKAN */}
          {searchResults.length > 0 ? (
            <div className="product-grid">
              {searchResults.map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                />
              ))}
            </div>
          ) : (
            <div className="empty-product">
              <h2>Produk Tidak Ditemukan 😥</h2>

              <p>
                Coba gunakan kata kunci lain untuk mencari
                produk yang kamu inginkan.
              </p>
            </div>
          )}
        </section>
      </main>
    </>
  );
}

export default Search;