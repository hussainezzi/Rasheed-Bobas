import React from 'react';
import { ShoppingCartIcon, BobaIcon } from './Icons';
import { useCart } from '../context/CartContext';

const Header: React.FC = () => {
  const { getCartCount, toggleCart } = useCart();
  const cartCount = getCartCount();

  const handleNavClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    const href = event.currentTarget.getAttribute('href');
    if (!href) return;

    if (href === '#') {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
      return;
    }
    
    const targetId = href.substring(1);
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  };

  return (
    <header className="bg-white/80 backdrop-blur-md shadow-md sticky top-0 z-40">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <BobaIcon className="w-10 h-10 text-brand-primary" />
          <span className="text-3xl font-bold text-brand-text" style={{ fontFamily: "'Pacifico', cursive" }}>
            Rasheed Bobbas
          </span>
        </div>
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#" onClick={handleNavClick} className="text-gray-600 hover:text-brand-primary transition duration-300 font-medium cursor-pointer">Home</a>
          <a href="#products" onClick={handleNavClick} className="text-gray-600 hover:text-brand-primary transition duration-300 font-medium cursor-pointer">Products</a>
          <a href="#footer" onClick={handleNavClick} className="text-gray-600 hover:text-brand-primary transition duration-300 font-medium cursor-pointer">About Us</a>
          <a href="#footer" onClick={handleNavClick} className="text-gray-600 hover:text-brand-primary transition duration-300 font-medium cursor-pointer">Contact</a>
        </nav>
        <div className="flex items-center">
            <button onClick={toggleCart} className="relative text-gray-600 hover:text-brand-primary transition duration-300">
                <ShoppingCartIcon className="w-7 h-7" />
                {cartCount > 0 && (
                    <span className="absolute -top-2 -right-2 bg-brand-secondary text-white text-xs rounded-full w-5 h-5 flex items-center justify-center animate-pulse">
                        {cartCount}
                    </span>
                )}
            </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
