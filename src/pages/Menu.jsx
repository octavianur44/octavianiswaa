import { useState } from 'react'

import Navbar from '../components/Navbar'
import ProductCard from '../components/ProductCard'

function Menu() {

  const [activeCategory, setActiveCategory] = useState('ALL')

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
    {
      name: 'Red Velvet Latte',
      category: 'NON COFFEE',
      description: 'Minuman creamy dengan rasa red velvet yang lembut.',
      price: 'Rp21.000',
      image: '/images/products/Red Velvet Latte.jpg',
    },
    {
      name: 'Croissant',
      category: 'FOOD',
      description: 'Croissant renyah dengan tekstur buttery.',
      price: 'Rp18.000',
      image: '/images/products/Croissant.jpg',
    },
    {
      name: 'Lotus Biscoff Cheesecake',
      category: 'DESSERT',
      description: 'Cheesecake creamy dengan topping Lotus Biscoff.',
      price: 'Rp25.000',
      image: '/images/products/Lotus Biscoff Cheesecake.jpg',
    },
    {
      name: 'Cookies',
      category: 'DESSERT',
      description: 'Cookies renyah dan manis untuk teman kopi.',
      price: 'Rp15.000',
      image: '/images/products/Cookies.jpg',
    },
  ]

  const categories = [
    'ALL',
    'COFFEE',
    'NON COFFEE',
    'FOOD',
    'DESSERT',
  ]

  const filteredProducts =
    activeCategory === 'ALL'
      ? products
      : products.filter(
          (product) => product.category === activeCategory
        )

  return (
    <div className="menu-page">

      <Navbar />

      <section className="menu-page-header">

        <p className="section-label">
          BREWORA MENU
        </p>

        <h1>
          Find Your
          <span> Favorite.</span>
        </h1>

        <p>
          Pilih kopi, minuman, makanan, dan dessert
          favoritmu untuk menemani harimu.
        </p>

      </section>


      <section className="menu-page-content">

        <div className="category-list menu-filter">

          {categories.map((category) => (

            <button
              key={category}
              className={
                activeCategory === category
                  ? 'category active'
                  : 'category'
              }
              onClick={() => setActiveCategory(category)}
            >
              {category === 'ALL'
                ? 'All'
                : category === 'NON COFFEE'
                  ? 'Non Coffee'
                  : category.charAt(0) +
                    category.slice(1).toLowerCase()}
            </button>

          ))}

        </div>


        <div className="all-menu-grid">

          {filteredProducts.map((product) => (

            <ProductCard
              key={product.name}
              product={product}
            />

          ))}

        </div>

      </section>

    </div>
  )
}

export default Menu