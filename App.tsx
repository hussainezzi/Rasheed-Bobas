import React from 'react';
import Header from './components/Header';
import HeroCarousel from './components/HeroCarousel';
import ProductCard from './components/ProductCard';
import Footer from './components/Footer';
import CartModal from './components/CartModal';
import { PRODUCTS, CAROUSEL_IMAGES } from './constants';
import { CartProvider } from './context/CartContext';

const App: React.FC = () => {
  return (
    <CartProvider>
      <div className="bg-brand-background min-h-screen font-sans text-brand-text">
        <Header />
        <CartModal />
        <main>
          <HeroCarousel images={CAROUSEL_IMAGES} />
          <section id="products" className="py-16 sm:py-24">
            <div className="container mx-auto px-6">
              <div className="text-center mb-12">
                <h2 className="text-4xl md:text-5xl font-extrabold text-brand-text">Our Flavors</h2>
                <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
                  Each pearl is a mini-explosion of fun. Find your favorite flavor!
                </p>
                <div className="mt-4 h-1 w-24 bg-brand-primary mx-auto rounded"></div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                {PRODUCTS.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </CartProvider>
  );
};

export default App;
