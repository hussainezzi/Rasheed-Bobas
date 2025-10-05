import React from 'react';
import { BobaIcon } from './Icons';

const Footer: React.FC = () => {
  return (
    <footer id="footer" className="bg-gray-800 text-white mt-16">
      <div className="container mx-auto px-6 py-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
          <div>
            <div className="flex items-center justify-center md:justify-start space-x-2 mb-4">
                <BobaIcon className="w-8 h-8 text-brand-primary" />
                <span className="text-2xl font-bold" style={{ fontFamily: "'Pacifico', cursive" }}>Rasheed Bobbas</span>
            </div>
            <p className="text-gray-400">Your daily dose of deliciousness. Premium popping boba delivered to you.</p>
          </div>
          <div>
            <h4 className="font-bold text-lg mb-4">Quick Links</h4>
            <ul>
              <li className="mb-2"><a href="#" className="text-gray-400 hover:text-white transition-colors">Home</a></li>
              <li className="mb-2"><a href="#products" className="text-gray-400 hover:text-white transition-colors">Products</a></li>
              <li className="mb-2"><a href="#footer" className="text-gray-400 hover:text-white transition-colors">About Us</a></li>
              <li className="mb-2"><a href="#" className="text-gray-400 hover:text-white transition-colors">FAQ</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-lg mb-4">Follow Us</h4>
            <div className="flex justify-center md:justify-start space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" /></svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.024.06 1.378.06 3.808s-.012 2.784-.06 3.808c-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.024.048-1.378.06-3.808.06s-2.784-.013-3.808-.06c-1.064-.049-1.791.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.048-1.024-.06-1.378-.06-3.808s.012-2.784.06-3.808c.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 013.45 2.525c.636-.247 1.363-.416 2.427-.465C7.215 2.012 7.57 2 9.685 2h2.63zM12 9.75a2.25 2.25 0 100 4.5 2.25 2.25 0 000-4.5zm0-2.25a4.5 4.5 0 110 9 4.5 4.5 0 010-9zM16.5 7.5a1.125 1.125 0 11-2.25 0 1.125 1.125 0 012.25 0z" clipRule="evenodd" /></svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.71v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" /></svg>
              </a>
            </div>
          </div>
        </div>
        <div className="mt-10 border-t border-gray-700 pt-6 text-center text-gray-400 text-sm">
          <p>&copy; {new Date().getFullYear()} Rasheed Bobbas. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;