import { Link } from "react-router-dom"
import { Phone, Mail, MapPin, Truck, Clock, CreditCard, Instagram, Facebook, Twitter } from "lucide-react"
import "../styles/Footer.css"

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h3>REALWEAR</h3>
          <p>Your destination for authentic and modern Islamic clothing and accessories.</p>
          <div className="social-icons">
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <Instagram size={20} />
            </a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <Facebook size={20} />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <Twitter size={20} />
            </a>
          </div>
        </div>

        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/products">Products</Link>
            </li>
            <li>
              <Link to="/about">About Us</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
            <li>
              <Link to="/faq">FAQ</Link>
            </li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Contact Us</h3>
          <ul className="contact-info">
            <li>
              <Phone size={16} /> +213 123 456 789
            </li>
            <li>
              <Mail size={16} /> info@realwear.com
            </li>
            <li>
              <MapPin size={16} /> Algiers, Algeria
            </li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Delivery Information</h3>
          <ul className="delivery-info">
            <li>
              <Truck size={16} /> Free shipping on orders over 5000 DZD
            </li>
            <li>
              <Clock size={16} /> Delivery within 3-5 business days
            </li>
            <li>
              <CreditCard size={16} /> Secure payment options
            </li>
          </ul>
        </div>
      </div>

      <div className="decorative-pattern">
        <div className="pattern-row">
          {[...Array(20)].map((_, i) => (
            <span key={i} className={i % 2 === 0 ? "pattern-dot" : "pattern-dash"}></span>
          ))}
        </div>
      </div>

      <div className="footer-bottom">
        <div className="dots-decoration">
          {[...Array(20)].map((_, i) => (
            <span key={i} className="dot"></span>
          ))}
        </div>
        <p>&copy; {new Date().getFullYear()} REALWEAR. All rights reserved.</p>
        <div className="dots-decoration">
          {[...Array(20)].map((_, i) => (
            <span key={i} className="dot"></span>
          ))}
        </div>
      </div>
    </footer>
  )
}

export default Footer
