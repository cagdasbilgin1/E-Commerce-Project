import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Search, ShoppingCart, Menu, Heart, User, ChevronDown } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const user = useSelector(state => state.client.user);
  const categories = useSelector(state => state.product.categories);

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
          
          <div className="relative group">
            <Link to="/shop" className="hover:text-[#23A6F0] flex items-center gap-1">
              Shop <ChevronDown className="w-4 h-4"/>
            </Link>
            
            {/* Mega Menu Dropdown */}
            <div className="absolute top-full left-0 mt-2 w-[300px] bg-white border border-[#E8E8E8] shadow-lg rounded-sm opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50 p-6 flex gap-8">
              {/* Kadın */}
              <div className="flex flex-col flex-1">
                <h3 className="font-bold text-[#252B42] mb-4">Kadın</h3>
                <div className="flex flex-col gap-3">
                  <Link to="/shop/kadin/bags/1" className="text-sm text-[#737373] font-semibold hover:text-[#23A6F0]">Bags</Link>
                  <Link to="/shop/kadin/belts/2" className="text-sm text-[#737373] font-semibold hover:text-[#23A6F0]">Belts</Link>
                  <Link to="/shop/kadin/cosmetics/3" className="text-sm text-[#737373] font-semibold hover:text-[#23A6F0]">Cosmetics</Link>
                  <Link to="/shop/kadin/hats/4" className="text-sm text-[#737373] font-semibold hover:text-[#23A6F0]">Hats</Link>
                </div>
              </div>
              
              {/* Erkek */}
              <div className="flex flex-col flex-1">
                <h3 className="font-bold text-[#252B42] mb-4">Erkek</h3>
                <div className="flex flex-col gap-3">
                  <Link to="/shop/erkek/bags/5" className="text-sm text-[#737373] font-semibold hover:text-[#23A6F0]">Bags</Link>
                  <Link to="/shop/erkek/belts/6" className="text-sm text-[#737373] font-semibold hover:text-[#23A6F0]">Belts</Link>
                  <Link to="/shop/erkek/cosmetics/7" className="text-sm text-[#737373] font-semibold hover:text-[#23A6F0]">Cosmetics</Link>
                  <Link to="/shop/erkek/hats/8" className="text-sm text-[#737373] font-semibold hover:text-[#23A6F0]">Hats</Link>
                </div>
              </div>
            </div>
          </div>

          <Link to="/about" className="hover:text-[#23A6F0]">About</Link>
          <Link to="/blog" className="hover:text-[#23A6F0]">Blog</Link>
          <Link to="/contact" className="hover:text-[#23A6F0]">Contact</Link>
          <Link to="/pages" className="hover:text-[#23A6F0]">Pages</Link>
        </nav>

        {/* Desktop Right icons */}
        <div className="hidden md:flex flex-row items-center gap-8 text-[#23A6F0] font-semibold text-sm">
          {user?.name ? (
            <div className="flex items-center gap-2">
              <img src={user.gravatar || `https://ui-avatars.com/api/?name=${user.name}`} alt={user.name} className="w-8 h-8 rounded-full" />
              <span className="text-[#252B42] font-bold">{user.name}</span>
            </div>
          ) : (
            <div className="flex items-center gap-2">
               <User className="w-4 h-4" />
               <Link to="/login" className="hover:text-blue-700">Login</Link>
               <span>/</span>
               <Link to="/signup" className="hover:text-blue-700">Register</Link>
            </div>
          )}
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
