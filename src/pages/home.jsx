import { Link } from 'react-router-dom'

import Navbar from '../components/Navbar'
import ProductCard from '../components/ProductCard'

function Home() {

  const products = [
    {
      name: 'Spanish Latte',
      category: 'COFFEE',
      description: 'Espresso, susu creamy, dan rasa manis yang lembut.',
      price: 'Rp23.000',
      image: '/images/products/Spanish Latte.jpg',
    },
    {
      name: 'Hazelnut Latte',
      category: 'COFFEE',
      description: 'Espresso dengan susu dan aroma hazelnut yang nikmat.',
      price: 'Rp22.000',
      image: '/images/products/Hazelnut Latte.jpg',
    },
    {
      name: 'Iced Americano',
      category: 'COFFEE',
      description: 'Espresso dingin yang fresh dengan rasa kopi yang kuat.',
      price: 'Rp17.000',
      image: '/images/products/Iced Americano.jpg',
    },
    {
      name: 'Matcha Latte',
      category: 'NON COFFEE',
      description: 'Matcha creamy dengan rasa earthy yang lembut.',
      price: 'Rp22.000',
      image: '/images/products/Matcha Latte.jpg',
    },
  ]

  return (
    <div className="home">

      <Navbar />

      {/* HERO */}
      <section className="hero">

        <div className="hero-content">

          <p className="hero-label">
            ☕ SPECIALTY COFFEE & GOOD MOMENTS
          </p>

          <h1>
            Start Your Day
            <br />
            With <span>Good Coffee.</span>
          </h1>

          <p className="hero-description">
            Nikmati kopi pilihan dan berbagai menu favorit
            dalam suasana cafe yang nyaman dan hangat.
          </p>

          <div className="hero-buttons">

            <Link to="/menu" className="primary-button">
              Explore Menu →
            </Link>

            <a href="#about" className="secondary-button">
              Our Story
            </a>

          </div>

          <div className="hero-info">

            <div>
              <strong>4.9</strong>
              <span>Customer Rating</span>
            </div>

            <div>
              <strong>8+</strong>
              <span>Menu Pilihan</span>
            </div>

            <div>
              <strong>100%</strong>
              <span>Fresh Coffee</span>
            </div>

          </div>

        </div>


        <div className="hero-image-wrapper">

          <div className="hero-decoration"></div>

          {/* FOTO HERO ASLI KAMU */}
          <img
            src="/images/hero/hero-coffee.jpg"
            alt="BREWORA Coffee"
            className="hero-image"
          />

          <div className="rating-card">

            <span className="rating-star">
              ⭐
            </span>

            <div>
              <strong>4.9 / 5.0</strong>
              <small>Customer Rating</small>
            </div>

          </div>

        </div>

      </section>


      {/* ABOUT */}
      <section className="about-section" id="about">

        <div className="about-image">

          {/* FOTO INTERIOR ASLI KAMU */}
          <img
            src="/images/cafe/cafe-interior.jpg"
            alt="BREWORA Cafe Interior"
          />

          <div className="about-floating-card">
            <strong>Since 2026</strong>
            <span>Good coffee, good moments.</span>
          </div>

        </div>


        <div className="about-content">

          <p className="section-label">
            OUR STORY
          </p>

          <h2>
            More Than Just
            <br />
            <span>A Cup of Coffee.</span>
          </h2>

          <p>
            BREWORA hadir untuk menemani berbagai
            momen sederhana dalam keseharianmu.
          </p>

          <p>
            Mulai dari ngobrol bersama teman,
            mengerjakan tugas, sampai menikmati
            kopi sendirian.
          </p>

          <Link to="/menu" className="text-button">
            Discover Our Menu →
          </Link>

        </div>

      </section>


      {/* BEST SELLER */}
      <section className="menu-section">

        <div className="section-heading">

          <div>

            <p className="section-label">
              OUR FAVORITES
            </p>

            <h2>
              Best Seller
            </h2>

            <p className="section-subtitle">
              Pilihan favorit untuk menemani hari-harimu.
            </p>

          </div>

          <Link to="/menu" className="see-all">
            Lihat Semua →
          </Link>

        </div>


        <div className="menu-grid">

          {products.map((product) => (
            <ProductCard
              key={product.name}
              product={product}
            />
          ))}

        </div>

      </section>


      {/* WHY BREWORA */}
      <section className="why-section">

        <div className="section-heading centered">

          <p className="section-label">
            WHY BREWORA?
          </p>

          <h2>
            Made For Your Moments
          </h2>

        </div>


        <div className="why-grid">

          <div className="why-card">

            <div className="why-icon">
              ☕
            </div>

            <h3>
              Quality Coffee
            </h3>

            <p>
              Menggunakan bahan berkualitas untuk
              menghasilkan rasa kopi yang nikmat.
            </p>

          </div>


          <div className="why-card">

            <div className="why-icon">
              ✨
            </div>

            <h3>
              Cozy Place
            </h3>

            <p>
              Tempat nyaman untuk ngobrol, belajar,
              bekerja, atau bersantai.
            </p>

          </div>


          <div className="why-card">

            <div className="why-icon">
              🤎
            </div>

            <h3>
              Good Moments
            </h3>

            <p>
              Secangkir kopi untuk menemani
              momen yang berkesan.
            </p>

          </div>

        </div>

      </section>


      {/* LOCATION */}
      <section className="cafe-section" id="location">

        <div className="cafe-content">

          <p className="section-label">
            VISIT BREWORA
          </p>

          <h2>
            Your Favorite Place
            <br />
            To <span>Slow Down.</span>
          </h2>

          <p>
            Datang dan nikmati secangkir kopi dalam
            suasana cafe yang nyaman untuk bekerja,
            ngobrol, belajar, atau sekadar bersantai.
          </p>


          <div className="cafe-details">

            <div>
              <span>📍</span>

              <div>
                <strong>Location</strong>
                <p>Salatiga, Jawa Tengah</p>
              </div>
            </div>


            <div>
              <span>🕐</span>

              <div>
                <strong>Opening Hours</strong>
                <p>08.00 - 22.00 WIB</p>
              </div>
            </div>

          </div>

          <Link to="/menu" className="primary-button">
            Order Now →
          </Link>

        </div>


        <div className="cafe-image">

          {/* FOTO EXTERIOR ASLI KAMU */}
          <img
            src="/images/cafe/cafe-exterior.jpg"
            alt="BREWORA Cafe Exterior"
          />

        </div>

      </section>


      {/* FOOTER */}
      <footer className="footer">

        <div className="footer-brand">

          <h3>
            ☕ BREW<span>ORA</span>
          </h3>

          <p>
            Good coffee, good moments.
          </p>

        </div>


        <div className="footer-links">

          <Link to="/">
            Home
          </Link>

          <a href="/#about">
            About
          </a>

          <Link to="/menu">
            Menu
          </Link>

          <a href="/#location">
            Location
          </a>

        </div>

        <p className="copyright">
          © 2026 BREWORA. All rights reserved.
        </p>

      </footer>

    </div>
  )
}

export default Home