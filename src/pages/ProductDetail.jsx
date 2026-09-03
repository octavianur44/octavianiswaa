import { useParams, Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import products from "../data/products";

function ProductDetail() {
  const { productName } = useParams();

  // Mengubah nama produk dari URL
  const decodedName = decodeURIComponent(productName);

  // Mencari produk berdasarkan nama
  const product = products.find(
    (item) =>
      item.name.toLowerCase() === decodedName.toLowerCase()
  );

  // Jika produk tidak ditemukan
  if (!product) {
    return (
      <>
        <Navbar />

        <main className="empty-product-page">
          <div className="empty-product">
            <h2>Produk Tidak Ditemukan 😥</h2>

            <p>
              Maaf, produk yang kamu cari tidak tersedia.
            </p>

            <Link
              to="/produk"
              className="back-button"
            >
              ← Kembali ke Semua Produk
            </Link>
          </div>
        </main>
      </>
    );
  }

  // Menghitung harga setelah diskon
  const discountedPrice =
    product.discount > 0
      ? product.price -
        (product.price * product.discount) / 100
      : product.price;

  return (
    <>
      <Navbar />

      <main className="detail-page">
        <div className="detail-container">

          {/* GAMBAR PRODUK */}
          <div className="detail-image">
            {product.image ? (
              <img
                src={product.image}
                alt={product.name}
              />
            ) : (
              <div className="detail-placeholder">
                📦
              </div>
            )}
          </div>

          {/* INFORMASI PRODUK */}
          <div className="detail-info">

            <p className="detail-category">
              {product.category}
            </p>

            <h1>
              {product.name}
            </h1>

            <div className="detail-rating">
              ⭐ {product.rating} • {product.sold} terjual
            </div>

            {/* DISKON */}
            {product.discount > 0 && (
              <div className="detail-discount">
                Diskon {product.discount}%
              </div>
            )}

            {/* HARGA */}
            <p className="detail-price">
              Rp {discountedPrice.toLocaleString("id-ID")}
            </p>

            {product.discount > 0 && (
              <p className="detail-original-price">
                Rp {product.price.toLocaleString("id-ID")}
              </p>
            )}

            {/* TOKO */}
            <div className="detail-store">
              <h3>
                🏪 {product.store}
              </h3>

              <p>
                Produk berkualitas dari UMKM lokal
                Indonesia.
              </p>
            </div>

            {/* DESKRIPSI */}
            <div className="detail-description">
              <h3>
                Deskripsi Produk
              </h3>

              <p>
                {product.description}
              </p>
            </div>

            {/* TOMBOL */}
            <div className="detail-actions">

              <button className="add-cart">
                🛒 Tambah Keranjang
              </button>

              <button className="buy-now">
                Beli Sekarang
              </button>

            </div>

          </div>
        </div>
      </main>
    </>
  );
}

export default ProductDetail;