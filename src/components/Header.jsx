"use client"

import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import { useCart } from "../context/CartContext"
import { useTheme } from "../context/ThemeContext"
import { ShoppingBag, Menu, X, Sun, Moon } from "lucide-react"
import "../styles/Header.css"

const Header = () => {
  const { cartItems } = useCart()
  const { darkMode, toggleTheme } = useTheme()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  const totalItems = cartItems.reduce((total, item) => total + item.quantity, 0)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <header className={`header ${scrolled ? "scrolled" : ""}`}>
      <div className="header-container">
        <div className="logo-container">
          <Link to="/" className="logo">
            <span className="logo-text">REALWEAR</span>
          </Link>
        </div>

        <div className="header-actions">
          <button className="theme-toggle" onClick={toggleTheme}>
            {darkMode ? <Sun size={20} /> : <Moon size={20} />}
          </button>

          <Link to="/cart" className="cart-icon">
            <ShoppingBag size={20} />
            {totalItems > 0 && <span className="cart-count">{totalItems}</span>}
          </Link>

          <button className="menu-toggle" onClick={toggleMenu}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      <nav className={`nav-menu ${isMenuOpen ? "open" : ""}`}>
        <ul>
          <li>
            <Link to="/" onClick={() => setIsMenuOpen(false)}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/category/traditional" onClick={() => setIsMenuOpen(false)}>
              Traditional
            </Link>
          </li>
          <li>
            <Link to="/category/modern" onClick={() => setIsMenuOpen(false)}>
              Modern
            </Link>
          </li>
          <li>
            <Link to="/category/accessories" onClick={() => setIsMenuOpen(false)}>
              Accessories
            </Link>
          </li>
          <li>
            <Link to="/about" onClick={() => setIsMenuOpen(false)}>
              About Us
            </Link>
          </li>
          <li>
            <Link to="/contact" onClick={() => setIsMenuOpen(false)}>
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
