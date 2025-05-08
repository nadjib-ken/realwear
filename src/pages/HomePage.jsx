"use client"

import { useState, useEffect } from "react"
import ProductCard from "../components/ProductCard"
import { productsData } from "../data/Products"
import { Search } from "lucide-react"
import "../styles/HomePage.css"

const HomePage = () => {
  const [searchQuery, setSearchQuery] = useState("")
  const [filteredProducts, setFilteredProducts] = useState(productsData)

  useEffect(() => {
    const params = new URLSearchParams(window.location.search)
    const searchFromUrl = params.get("search") || ""
    if (searchFromUrl !== searchQuery) {
      setSearchQuery(searchFromUrl)
    }
  }, [])

  useEffect(() => {
    const filtered = productsData.filter(
      (product) =>
        product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.category.toLowerCase().includes(searchQuery.toLowerCase()),
    )
    setFilteredProducts(filtered)

    const params = new URLSearchParams(window.location.search)
    if (searchQuery) {
      params.set("search", searchQuery)
    } else {
      params.delete("search")
    }
    const newUrl = window.location.pathname + (params.toString() ? "?" + params.toString() : "")
    window.history.replaceState(null, "", newUrl)
  }, [searchQuery])

  return (
    <div className="home-page">
      {/* Welcome Section */}
      <section className="welcome-section">
        <div className="welcome-container">
          <h1 className="welcome-title">Welcome to REALWEAR</h1>
          <p className="welcome-text">Your destination for authentic and modern Islamic clothing and accessories.</p>
          <div className="welcome-decoration">
            <div className="decorative-line"></div>
            <div className="decorative-symbol"></div>
            <div className="decorative-line"></div>
          </div>
          <p className="welcome-tagline">be real, realwear</p>
        </div>
      </section>

      {/* Categories Section */}
      <section className="categories-section">
        <h2 className="section-title">Shop by Category</h2>
        <div className="categories-container">
          <div className="category-link" onClick={() => setSearchQuery("traditional")}>
            <div className="category-card">
              <div className="category-image traditional"></div>
              <h3>Traditional</h3>
              <div className="category-icon">
                <div className="icon-circle"></div>
              </div>
            </div>
          </div>
          <div className="category-link" onClick={() => setSearchQuery("modern")}>
            <div className="category-card">
              <div className="category-image modern"></div>
              <h3>Modern</h3>
              <div className="category-icon">
                <div className="icon-circle"></div>
              </div>
            </div>
          </div>
          <div className="category-link" onClick={() => setSearchQuery("accessories")}>
            <div className="category-card">
              <div className="category-image accessories"></div>
              <h3>Accessories</h3>
              <div className="category-icon">
                <div className="icon-circle"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section with Search Bar */}
      <section className="products-section">
        <h2 className="section-title">Our Products</h2>

        {/* Search Bar */}
        <div className="product-search-container">
          <div className="product-search-bar">
            <Search size={20} className="search-icon" />
            <input
              type="text"
              placeholder="Search products..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            {searchQuery && (
              <button className="clear-search" onClick={() => setSearchQuery("")}>
                ×
              </button>
            )}
          </div>
        </div>

        {filteredProducts.length > 0 ? (
          <div className="products-grid">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className="no-products-found">
            <p>No products found matching "{searchQuery}"</p>
            <button className="reset-search" onClick={() => setSearchQuery("")}>
              Clear Search
            </button>
          </div>
        )}
      </section>

      {/* Decorative Elements */}
      <section className="decorative-elements">
        <div className="decorative-row">
          <div className="decorative-dash"></div>
          <div className="decorative-circle"></div>
          <div className="decorative-dash"></div>
          <div className="decorative-square"></div>
          <div className="decorative-dash"></div>
          <div className="decorative-circle"></div>
          <div className="decorative-dash"></div>
        </div>
      </section>

      {/* Feature Highlights */}
      <section className="features-section">
        <div className="feature">
          <div className="feature-icon quality"></div>
          <h3>Premium Quality</h3>
          <p>Crafted with the finest materials</p>
        </div>
        <div className="feature">
          <div className="feature-icon authentic"></div>
          <h3>Authentic Designs</h3>
          <p>Traditional patterns with modern touch</p>
        </div>
        <div className="feature">
          <div className="feature-icon shipping"></div>
          <h3>Fast Shipping</h3>
          <p>Delivery across Algeria</p>
        </div>
      </section>
    </div>
  )
}

export default HomePage
