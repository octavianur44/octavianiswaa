import { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";

function Navbar() {
  const [keyword, setKeyword] = useState("");

  const navigate = useNavigate();
  const location = useLocation();

  const handleSearch = (e) => {
    e.preventDefault();

    const searchKeyword = keyword.trim();

    if (searchKeyword) {
      navigate(
        `/search?keyword=${encodeURIComponent(searchKeyword)}`
      );
    } else {
      navigate("/search");
    }

    setKeyword("");
  };

  const goToSection = (sectionId) => {
    // Jika sedang tidak berada di halaman beranda,
    // kembali ke beranda terlebih dahulu
    if (location.pathname !== "/") {
      navigate(`/#${sectionId}`);

      setTimeout(() => {
        document
          .getElementById(sectionId)
          ?.scrollIntoView({
            behavior: "smooth",
          });
      }, 100);

      return;
    }

    document
      .getElementById(sectionId)
      ?.scrollIntoView({
        behavior: "smooth",
      });
  };

  return (
    <>
      <div className="top-banner">
        ✨ Dukung Produk Lokal Indonesia • Temukan UMKM Favoritmu!
      </div>

      <nav className="navbar">
        {/* LOGO */}
        <Link to="/" className="logo">
          UMKM<span>Mart</span>
        </Link>

        {/* SEARCH */}
        <form
          className="search-container"
          onSubmit={handleSearch}
        >
          <span className="search-icon">
            🔍
          </span>

          <input
            type="text"
            placeholder="Cari produk favoritmu..."
            value={keyword}
            onChange={(e) => setKeyword(e.target.value)}
          />
        </form>

        {/* ACTION */}
        <div className="nav-actions">
          <Link
            to="/cart"
            className="icon-button"
            aria-label="Keranjang"
          >
            🛒
          </Link>

          <button className="login-btn">
            Masuk
          </button>
        </div>
      </nav>

      {/* MENU NAVIGASI */}
      <div className="nav-category">

        <button
          onClick={() => goToSection("beranda")}
          className="nav-link"
        >
          Beranda
        </button>

        <button
          onClick={() => goToSection("kategori")}
          className="nav-link"
        >
          Kategori
        </button>

        <Link
          to="/produk"
          className="nav-link"
        >
          Produk
        </Link>

        <button
          onClick={() => goToSection("toko")}
          className="nav-link"
        >
          Toko
        </button>

        <span className="nav-divider"></span>

        <button
          onClick={() => goToSection("promo")}
          className="promo-link"
        >
          🔥 Promo Hari Ini
        </button>

      </div>
    </>
  );
}

export default Navbar;