"use client"
import { Link } from "react-router-dom"
import { useCart } from "../context/CartContext"
import { Trash2, Plus, Minus, ShoppingBag } from "lucide-react"
import "../styles/Cart.css"

const Cart = () => {
  const { cartItems, removeFromCart, updateQuantity, clearCart } = useCart()

  const calculateSubtotal = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0)
  }

  const calculateShipping = () => {
    const subtotal = calculateSubtotal()
    return subtotal > 5000 ? 0 : 500 
  }

  const calculateTotal = () => {
    return calculateSubtotal() + calculateShipping()
  }

  if (cartItems.length === 0) {
    return (
      <div className="empty-cart">
        <ShoppingBag size={64} />
        <h2>Your cart is empty</h2>
        <p>Looks like you haven't added any items to your cart yet.</p>
        <Link to="/" className="continue-shopping-btn">
          Continue Shopping
        </Link>
      </div>
    )
  }

  return (
    <div className="cart-page">
      <h1 className="page-title">Shopping Cart</h1>

      <div className="cart-container">
        <div className="cart-items">
          <div className="cart-header">
            <span className="header-product">Product</span>
            <span className="header-price">Price</span>
            <span className="header-quantity">Quantity</span>
            <span className="header-total">Total</span>
            <span className="header-actions"></span>
          </div>

          {cartItems.map((item) => (
            <div key={`${item.id}-${item.selectedSize || "default"}`} className="cart-item">
              <div className="item-product">
                <img src={item.image || "/placeholder.svg"} alt={item.name} className="item-image" />
                <div className="item-details">
                  <h3 className="item-name">{item.name}</h3>
                  {item.selectedSize && <p className="item-size">Size: {item.selectedSize}</p>}
                </div>
              </div>

              <div className="item-price">{item.price} DZD</div>

              <div className="item-quantity">
                <button
                  className="quantity-btn"
                  onClick={() => updateQuantity(item.id, item.quantity - 1, item.selectedSize)}
                  disabled={item.quantity <= 1}
                >
                  <Minus size={16} />
                </button>
                <span className="quantity">{item.quantity}</span>
                <button
                  className="quantity-btn"
                  onClick={() => updateQuantity(item.id, item.quantity + 1, item.selectedSize)}
                >
                  <Plus size={16} />
                </button>
              </div>

              <div className="item-total">{item.price * item.quantity} DZD</div>

              <div className="item-actions">
                <button className="remove-btn" onClick={() => removeFromCart(item.id, item.selectedSize)}>
                  <Trash2 size={18} />
                </button>
              </div>
            </div>
          ))}

          <div className="cart-actions">
            <button className="clear-cart-btn" onClick={clearCart}>
              Clear Cart
            </button>
            <Link to="/" className="continue-shopping-btn">
              Continue Shopping
            </Link>
          </div>
        </div>

        <div className="cart-summary">
          <h2 className="summary-title">Order Summary</h2>

          <div className="summary-row">
            <span>Subtotal</span>
            <span>{calculateSubtotal()} DZD</span>
          </div>

          <div className="summary-row">
            <span>Shipping</span>
            <span>{calculateShipping() === 0 ? "Free" : `${calculateShipping()} DZD`}</span>
          </div>

          <div className="summary-total">
            <span>Total</span>
            <span>{calculateTotal()} DZD</span>
          </div>

          <button className="checkout-btn">Proceed to Checkout</button>

          <div className="payment-methods">
            <p>We accept:</p>
            <div className="payment-icons">
              {/* Payment method icons would go here */}
              <span className="payment-icon visa"></span>
              <span className="payment-icon mastercard"></span>
              <span className="payment-icon paypal"></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cart
