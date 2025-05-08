import ring from '../assets/Elegant_Ring.png'
import Shirt from '../assets/Islamic_shirt.png'
import mat from '../assets/Prayer_Mat.png'
import Keffiyeh from '../assets/Keffiyeh.png'
import Cologne from '../assets/cologne.png'
import pants from '../assets/pants.png'
import thobe from '../assets/thobe.png'
import Cap from '../assets/Traditional_Taqiyah_Cap.png'

export const productsData = [
  {
    id: 1,
    name: "Traditional Arabic Keffiyeh",
    price: 2500,
    image: Keffiyeh,
    description:
      "Authentic traditional Arabic Keffiyeh made from premium cotton. Perfect for both traditional occasions and daily wear.",
    views: 120,
    sold: 45,
    isNew: false,
    features: [
      "100% premium cotton",
      "Hand-woven traditional pattern",
      "Breathable fabric",
      "Versatile styling options",
    ],
    reviews: [
      {
        name: "Ahmed K.",
        rating: 5,
        date: "2024-01-15",
        comment: "Excellent quality and authentic design. Very comfortable to wear.",
      },
      {
        name: "Mohammed S.",
        rating: 4,
        date: "2024-02-03",
        comment: "Great traditional piece. The fabric is soft and durable.",
      },
    ],
    category: "traditional",
    sizes: ["One Size"], 
    availableSizes: {
      "One Size": 50, 
    },
  },
  {
    id: 2,
    name: "Modern Islamic Thobe",
    price: 4500,
    image: thobe,
    description:
      "Contemporary Islamic thobe with modern design elements while maintaining traditional aesthetics. Perfect for both formal and casual occasions.",
    views: 85,
    sold: 32,
    isNew: false,
    features: [
      "Premium cotton-polyester blend",
      "Modern cut and design",
      "Comfortable for daily wear",
      "Easy care and maintenance",
    ],
    reviews: [
      {
        name: "Karim B.",
        rating: 5,
        date: "2024-01-20",
        comment: "Perfect fit and very comfortable. The design is modern yet respectful of tradition.",
      },
      {
        name: "Youssef A.",
        rating: 4,
        date: "2024-02-10",
        comment: "Great quality thobe. The fabric is breathable and perfect for warm weather.",
      },
    ],
    category: "modern",
    sizes: ["S", "M", "L", "XL", "XXL"],
    availableSizes: {
      S: 15,
      M: 25,
      L: 30,
      XL: 20,
      XXL: 10,
    },
  },
  {
    id: 3,
    name: "Casual Islamic Shirt",
    price: 3200,
    image: Shirt,
    description:
      "Stylish casual Islamic shirt designed for everyday wear. Combines comfort with traditional Islamic aesthetics.",
    views: 95,
    sold: 38,
    isNew: true,
    features: ["Lightweight cotton fabric", "Modern Islamic design", "Comfortable fit", "Suitable for daily wear"],
    reviews: [
      {
        name: "Omar F.",
        rating: 5,
        date: "2024-02-05",
        comment: "Very comfortable shirt with a great design. Perfect for casual occasions.",
      },
      {
        name: "Bilal M.",
        rating: 3,
        date: "2024-02-15",
        comment: "Good quality but runs a bit small. Consider ordering a size up.",
      },
    ],
    category: "modern",
    sizes: ["S", "M", "L", "XL", "XXL"],
    availableSizes: {
      S: 20,
      M: 35,
      L: 40,
      XL: 25,
      XXL: 15,
    },
  },
  {
    id: 4,
    name: "Traditional Taqiyah Cap",
    price: 1200,
    image: Cap,
    description: "Authentic Taqiyah cap crafted with attention to detail. Perfect for prayer and daily wear.",
    views: 75,
    sold: 50,
    isNew: false,
    features: ["Premium cotton material", "Traditional embroidery", "Comfortable fit", "Breathable fabric"],
    reviews: [
      {
        name: "Hamza R.",
        rating: 5,
        date: "2024-01-25",
        comment: "Excellent quality cap. The embroidery is beautiful and the fit is perfect.",
      },
      {
        name: "Samir T.",
        rating: 5,
        date: "2024-02-08",
        comment: "Very comfortable and well-made. Highly recommended.",
      },
    ],
    category: "traditional",
    sizes: ["S", "M", "L"],
    availableSizes: {
      S: 25,
      M: 40,
      L: 30,
    },
  },
  {
    id: 5,
    name: "Combat Pants",
    price: 3800,
    image: pants,
    description:
      "Durable and functional combat pants designed for outdoor activities and everyday wear. Features multiple pockets and reinforced stitching.",
    views: 65,
    sold: 28,
    isNew: true,
    features: [
      "Durable cotton-polyester blend",
      "Multiple cargo pockets",
      "Reinforced stitching",
      "Water-resistant finish",
    ],
    reviews: [
      {
        name: "Khalid J.",
        rating: 4,
        date: "2024-02-01",
        comment: "Great quality pants. Very durable and practical with all the pockets.",
      },
      {
        name: "Tariq N.",
        rating: 5,
        date: "2024-02-12",
        comment: "Excellent combat pants. The material is tough and the fit is comfortable.",
      },
    ],
    category: "modern",
    sizes: ["28", "30", "32", "34", "36", "38", "40"],
    availableSizes: {
      28: 10,
      30: 20,
      32: 30,
      34: 25,
      36: 20,
      38: 15,
      40: 10,
    },
  },
  {
    id: 6,
    name: "Elegant Ring",
    price: 1800,
    image: ring,
    description:
      "Beautifully crafted elegant ring with Islamic-inspired design. Perfect for special occasions or as a meaningful gift.",
    views: 110,
    sold: 42,
    isNew: false,
    features: ["High-quality metal alloy", "Islamic-inspired design", "Comfortable fit", "Tarnish-resistant finish"],
    reviews: [
      {
        name: "Nasser K.",
        rating: 5,
        date: "2024-01-18",
        comment: "Beautiful ring with excellent craftsmanship. The design is elegant and meaningful.",
      },
      {
        name: "Adel S.",
        rating: 4,
        date: "2024-02-05",
        comment: "Great quality ring. The design is beautiful and it's very comfortable to wear.",
      },
    ],
    category: "accessories",
    sizes: ["16mm", "18mm", "20mm", "22mm"],
    availableSizes: {
      "16mm": 15,
      "18mm": 25,
      "20mm": 20,
      "22mm": 10,
    },
  },
  {
    id: 7,
    name: "Prayer Mat",
    price: 2200,
    image: mat,
    description:
      "High-quality prayer mat with beautiful Islamic design. Soft, comfortable, and portable for daily prayers.",
    views: 130,
    sold: 60,
    isNew: false,
    features: [
      "Premium velvet material",
      "Traditional Islamic design",
      "Comfortable padding",
      "Portable and easy to fold",
    ],
    reviews: [
      {
        name: "Ibrahim A.",
        rating: 5,
        date: "2024-01-10",
        comment: "Excellent prayer mat. The material is soft and the design is beautiful.",
      },
      {
        name: "Mustafa H.",
        rating: 5,
        date: "2024-02-02",
        comment: "Very comfortable prayer mat. The padding is perfect and it's easy to carry.",
      },
    ],
    category: "accessories",
    
  },
  {
    id: 8,
    name: "Men's Cologne",
    price: 2800,
    image: Cologne,
    description:
      "Luxurious men's cologne with a captivating blend of oriental notes. Long-lasting fragrance perfect for daily wear or special occasions.",
    views: 90,
    sold: 35,
    isNew: true,
    features: ["Oriental fragrance notes", "Long-lasting scent", "Elegant glass bottle", "Alcohol-free formula"],
    reviews: [
      {
        name: "Faisal M.",
        rating: 5,
        date: "2024-01-22",
        comment: "Amazing fragrance that lasts all day. The scent is masculine and sophisticated.",
      },
      {
        name: "Ziad K.",
        rating: 4,
        date: "2024-02-07",
        comment: "Great cologne with a unique scent. Not too overpowering and lasts for hours.",
      },
    ],
    category: "accessories",
    
  },
]
