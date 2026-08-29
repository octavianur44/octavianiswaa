function ProductCard({ product }) {
  return (
    <article className="menu-card">

      <div className="menu-image">

        <img
          src={product.image}
          alt={product.name}
        />

        <button
          className="favorite-button"
          aria-label={`Favorite ${product.name}`}
        >
          ♡
        </button>

      </div>

      <div className="menu-content">

        <span className="menu-category">
          {product.category}
        </span>

        <h3>
          {product.name}
        </h3>

        <p>
          {product.description}
        </p>

        <div className="menu-bottom">

          <strong>
            {product.price}
          </strong>

          <button
            className="add-button"
            aria-label={`Add ${product.name}`}
          >
            +
          </button>

        </div>

      </div>

    </article>
  )
}

export default ProductCard