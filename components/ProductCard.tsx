import React from 'react';
import { Product } from '../types';
import { useCart } from '../context/CartContext';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { addToCart } = useCart();

  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 group flex flex-col">
      <div className="relative">
        <img className="w-full h-56 object-cover" src={product.imageUrl} alt={product.name} />
        <div className={`absolute top-0 right-0 m-4 px-3 py-1 text-sm font-semibold text-white ${product.color} rounded-full`}>
          Tsh {product.price.toLocaleString('en-US')}
        </div>
      </div>
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-bold text-brand-text mb-2">{product.name}</h3>
        <p className="text-gray-600 text-sm mb-4 flex-grow">{product.description}</p>
        <button 
          onClick={() => addToCart(product)}
          className={`w-full py-2 px-4 text-white font-semibold rounded-lg shadow-md hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-opacity-75 transition-all duration-300 ${product.color}`}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;