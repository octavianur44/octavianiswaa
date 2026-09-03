import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import ProductCard from "../components/ProductCard";

function StoreDetail() {
  const { storeName } = useParams();

  const decodedStoreName =
    decodeURIComponent(storeName);

  const products = [
    {
      name: "Keripik Pisang Premium",
      category: "Makanan",
      price: 20000,
      discount: 10,
      rating: "4.9",
      sold: "120",
      store: "UMKM Nusantara",
      image: "",
    },
    {
      name: "Kopi Susu Gula Aren",
      category: "Minuman",
      price: 25000,
      discount: 20,
      rating: "4.8",
      sold: "98",
      store: "Kopi Lokal",
      image: "",
    },
    {
      name: "Tas Handmade Lokal",
      category: "Fashion",
      price: 150000,
      discount: 15,
      rating: "4.9",
      sold: "75",
      store: "Creative Store",
      image: "",
    },
    {
      name: "Gelang Handmade",
      category: "Aksesoris",
      price: 35000,
      discount: 0,
      rating: "4.7",
      sold: "63",
      store: "Local Handmade",
      image: "",
    },
    {
      name: "Brownies Coklat",
      category: "Makanan",
      price: 30000,
      discount: 5,
      rating: "4.8",
      sold: "80",
      store: "Dapur Lokal",
      image: "",
    },
    {
      name: "Body Lotion",
      category: "Kecantikan",
      price: 45000,
      discount: 10,
      rating: "4.8",
      sold: "50",
      store: "Beauty Lokal",
      image: "",
    },
  ];

  const storeProducts = products.filter(
    (product) =>
      product.store.toLowerCase() ===
      decodedStoreName.toLowerCase()
  );

  return (
    <>
      <Navbar />

      <main className="store-detail-page">
        <section className="store-detail-header">
          <div className="store-detail-icon">
            🏪
          </div>

          <div>
            <p>TOKO UMKM</p>

            <h1>{decodedStoreName}</h1>

            <span>
              Selamat datang di toko {decodedStoreName}.
              Temukan berbagai produk pilihan dari UMKM lokal.
            </span>
          </div>
        </section>

        <section className="section">
          <div className="category-product-title">
            <div>
              <h2>Produk dari {decodedStoreName}</h2>

              <span>
                {storeProducts.length} Produk ditemukan
              </span>
            </div>
          </div>

          {storeProducts.length > 0 ? (
            <div className="product-grid">
              {storeProducts.map((product) => (
                <ProductCard
                  key={product.name}
                  product={product}
                />
              ))}
            </div>
          ) : (
            <div className="empty-product">
              <h2>Produk Belum Tersedia 😥</h2>

              <p>
                Saat ini belum ada produk yang tersedia
                di toko ini.
              </p>
            </div>
          )}
        </section>
      </main>
    </>
  );
}

export default StoreDetail;