import React, { useState } from 'react';
import { useCart } from '../context/CartContext';
import { CloseIcon, PlusIcon, MinusIcon, TrashIcon, ChevronLeftIcon } from './Icons';
import { WHATSAPP_NUMBER, STORE_NAME } from '../constants';

const CartModal: React.FC = () => {
  const { isCartOpen, toggleCart, cartItems, updateQuantity, removeFromCart, getCartTotal, clearCart } = useCart();
  const [checkoutStep, setCheckoutStep] = useState<'cart' | 'address'>('cart');
  const [addressInfo, setAddressInfo] = useState({ name: '', address: '', city: '', phone: '' });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setAddressInfo(prev => ({ ...prev, [name]: value }));
  };

  const handlePlaceOrder = (e: React.FormEvent) => {
    e.preventDefault();
    let message = `🎉 *New Order from ${STORE_NAME}!* 🎉\n\n`;
    message += "*Customer Details:*\n";
    message += `*Name:* ${addressInfo.name}\n`;
    message += `*Address:* ${addressInfo.address}, ${addressInfo.city}\n`;
    message += `*Phone:* ${addressInfo.phone}\n\n`;
    message += "----------\n\n";
    message += "*Order Summary:*\n";

    cartItems.forEach(item => {
      message += `- ${item.name} (x${item.quantity}) - $${(parseFloat(item.price) * item.quantity).toFixed(2)}\n`;
    });

    message += "\n----------\n";
    message += `*Total: $${getCartTotal()}*\n\n`;
    message += "Please confirm this order. Thank you!";

    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`, '_blank');
    
    // Reset after order
    setTimeout(() => {
        clearCart();
        toggleCart();
        setCheckoutStep('cart');
        setAddressInfo({ name: '', address: '', city: '', phone: '' });
    }, 1000);
  };
  
  if (!isCartOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/60 z-50 flex justify-end" onClick={toggleCart}>
      <div
        className="w-full max-w-md h-full bg-white shadow-2xl flex flex-col transform transition-transform duration-300 ease-in-out"
        style={{ transform: isCartOpen ? 'translateX(0)' : 'translateX(100%)' }}
        onClick={(e) => e.stopPropagation()}
      >
        {checkoutStep === 'cart' ? (
            <>
            <div className="flex justify-between items-center p-4 border-b">
                <h2 className="text-2xl font-bold text-brand-text">Your Cart</h2>
                <button onClick={toggleCart} className="text-gray-500 hover:text-gray-800"><CloseIcon /></button>
            </div>

            {cartItems.length === 0 ? (
                <div className="flex-grow flex flex-col items-center justify-center text-center p-4">
                    <img src="https://res.cloudinary.com/de0cllasz/image/upload/v1759756150/empty-cart_g0y8s5.svg" alt="Empty Cart" className="w-48 h-48 mb-4" />
                    <h3 className="text-xl font-semibold text-gray-700">Your cart is empty</h3>
                    <p className="text-gray-500 mt-2">Looks like you haven't added anything to your cart yet.</p>
                </div>
            ) : (
                <>
                <div className="flex-grow overflow-y-auto p-4 space-y-4">
                    {cartItems.map(item => (
                    <div key={item.id} className="flex items-center space-x-4">
                        <img src={item.imageUrl} alt={item.name} className="w-20 h-20 rounded-lg object-cover" />
                        <div className="flex-grow">
                        <h4 className="font-semibold text-brand-text">{item.name}</h4>
                        <p className="text-sm text-gray-500">${item.price}</p>
                        <div className="flex items-center space-x-2 mt-2">
                            <button onClick={() => updateQuantity(item.id, item.quantity - 1)} className="p-1 rounded-full border hover:bg-gray-100"><MinusIcon className="w-4 h-4" /></button>
                            <span className="w-8 text-center font-medium">{item.quantity}</span>
                            <button onClick={() => updateQuantity(item.id, item.quantity + 1)} className="p-1 rounded-full border hover:bg-gray-100"><PlusIcon className="w-4 h-4" /></button>
                        </div>
                        </div>
                        <div className="text-right">
                        <p className="font-bold text-brand-text">${(parseFloat(item.price) * item.quantity).toFixed(2)}</p>
                        <button onClick={() => removeFromCart(item.id)} className="text-red-500 hover:text-red-700 mt-2"><TrashIcon className="w-5 h-5" /></button>
                        </div>
                    </div>
                    ))}
                </div>

                <div className="p-4 border-t space-y-4">
                    <div className="flex justify-between font-bold text-xl">
                    <span>Subtotal</span>
                    <span>${getCartTotal()}</span>
                    </div>
                    <button onClick={() => setCheckoutStep('address')} className="w-full py-3 bg-brand-primary text-white font-bold rounded-lg shadow-md hover:bg-blue-600 transition-all duration-300">
                    Proceed to Checkout
                    </button>
                </div>
                </>
            )}
            </>
        ) : (
             <>
                <div className="flex items-center p-4 border-b">
                    <button onClick={() => setCheckoutStep('cart')} className="text-gray-500 hover:text-gray-800 mr-4"><ChevronLeftIcon /></button>
                    <h2 className="text-2xl font-bold text-brand-text">Delivery Details</h2>
                </div>
                <form id="checkout-form" onSubmit={handlePlaceOrder} className="flex-grow overflow-y-auto p-6 space-y-4">
                    <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700">Full Name</label>
                        <input type="text" id="name" name="name" value={addressInfo.name} onChange={handleInputChange} required className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-brand-primary focus:border-brand-primary sm:text-sm" />
                    </div>
                     <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone Number</label>
                        <input type="tel" id="phone" name="phone" value={addressInfo.phone} onChange={handleInputChange} required className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-brand-primary focus:border-brand-primary sm:text-sm" />
                    </div>
                    <div>
                        <label htmlFor="address" className="block text-sm font-medium text-gray-700">Street Address</label>
                        <input type="text" id="address" name="address" value={addressInfo.address} onChange={handleInputChange} required className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-brand-primary focus:border-brand-primary sm:text-sm" />
                    </div>
                    <div>
                        <label htmlFor="city" className="block text-sm font-medium text-gray-700">City & State</label>
                        <input type="text" id="city" name="city" value={addressInfo.city} onChange={handleInputChange} required className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-brand-primary focus:border-brand-primary sm:text-sm" />
                    </div>
                </form>
                 <div className="p-4 border-t">
                    <button type="submit" form="checkout-form" className="w-full py-3 bg-green-500 text-white font-bold rounded-lg shadow-md hover:bg-green-600 transition-all duration-300 flex items-center justify-center space-x-2">
                        <span>Place Order on WhatsApp</span>
                    </button>
                </div>
             </>
        )}
      </div>
    </div>
  );
};

export default CartModal;