import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Header from "./components/Header"
import Footer from "./components/Footer"
import HomePage from "./pages/HomePage"
import ProductDetail from "./pages/ProductDetail"
import Cart from "./pages/Cart"
import { CartProvider } from "./context/CartContext"
import { ThemeProvider } from "./context/ThemeContext"
import "./styles/App.css"

const App = () => {
  return (
    <Router>
      <ThemeProvider>
        <CartProvider>
          <div className="app">
            <Header />
            <main className="main-content">
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/product/:id" element={<ProductDetail />} />
                <Route path="/cart" element={<Cart />} />
              </Routes>
            </main>
            <Footer />
          </div>
        </CartProvider>
      </ThemeProvider>
    </Router>
  )
}

export default App
