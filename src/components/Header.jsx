import React, { useState } from 'react';
import { Menu, X, ShoppingCart, Phone, MapPin } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-cannabis-green rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-xl">🌿</span>
            </div>
            <div>
              <h1 className="text-2xl font-bold text-cannabis-green">Premium Cannabis</h1>
              <p className="text-xs text-gray-600">ร้านกัญชาคุณภาพ</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-gray-700 hover:text-cannabis-green transition-colors">หน้าแรก</a>
            <a href="#products" className="text-gray-700 hover:text-cannabis-green transition-colors">สินค้า</a>
            <a href="#about" className="text-gray-700 hover:text-cannabis-green transition-colors">เกี่ยวกับเรา</a>
            <a href="#contact" className="text-gray-700 hover:text-cannabis-green transition-colors">ติดต่อ</a>
          </nav>

          {/* Contact and Cart */}
          <div className="hidden md:flex items-center space-x-4">
            <div className="flex items-center space-x-2 text-sm text-gray-600">
              <Phone size={16} />
              <span>099-123-4567</span>
            </div>
            <div className="flex items-center space-x-2 text-sm text-gray-600">
              <MapPin size={16} />
              <span>กรุงเทพฯ</span>
            </div>
            <button className="relative p-2 bg-cannabis-green text-white rounded-full hover:bg-cannabis-light transition-colors">
              <ShoppingCart size={20} />
              <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">0</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={toggleMenu}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t">
            <nav className="flex flex-col space-y-4">
              <a href="#home" className="text-gray-700 hover:text-cannabis-green transition-colors">หน้าแรก</a>
              <a href="#products" className="text-gray-700 hover:text-cannabis-green transition-colors">สินค้า</a>
              <a href="#about" className="text-gray-700 hover:text-cannabis-green transition-colors">เกี่ยวกับเรา</a>
              <a href="#contact" className="text-gray-700 hover:text-cannabis-green transition-colors">ติดต่อ</a>
              <div className="flex items-center space-x-2 text-sm text-gray-600 pt-2">
                <Phone size={16} />
                <span>099-123-4567</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-gray-600">
                <MapPin size={16} />
                <span>กรุงเทพฯ</span>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
