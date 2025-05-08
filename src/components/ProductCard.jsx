"use client"
import { Link } from "react-router-dom"
import { useCart } from "../context/CartContext"
import { ShoppingBag, Star, Eye } from "lucide-react"
import "../styles/ProductCard.css"

const ProductCard = ({ product }) => {
  const { addToCart } = useCart()
  const { id, name, price, image, views, sold } = product

  const handleAddToCart = (e) => {
    e.preventDefault()
    e.stopPropagation()
    addToCart(product)
  }

  const averageRating =
    product.reviews && product.reviews.length > 0
      ? product.reviews.reduce((sum, review) => sum + review.rating, 0) / product.reviews.length
      : 0


  const isNewArrival = views < 10

  return (
    <div className="product-card">
      {isNewArrival && <span className="new-badge">New Arrival</span>}
      <Link to={`/product/${id}`} className="product-link">
        <div className="product-image">
          <img src={image || "/placeholder.svg"} alt={name} />
        </div>
        <div className="product-info">
          <h3 className="product-name">{name}</h3>
          <div className="product-meta">
            <div className="product-price">{price} DZD</div>
            <div className="product-stats">
              <span className="views">
                <Eye size={14} /> {views}
              </span>
              <span className="rating">
                <Star size={14} fill="currentColor" />
                {averageRating.toFixed(1)}
              </span>
            </div>
          </div>
          <button className="add-to-cart-btn" onClick={handleAddToCart}>
            <ShoppingBag size={16} />
            Add to Cart
          </button>
        </div>
      </Link>
    </div>
  )
}

export default ProductCard
