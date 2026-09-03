import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";

function Store() {
  const stores = [
    {
      name: "UMKM Nusantara",
      icon: "🍪",
      description: "Aneka makanan dan camilan lokal berkualitas.",
      products: 12,
    },
    {
      name: "Creative Store",
      icon: "🎨",
      description: "Produk kreatif dan unik buatan pengrajin lokal.",
      products: 25,
    },
    {
      name: "Local Handmade",
      icon: "✨",
      description: "Berbagai produk handmade pilihan untukmu.",
      products: 18,
    },
    {
      name: "Kopi Lokal",
      icon: "☕",
      description: "Berbagai minuman kopi khas dari UMKM lokal.",
      products: 15,
    },
    {
      name: "Dapur Lokal",
      icon: "🍰",
      description: "Makanan dan kue rumahan dengan cita rasa terbaik.",
      products: 20,
    },
    {
      name: "Beauty Lokal",
      icon: "💄",
      description: "Produk kecantikan dari brand lokal Indonesia.",
      products: 10,
    },
  ];

  return (
    <>
      <Navbar />

      <main className="store-page">
        <section className="store-page-header">
          <p>JELAJAHI TOKO</p>

          <h1>Toko UMKM Pilihan</h1>

          <span>
            Temukan berbagai toko UMKM lokal dengan produk
            berkualitas dari seluruh Indonesia.
          </span>
        </section>

        <section className="section">
          <div className="store-grid">
            {stores.map((store) => (
              <Link
                to={`/toko/${encodeURIComponent(store.name)}`}
                className="store-card"
                key={store.name}
              >
                <div className="store-icon">
                  {store.icon}
                </div>

                <h3>{store.name}</h3>

                <p>{store.description}</p>

                <span>{store.products} Produk</span>

                <div className="store-link">
                  Kunjungi Toko →
                </div>
              </Link>
            ))}
          </div>
        </section>
      </main>
    </>
  );
}

export default Store;