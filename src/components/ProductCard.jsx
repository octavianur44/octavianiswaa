import { Link } from "react-router-dom";

function ProductCard({ product }) {
  const discountedPrice =
    product.discount > 0
      ? product.price -
        (product.price * product.discount) / 100
      : product.price;

  return (
    <Link
      to={`/produk/${encodeURIComponent(product.name)}`}
      className="product-card"
    >
      <div className="product-image">
        {product.discount > 0 && (
          <span className="discount-label">
            -{product.discount}%
          </span>
        )}

        {product.image ? (
          <img
            src={product.image}
            alt={product.name}
          />
        ) : (
          <div className="product-placeholder">
            📦
          </div>
        )}
      </div>

      <div className="product-info">
        <p className="product-category">
          {product.category}
        </p>

        <h3>{product.name}</h3>

        {product.discount > 0 && (
          <p className="original-price">
            Rp {product.price.toLocaleString("id-ID")}
          </p>
        )}

        <p className="product-price">
          Rp {discountedPrice.toLocaleString("id-ID")}
        </p>

        <div className="product-bottom">
          <span>⭐ {product.rating}</span>
          <span>{product.sold} terjual</span>
        </div>

        <div className="product-store">
          🏪 {product.store}
        </div>
      </div>
    </Link>
  );
}

export default ProductCard;