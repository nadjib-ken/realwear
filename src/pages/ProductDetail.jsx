"use client"

import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import { useCart } from "../context/CartContext"
import { productsData } from "../data/Products"
import { ShoppingBag, Minus, Plus, Star, Eye, ShoppingCart } from "lucide-react"
import SizeSelector from "../components/SizeSelector"
import "../styles/ProductDetail.css"

const ProductDetail = () => {
  const { id } = useParams()
  const { addToCart } = useCart()
  const [product, setProduct] = useState(null)
  const [quantity, setQuantity] = useState(1)
  const [selectedSize, setSelectedSize] = useState("")
  const [activeTab, setActiveTab] = useState("description")
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const foundProduct = productsData.find((p) => p.id === Number.parseInt(id) || p.id === id)

    if (foundProduct) {
      const updatedProduct = {
        ...foundProduct,
        views: foundProduct.views + 1,
      }
      setProduct(updatedProduct)

      const productIndex = productsData.findIndex((p) => p.id === updatedProduct.id)
      if (productIndex !== -1) {
        productsData[productIndex] = updatedProduct
      }
    }

    setIsLoading(false)
  }, [id])

  const handleQuantityChange = (amount) => {
    const newQuantity = quantity + amount
    if (newQuantity >= 1) {
      setQuantity(newQuantity)
    }
  }

  const handleAddToCart = () => {
    if (product) {
      if (product.sizes && product.sizes.length > 0 && !selectedSize) {
        alert("Please select a size before adding to cart")
        return
      }

      addToCart({
        ...product,
        quantity,
        selectedSize: selectedSize || null,
      })
    }
  }

  const handleSizeChange = (size) => {
    setSelectedSize(size)
  }

  if (isLoading) {
    return <div className="loading">Loading...</div>
  }

  if (!product) {
    return <div className="not-found">Product not found</div>
  }

  const averageRating =
    product.reviews && product.reviews.length > 0
      ? product.reviews.reduce((sum, review) => sum + review.rating, 0) / product.reviews.length
      : 0

  const isNewArrival = product.views < 10

  return (
    <div className="product-detail-page">
      <div className="product-detail-container">
        <div className="product-image-container">
          {isNewArrival && <span className="new-badge">New Arrival</span>}
          <img src={product.image || "/placeholder.svg"} alt={product.name} className="product-detail-image" />
        </div>

        <div className="product-detail-info">
          <h1 className="product-detail-name">{product.name}</h1>

          <div className="product-detail-meta">
            <div className="product-detail-price">{product.price} DZD</div>
            <div className="product-detail-stats">
              <span className="views">
                <Eye size={16} /> {product.views} views
              </span>
              <span className="sold">{product.sold} sold</span>
              <span className="rating">
                <Star size={16} fill="currentColor" />
                {averageRating.toFixed(1)} ({product.reviews ? product.reviews.length : 0} reviews)
              </span>
            </div>
          </div>

          <div className="product-detail-description">
            <p>{product.description}</p>
          </div>

          {/* Size Selector */}
          {product.sizes && product.sizes.length > 0 && (
            <SizeSelector
              sizes={product.sizes}
              availableSizes={product.availableSizes}
              selectedSize={selectedSize}
              onSizeChange={handleSizeChange}
            />
          )}

          <div className="product-detail-actions">
            <div className="quantity-selector">
              <button className="quantity-btn" onClick={() => handleQuantityChange(-1)} disabled={quantity <= 1}>
                <Minus size={16} />
              </button>
              <span className="quantity">{quantity}</span>
              <button className="quantity-btn" onClick={() => handleQuantityChange(1)}>
                <Plus size={16} />
              </button>
            </div>

            <button className="add-to-cart-btn" onClick={handleAddToCart}>
              <ShoppingBag size={20} />
              Add to Cart
            </button>

            <button className="buy-now-btn">
              <ShoppingCart size={20} />
              Buy Now
            </button>
          </div>
        </div>
      </div>

      <div className="product-detail-tabs">
        <div className="tabs-header">
          <button
            className={`tab-btn ${activeTab === "description" ? "active" : ""}`}
            onClick={() => setActiveTab("description")}
          >
            Description
          </button>
          <button
            className={`tab-btn ${activeTab === "reviews" ? "active" : ""}`}
            onClick={() => setActiveTab("reviews")}
          >
            Reviews ({product.reviews ? product.reviews.length : 0})
          </button>
        </div>

        <div className="tabs-content">
          {activeTab === "description" && (
            <div className="description-tab">
              <h3>Product Details</h3>
              <p>{product.description}</p>
              <div className="product-features">
                <h4>Features:</h4>
                <ul>{product.features && product.features.map((feature, index) => <li key={index}>{feature}</li>)}</ul>
              </div>
            </div>
          )}

          {activeTab === "reviews" && (
            <div className="reviews-tab">
              <div className="reviews-summary">
                <div className="average-rating">
                  <h3>{averageRating.toFixed(1)}</h3>
                  <div className="stars">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={20} fill={i < Math.round(averageRating) ? "currentColor" : "none"} />
                    ))}
                  </div>
                  <p>Based on {product.reviews ? product.reviews.length : 0} reviews</p>
                </div>
              </div>

              <div className="reviews-list">
                {product.reviews && product.reviews.length > 0 ? (
                  product.reviews.map((review, index) => (
                    <div key={index} className="review-item">
                      <div className="review-header">
                        <div className="reviewer-name">{review.name}</div>
                        <div className="review-date">{review.date}</div>
                      </div>
                      <div className="review-rating">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} size={16} fill={i < review.rating ? "currentColor" : "none"} />
                        ))}
                      </div>
                      <div className="review-content">{review.comment}</div>
                    </div>
                  ))
                ) : (
                  <p className="no-reviews">No reviews yet. Be the first to review this product!</p>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default ProductDetail
