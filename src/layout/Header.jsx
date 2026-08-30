import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, ShoppingCart, Menu, Heart, User, ChevronDown } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="w-full flex flex-col bg-white">
      <div className="flex justify-between items-center px-6 py-6 md:px-12 max-w-[1440px] w-full mx-auto">
        <div className="flex items-center justify-between w-full md:w-auto">
          <Link to="/" className="text-2xl font-bold text-[#252B42] tracking-wide">
            Bandage
          </Link>
          <div className="flex items-center gap-4 md:hidden">
            <Search className="w-6 h-6 text-[#252B42]" />
            <ShoppingCart className="w-6 h-6 text-[#252B42]" />
            <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
              <Menu className="w-6 h-6 text-[#252B42]" />
            </button>
          </div>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex flex-row items-center gap-6 text-sm font-semibold text-[#737373]">
          <Link to="/" className="hover:text-[#23A6F0] text-[#252B42]">Home</Link>
          <Link to="/shop" className="hover:text-[#23A6F0] flex items-center gap-1">Shop <ChevronDown className="w-4 h-4"/></Link>
          <Link to="/about" className="hover:text-[#23A6F0]">About</Link>
          <Link to="/blog" className="hover:text-[#23A6F0]">Blog</Link>
          <Link to="/contact" className="hover:text-[#23A6F0]">Contact</Link>
          <Link to="/pages" className="hover:text-[#23A6F0]">Pages</Link>
        </nav>

        {/* Desktop Right icons */}
        <div className="hidden md:flex flex-row items-center gap-8 text-[#23A6F0] font-semibold text-sm">
          <div className="flex items-center gap-2">
             <User className="w-4 h-4" />
             <Link to="/login" className="hover:text-blue-700">Login</Link>
             <span>/</span>
             <Link to="/signup" className="hover:text-blue-700">Register</Link>
          </div>
          <div className="flex items-center gap-6">
            <button><Search className="w-4 h-4" /></button>
            <button className="flex items-center gap-1"><ShoppingCart className="w-4 h-4" /> 1</button>
            <button className="flex items-center gap-1"><Heart className="w-4 h-4" /> 1</button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <nav className="flex flex-col items-center gap-6 py-12 bg-white md:hidden text-2xl text-[#737373]">
          <Link to="/" onClick={() => setIsMenuOpen(false)}>Home</Link>
          <Link to="/shop" onClick={() => setIsMenuOpen(false)}>Shop</Link>
          <Link to="/about" onClick={() => setIsMenuOpen(false)}>About</Link>
          <Link to="/contact" onClick={() => setIsMenuOpen(false)}>Contact</Link>
        </nav>
      )}
    </header>
  );
};

export default Header;
