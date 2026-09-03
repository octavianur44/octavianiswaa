import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import ProductCard from "../components/ProductCard";
import products from "../data/products";

function Home() {
  const categories = [
    { icon: "🍔", name: "Makanan" },
    { icon: "🥤", name: "Minuman" },
    { icon: "👕", name: "Fashion" },
    { icon: "💍", name: "Aksesoris" },
    { icon: "💄", name: "Kecantikan" },
    { icon: "🎁", name: "Lainnya" },
  ];

  return (
    <>
      <Navbar />

      <main>
        {/* HERO */}
        <section className="hero-marketplace" id="beranda">
          <div className="hero-decoration decoration-one"></div>
          <div className="hero-decoration decoration-two"></div>

          <div className="hero-content">
            <div className="hero-badge">
              ✨ Marketplace UMKM Indonesia
            </div>

            <h1>
              Belanja Produk Lokal,
              <span> Dukung UMKM Indonesia.</span>
            </h1>

            <p>
              Temukan berbagai produk pilihan dari UMKM lokal.
              Mulai dari makanan, fashion, aksesoris, hingga
              berbagai produk unik lainnya.
            </p>

            <div className="hero-buttons">
              <a href="#produk" className="hero-button">
                Mulai Belanja →
              </a>

              <a href="#toko" className="hero-secondary">
                Jelajahi Toko
              </a>
            </div>

            <div className="hero-info">
              <div>
                <strong>100+</strong>
                <span>Produk UMKM</span>
              </div>

              <div>
                <strong>50+</strong>
                <span>Toko Lokal</span>
              </div>

              <div>
                <strong>4.9 ★</strong>
                <span>Rating Pelanggan</span>
              </div>
            </div>
          </div>

          <div className="hero-visual">
            <div className="visual-card card-one">
              <span>🏪</span>

              <div>
                <strong>Toko Lokal</strong>
                <small>Produk Pilihan</small>
              </div>
            </div>

            <div className="visual-main">
              <span className="shopping-bag">🛍️</span>
            </div>

            <div className="visual-card card-two">
              <span>📦</span>

              <div>
                <strong>Banyak Produk</strong>
                <small>Beragam Kategori</small>
              </div>
            </div>

            <div className="discount-bubble">
              <strong>DISKON</strong>
              <span>hingga 30%</span>
            </div>
          </div>
        </section>

        {/* KATEGORI */}
        <section className="section" id="kategori">
          <div className="section-title">
            <div>
              <p className="section-label">
                JELAJAHI PRODUK
              </p>

              <h2>Kategori Pilihan</h2>
            </div>
          </div>

          <div className="category-grid">
            {categories.map((category) => (
              <Link
                to={`/kategori/${encodeURIComponent(category.name)}`}
                className="category-card"
                key={category.name}
              >
                <div className="category-icon">
                  {category.icon}
                </div>

                <h3>{category.name}</h3>
              </Link>
            ))}
          </div>
        </section>

        {/* PRODUK */}
        <section
          className="section products-section"
          id="produk"
        >
          <div className="section-title">
            <div>
              <p className="section-label">
                PRODUK TERPOPULER
              </p>

              <h2>Produk Pilihan Untukmu</h2>
            </div>

            <Link to="/produk" className="see-all">
              Lihat Semua →
            </Link>
          </div>

          <div className="product-grid">
            {products.slice(0, 6).map((product) => (
              <ProductCard
                key={product.id}
                product={product}
              />
            ))}
          </div>
        </section>

        {/* PROMO */}
        <section className="promo-section" id="promo">
          <div className="promo-content">
            <div>
              <p>🔥 PROMO SPESIAL</p>

              <h2>
                Belanja Lebih Hemat,
                <br />
                Dukung UMKM Lokal!
              </h2>

              <span>
                Temukan berbagai produk pilihan dengan
                penawaran menarik dari UMKM Indonesia.
              </span>

              <a href="#produk" className="promo-button">
                Lihat Promo →
              </a>
            </div>

            <div className="promo-visual">
              🛒
            </div>
          </div>
        </section>

        {/* TOKO */}
        <section className="store-section" id="toko">
          <div className="section-title">
            <div>
              <p className="section-label">
                TOKO UMKM
              </p>

              <h2>Jelajahi Toko Pilihan</h2>
            </div>
          </div>

          <div className="store-grid">
            <div className="store-card">
              <div className="store-icon">🍪</div>

              <h3>UMKM Nusantara</h3>

              <p>
                Aneka makanan dan camilan lokal
                berkualitas.
              </p>

              <span>12 Produk</span>
            </div>

            <div className="store-card">
              <div className="store-icon">🎨</div>

              <h3>Creative Store</h3>

              <p>
                Produk kreatif dan unik buatan
                pengrajin lokal.
              </p>

              <span>25 Produk</span>
            </div>

            <div className="store-card">
              <div className="store-icon">✨</div>

              <h3>Local Handmade</h3>

              <p>
                Berbagai produk handmade pilihan.
              </p>

              <span>18 Produk</span>
            </div>
          </div>
        </section>

        {/* FOOTER */}
        <footer>
          <div className="footer-logo">
            UMKM<span>Mart</span>
          </div>

          <p>
            Marketplace sederhana untuk mendukung
            dan memperkenalkan produk UMKM Indonesia.
          </p>

          <div className="footer-bottom">
            © 2026 UMKMMart. All Rights Reserved.
          </div>
        </footer>
      </main>
    </>
  );
}

export default Home;