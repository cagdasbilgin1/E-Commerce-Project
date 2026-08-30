import React from 'react';
import { Phone, MapPin, Mail, Globe, Camera, MessageCircle } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="w-full flex flex-col bg-[#252B42]">
      
      {/* Top Section */}
      <div className="w-full flex justify-center">
        <div className="max-w-[1440px] w-full px-12 md:px-24 py-16 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex flex-col text-center md:text-left">
            <h2 className="text-white font-bold text-3xl mb-2">Consulting Agency For Your Business</h2>
            <p className="text-white text-sm">the quick fox jumps over the lazy dog</p>
          </div>
          <button className="bg-[#23A6F0] text-white px-8 py-4 rounded font-bold text-sm hover:bg-blue-500 transition">
            Contact Us
          </button>
        </div>
      </div>

      {/* Middle Section */}
      <div className="w-full flex justify-center">
        <div className="max-w-[1440px] w-full px-12 md:px-24 py-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-8">
          
          <div className="flex flex-col gap-4">
            <h3 className="font-bold text-white text-base mb-2">Company Info</h3>
            <a href="#" className="text-white font-semibold text-sm hover:text-[#23A6F0] transition">About Us</a>
            <a href="#" className="text-white font-semibold text-sm hover:text-[#23A6F0] transition">Carrier</a>
            <a href="#" className="text-white font-semibold text-sm hover:text-[#23A6F0] transition">We are hiring</a>
            <a href="#" className="text-white font-semibold text-sm hover:text-[#23A6F0] transition">Blog</a>
          </div>

          <div className="flex flex-col gap-4">
            <h3 className="font-bold text-white text-base mb-2">Legal</h3>
            <a href="#" className="text-white font-semibold text-sm hover:text-[#23A6F0] transition">About Us</a>
            <a href="#" className="text-white font-semibold text-sm hover:text-[#23A6F0] transition">Carrier</a>
            <a href="#" className="text-white font-semibold text-sm hover:text-[#23A6F0] transition">We are hiring</a>
            <a href="#" className="text-white font-semibold text-sm hover:text-[#23A6F0] transition">Blog</a>
          </div>

          <div className="flex flex-col gap-4">
            <h3 className="font-bold text-white text-base mb-2">Features</h3>
            <a href="#" className="text-white font-semibold text-sm hover:text-[#23A6F0] transition">Business Marketing</a>
            <a href="#" className="text-white font-semibold text-sm hover:text-[#23A6F0] transition">User Analytic</a>
            <a href="#" className="text-white font-semibold text-sm hover:text-[#23A6F0] transition">Live Chat</a>
            <a href="#" className="text-white font-semibold text-sm hover:text-[#23A6F0] transition">Unlimited Support</a>
          </div>

          <div className="flex flex-col gap-4">
            <h3 className="font-bold text-white text-base mb-2">Resources</h3>
            <a href="#" className="text-white font-semibold text-sm hover:text-[#23A6F0] transition">IOS & Android</a>
            <a href="#" className="text-white font-semibold text-sm hover:text-[#23A6F0] transition">Watch a Demo</a>
            <a href="#" className="text-white font-semibold text-sm hover:text-[#23A6F0] transition">Customers</a>
            <a href="#" className="text-white font-semibold text-sm hover:text-[#23A6F0] transition">API</a>
          </div>

          <div className="flex flex-col gap-4">
            <h3 className="font-bold text-white text-base mb-2">Get In Touch</h3>
            <div className="flex items-center gap-3 text-white">
              <Phone className="w-6 h-6 text-[#23A6F0]" />
              <span className="text-sm font-semibold">(480) 555-0103</span>
            </div>
            <div className="flex items-center gap-3 text-white">
              <MapPin className="w-6 h-6 text-[#23A6F0]" />
              <span className="text-sm font-semibold">4517 Washington Ave.</span>
            </div>
            <div className="flex items-center gap-3 text-white">
              <Mail className="w-6 h-6 text-[#23A6F0]" />
              <span className="text-sm font-semibold">debra.holt@example.com</span>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom Section */}
      <div className="w-full flex justify-center bg-[#252B42]">
        <div className="max-w-[1440px] w-full px-12 md:px-24 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white font-semibold text-sm text-center md:text-left">
            Made With Love By Finland All Right Reserved
          </p>
          <div className="flex items-center gap-6 text-[#23A6F0]">
            <Globe className="w-6 h-6 cursor-pointer hover:text-white transition" />
            <Camera className="w-6 h-6 cursor-pointer hover:text-white transition" />
            <MessageCircle className="w-6 h-6 cursor-pointer hover:text-white transition" />
          </div>
        </div>
      </div>

    </footer>
  );
};

export default Footer;
