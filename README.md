# Realwear - Traditional Ilamian Clothing Store

**Realwear** is a modern e-commerce web application built with **React**, designed to showcase and sell **traditional Ilamian clothing**. The goal of this project is to create a smooth and interactive online shopping experience tailored to a cultural product.

This app was developed as a final project for the **Web Application Development** course gived by mr hemili .
---

##  Project Objective

 - I've done all the objectives and more 

- Provide a clean and responsive UI for browsing traditional clothes.
- Track useful product metrics (views, sales, reviews).
- Implement a working shopping cart with persistence.
- Fulfill both the **core requirements** and **bonus features** of the course assignment.

---

## Tech Stack

- **React.js** (with create-react-app)
- **React Router** – for page navigation
- **React Context API** – for cart state management
- **CSS Flexbox/Grid** – for layout
- **LocalStorage** – to save cart data persistently

---

## Features

# Dark theme :

I've added the dark theme , because it was light to see , brightness high = blind eye

###  Core Features

- **Home Page**  
  Shows a grid of products with image, name, price (DZD), and Add to Cart button.

- **Product Details Page**  
  On clicking a product, user sees:
  - size guid and selector
  - Larger image
  - Name and price
  - Number of views
  - Sold count
  - Reviews with star rating and comments
  - Add to Cart

- **Cart Page**  
  Users can:
  - See all added products
  - Increase/decrease quantity
  - Remove items
  - See total price
  - Cart icon in navbar updates with item count

###  Bonus Features

- ** Search Bar**  
  Live filtering of products by name.

- ** Responsive Design**  
  Layout adapts to mobile, tablet, and desktop screens.

- ** "New Arrival" Badge**  
  Products with fewer than 10 views display a "New Arrival" label.

- ** Persistent Cart**  
  Cart contents are saved in `localStorage` and restored after refresh.

---realwear/
│
├── components/       # Reusable components (ItemCard, Navbar, etc.)
├── context/          # Cart context using React Context API
├── data/             # Product data in data.js
├── pages/            # Home, ProductDetail, Cart
├── styles/           # CSS styles
└── App.jsx           # Routing and layout


##  How to Run the Project

   cd ReaLWeaR
   npm install
   npm run dev


🧑‍💻 Author
Developed by KENDEL NADJIB 
As part of the Web Application Development course with mr hemili – 2025
