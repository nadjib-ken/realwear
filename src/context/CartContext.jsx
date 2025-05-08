"use client"

import { createContext, useContext, useState, useEffect } from "react"

const CartContext = createContext()

export const useCart = () => useContext(CartContext)

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([])
  const [isInitialized, setIsInitialized] = useState(false)

  
  useEffect(() => {
    const savedCart = localStorage.getItem("cart")
    if (savedCart) {
      try {
        setCartItems(JSON.parse(savedCart))
      } catch (error) {
        console.error("Error parsing cart from localStorage:", error)
        setCartItems([])
      }
    }
    setIsInitialized(true)
  }, [])

  
  useEffect(() => {
    
    if (isInitialized) {
      localStorage.setItem("cart", JSON.stringify(cartItems))
    }
  }, [cartItems, isInitialized])

  const addToCart = (product) => {
    setCartItems((prevItems) => {
      
      const existingItemIndex = prevItems.findIndex(
        (item) => item.id === product.id && item.selectedSize === product.selectedSize,
      )

      if (existingItemIndex !== -1) {
        
        return prevItems.map((item, index) =>
          index === existingItemIndex ? { ...item, quantity: item.quantity + (product.quantity || 1) } : item,
        )
      } else {
        
        return [...prevItems, { ...product, quantity: product.quantity || 1 }]
      }
    })
  }

  const removeFromCart = (productId, size) => {
    setCartItems((prevItems) => {
      if (size) {
        
        return prevItems.filter((item) => !(item.id === productId && item.selectedSize === size))
      } else {
        return prevItems.filter((item) => item.id !== productId)
      }
    })
  }

  const updateQuantity = (productId, newQuantity, size) => {
    if (newQuantity < 1) return

    setCartItems((prevItems) =>
      prevItems.map((item) => {
        if (size) {
          return item.id === productId && item.selectedSize === size ? { ...item, quantity: newQuantity } : item
        } else {
          return item.id === productId ? { ...item, quantity: newQuantity } : item
        }
      }),
    )
  }

  const clearCart = () => {
    setCartItems([])
  }

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}
