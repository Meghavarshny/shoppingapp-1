# shoppingapp-1
React Shopping Cart Application

A modern, responsive e-commerce application built with React, TypeScript, and Tailwind CSS. Features a complete shopping cart system with product browsing, cart management, and checkout functionality.

## Features

- **Product Catalog**: Browse products fetched from the Fake Store API
- **Shopping Cart**: Add/remove items with quantity management
- **Responsive Design**: Works seamlessly on desktop and mobile devices
- **Dynamic Pricing**: Real-time cart total calculation with 10% discount
- **Modern UI**: Clean, professional interface with smooth animations
- **Route Management**: Proper navigation between pages using React Router

## Technologies Used

- **React 18** - Modern React with hooks and functional components
- **TypeScript** - Type-safe development
- **React Router DOM** - Client-side routing
- **Tailwind CSS** - Utility-first CSS framework
- **Context API** - Global state management for cart functionality
- **Fake Store API** - Product data source
- **Lucide React** - Beautiful icons
- 
## Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── Navbar.tsx      # Navigation component
│   ├── ProductCard.tsx # Individual product display
│   └── LoadingSpinner.tsx
├── contexts/           # React Context providers
│   └── CartContext.tsx # Shopping cart state management
├── pages/             # Main application pages
│   ├── Index.tsx      # Homepage
│   ├── Products.tsx   # Product listing page
│   └── Cart.tsx       # Shopping cart page
└── App.tsx           # Main application component

## Key Features Explained

### Shopping Cart Management
- Add products to cart with a single click
- Remove products from cart
- Adjust quantity using increment/decrement buttons
- Automatic price calculation per item and total
- 10% discount applied to final total

### Product Display
- Responsive grid layout for product cards
- Product images, titles, descriptions, and ratings
- Real-time cart status (Add to Cart vs Remove from Cart)
- Star ratings and review counts

### User Experience
- Loading states for API calls
- Empty cart messaging
- Smooth hover effects and transitions
- Mobile-responsive navigation
- Professional color scheme and typography

## API Integration

The application uses the [Fake Store API](https://fakestoreapi.com/) to fetch product data:
- Endpoint: `https://fakestoreapi.com/products`
- Returns product information including images, prices, descriptions, and ratings
