import React, { useState } from 'react';
import { Menu, X, Phone, MapPin, Heart } from 'lucide-react';

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
            <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-xl">�</span>
            </div>
            <div>
              <h1 className="text-2xl font-bold text-primary">Activity Match</h1>
              <p className="text-xs text-gray-600">หาเพื่อนร่วมทริป</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-gray-700 hover:text-primary transition-colors">หน้าแรก</a>
            <a href="#products" className="text-gray-700 hover:text-primary transition-colors">กิจกรรม</a>
            <a href="#about" className="text-gray-700 hover:text-primary transition-colors">เกี่ยวกับเรา</a>
            <a href="#contact" className="text-gray-700 hover:text-primary transition-colors">ติดต่อ</a>
          </nav>

          {/* Contact */}
          <div className="hidden md:flex items-center space-x-4">
            <div className="flex items-center space-x-2 text-sm text-gray-600">
              <Phone size={16} />
              <span>099-123-4567</span>
            </div>
            <div className="flex items-center space-x-2 text-sm text-gray-600">
              <MapPin size={16} />
              <span>กรุงเทพฯ</span>
            </div>
            <button className="relative p-2 bg-primary text-white rounded-full hover:bg-primary-dark transition-colors">
              <Heart size={20} />
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
              <a href="#home" className="text-gray-700 hover:text-primary transition-colors">หน้าแรก</a>
              <a href="#products" className="text-gray-700 hover:text-primary transition-colors">กิจกรรม</a>
              <a href="#about" className="text-gray-700 hover:text-primary transition-colors">เกี่ยวกับเรา</a>
              <a href="#contact" className="text-gray-700 hover:text-primary transition-colors">ติดต่อ</a>
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
