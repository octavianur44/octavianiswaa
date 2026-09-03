import { useParams, Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import ProductCard from "../components/ProductCard";
import products from "../data/products";

function Category() {
  const { categoryName } = useParams();

  // Mengubah nama kategori dari URL
  const decodedCategory = decodeURIComponent(categoryName);

  // Memfilter produk berdasarkan kategori
  const categoryProducts = products.filter(
    (product) =>
      product.category.toLowerCase() ===
      decodedCategory.toLowerCase()
  );

  return (
    <>
      <Navbar />

      <main className="category-page">
        {/* HEADER KATEGORI */}
        <section className="category-header">
          <p>JELAJAHI KATEGORI</p>

          <h1>{decodedCategory}</h1>

          <span>
            Temukan berbagai produk UMKM terbaik dalam kategori{" "}
            <strong>{decodedCategory}</strong>.
          </span>
        </section>

        {/* PRODUK BERDASARKAN KATEGORI */}
        <section className="section">
          <div className="category-product-title">
            <div>
              <p className="section-label">
                PRODUK KATEGORI
              </p>

              <h2>
                Produk {decodedCategory}
              </h2>
            </div>

            <span>
              {categoryProducts.length} Produk ditemukan
            </span>
          </div>

          {categoryProducts.length > 0 ? (
            <div className="product-grid">
              {categoryProducts.map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                />
              ))}
            </div>
          ) : (
            <div className="empty-product">
              <h2>Produk Belum Tersedia 😥</h2>

              <p>
                Saat ini belum ada produk dalam kategori{" "}
                <strong>{decodedCategory}</strong>.
              </p>

              <Link
                to="/produk"
                className="back-button"
              >
                Lihat Semua Produk →
              </Link>
            </div>
          )}
        </section>
      </main>
    </>
  );
}

export default Category;