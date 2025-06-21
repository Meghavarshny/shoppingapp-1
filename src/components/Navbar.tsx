
import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart, Home, Package } from 'lucide-react';
import { useCart } from '@/contexts/CartContext';

const Navbar = () => {
  const { state } = useCart();
  const itemCount = state.items.reduce((total, item) => total + item.quantity, 0);

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link to="/" className="text-2xl font-bold text-blue-600 hover:text-blue-700">
              ShopHub
            </Link>
          </div>
          
          <div className="flex items-center space-x-8">
            <Link 
              to="/" 
              className="flex items-center text-gray-700 hover:text-blue-600 transition-colors"
            >
              <Home className="w-5 h-5 mr-1" />
              Home
            </Link>
            
            <Link 
              to="/products" 
              className="flex items-center text-gray-700 hover:text-blue-600 transition-colors"
            >
              <Package className="w-5 h-5 mr-1" />
              Products
            </Link>
            
            <Link 
              to="/cart" 
              className="flex items-center text-gray-700 hover:text-blue-600 transition-colors relative"
            >
              <ShoppingCart className="w-5 h-5 mr-1" />
              Cart
              {itemCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {itemCount}
                </span>
              )}
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
