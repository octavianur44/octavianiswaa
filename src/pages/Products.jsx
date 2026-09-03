import Navbar from "../components/Navbar";
import ProductCard from "../components/ProductCard";
import products from "../data/products";

function Products() {
  return (
    <>
      <Navbar />

      <main className="products-page">

        {/* HEADER */}
        <section className="products-header">
          <p>JELAJAHI PRODUK</p>

          <h1>Semua Produk UMKM</h1>

          <span>
            Temukan berbagai produk pilihan dari UMKM lokal
            Indonesia dan dukung produk lokal.
          </span>
        </section>

        {/* DAFTAR PRODUK */}
        <section className="section">
          <div className="all-products-title">

            <div>
              <p className="section-label">
                PRODUK TERSEDIA
              </p>

              <h2>
                Temukan Produk Favoritmu
              </h2>
            </div>

            <span>
              {products.length} Produk tersedia
            </span>

          </div>

          {/* JIKA PRODUK ADA */}
          {products.length > 0 ? (

            <div className="product-grid">
              {products.map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                />
              ))}
            </div>

          ) : (

            <div className="empty-product">
              <h2>Belum Ada Produk 😥</h2>

              <p>
                Saat ini belum ada produk yang tersedia.
              </p>
            </div>

          )}

        </section>
      </main>
    </>
  );
}

export default Products;