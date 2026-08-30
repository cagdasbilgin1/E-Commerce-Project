import React from 'react';
import { ChevronLeft, ChevronRight, Download, Clock, LineChart } from 'lucide-react';
import HeroSlider from '../components/HeroSlider';
import ProductCard from '../components/ProductCard';

import exploreBanner from '../assets/images/explore-banner.jpg';
import popularDonut from '../assets/images/popular-donut.jpg';
import popularScooter from '../assets/images/popular-scooter.jpg';
import popularBurger from '../assets/images/popular-burger.jpg';

import productIceCream from '../assets/images/product-icecream.png';
import productApples from '../assets/images/product-apples.png';
import productMeat from '../assets/images/product-meat.png';
import productStewMeat from '../assets/images/product-stew-meat.jpg';
import productTrailMix from '../assets/images/product-trailmix.jpg';
import productCup from '../assets/images/product-cup.png';
import productCheese from '../assets/images/product-cheese.jpg';
import productBleach from '../assets/images/product-bleach.jpg';
import productWerthers from '../assets/images/product-werthers.jpg';

import brand1 from '../assets/images/brand-1.svg';
import brand2 from '../assets/images/brand-2.svg';
import brand3 from '../assets/images/brand-3.svg';
import brand4 from '../assets/images/brand-4.svg';
import brand5 from '../assets/images/brand-5.svg';
import brand6 from '../assets/images/brand-6.svg';

import blogStreet from '../assets/images/blog-street.jpg';
import blogCar from '../assets/images/blog-car.jpg';
import blogUmbrellas from '../assets/images/blog-umbrellas.jpg';

const dummyProductsSection3 = [
  { id: 1, image: productCup, title: 'Graphic Design', department: 'English Department', oldPrice: '$16.48', newPrice: '$6.48' },
  { id: 2, image: productCheese, title: 'Graphic Design', department: 'English Department', oldPrice: '$16.48', newPrice: '$6.48' },
  { id: 3, image: productBleach, title: 'Graphic Design', department: 'English Department', oldPrice: '$16.48', newPrice: '$6.48' },
  { id: 4, image: productWerthers, title: 'Graphic Design', department: 'English Department', oldPrice: '$16.48', newPrice: '$6.48' },
];

const dummyPosts = [
  { id: 1, image: blogStreet },
  { id: 2, image: blogCar },
  { id: 3, image: blogUmbrellas },
];

const dummyProductsSection1 = [
  { id: 1, image: productIceCream, title: 'Graphic Design', department: 'English Department', oldPrice: '$16.48', newPrice: '$6.48' },
  { id: 2, image: productApples, title: 'Graphic Design', department: 'English Department', oldPrice: '$16.48', newPrice: '$6.48' },
  { id: 3, image: productMeat, title: 'Graphic Design', department: 'English Department', oldPrice: '$16.48', newPrice: '$6.48' },
  { id: 4, image: productIceCream, title: 'Graphic Design', department: 'English Department', oldPrice: '$16.48', newPrice: '$6.48' },
  { id: 5, image: productApples, title: 'Graphic Design', department: 'English Department', oldPrice: '$16.48', newPrice: '$6.48' },
  { id: 6, image: productMeat, title: 'Graphic Design', department: 'English Department', oldPrice: '$16.48', newPrice: '$6.48' },
];

const HomePage = () => {
  return (
    <div className="flex flex-col w-full bg-white">
      {/* 1. Hero Slider */}
      <HeroSlider />

      {/* 2. Category Section (Cards) */}
      <section className="w-full flex justify-center py-20 px-12 md:px-24 bg-[#FAFAFA]">
        <div className="max-w-[1440px] w-full flex flex-col md:flex-row gap-8 justify-center">
          
          <div className="flex-1 bg-white border border-[#E8E8E8] flex flex-row items-center p-8 h-[220px] relative overflow-hidden transition-shadow hover:shadow-md cursor-pointer">
             <div className="z-10 flex flex-col justify-center relative pointer-events-none">
                <span className="text-[#737373] text-sm font-bold mb-2">Your Space</span>
                <h3 className="text-[#252B42] text-2xl md:text-3xl font-bold mb-4">Unique<br/>Life</h3>
                <span className="text-[#737373] text-sm font-bold pointer-events-auto hover:text-[#23A6F0]">Explore Items</span>
             </div>
             <div className="absolute right-0 top-0 bottom-0 py-4 w-[65%] flex items-center justify-end">
                <img src={productIceCream} alt="Unique Life" className="w-full h-full object-contain object-right pr-2" />
             </div>
          </div>

          <div className="flex-1 bg-white border border-[#E8E8E8] flex flex-row items-center p-8 h-[220px] relative overflow-hidden transition-shadow hover:shadow-md cursor-pointer">
             <div className="z-10 flex flex-col justify-center relative pointer-events-none">
                <span className="text-[#737373] text-sm font-bold mb-2">Ends Today</span>
                <h3 className="text-[#252B42] text-2xl md:text-3xl font-bold mb-4">Elements<br/>Style</h3>
                <span className="text-[#737373] text-sm font-bold pointer-events-auto hover:text-[#23A6F0]">Explore Items</span>
             </div>
             <div className="absolute right-0 top-0 bottom-0 py-4 w-[75%] flex items-center justify-end">
                <img src={productApples} alt="Elements Style" className="w-full h-full object-contain object-right" />
             </div>
          </div>

          <div className="flex-1 bg-white border border-[#E8E8E8] flex flex-row items-center p-8 h-[220px] relative overflow-hidden transition-shadow hover:shadow-md cursor-pointer">
             <div className="z-10 flex flex-col justify-center relative pointer-events-none">
                <span className="text-[#737373] text-sm font-bold mb-2">Ends Today</span>
                <h3 className="text-[#252B42] text-2xl md:text-3xl font-bold mb-4">Elements<br/>Style</h3>
                <span className="text-[#737373] text-sm font-bold pointer-events-auto hover:text-[#23A6F0]">Explore Items</span>
             </div>
             <div className="absolute right-[-10%] top-0 bottom-0 py-4 w-[85%] flex items-center justify-end">
                <img src={productMeat} alt="Elements Style" className="w-full h-[110%] object-contain object-center" />
             </div>
          </div>

        </div>
      </section>

      {/* 3. BESTSELLER PRODUCTS Section 1 */}
      <section className="w-full flex justify-center py-10 px-12 md:px-24">
        <div className="max-w-[1440px] w-full flex flex-col lg:flex-row gap-8">
           {/* Left Banner */}
           <div className="w-full lg:w-[35%] relative border border-[#E8E8E8] flex">
              <img src={exploreBanner} className="w-full h-full object-cover" alt="Furniture" />
              <div className="absolute top-0 left-0 p-10 z-10">
                <h4 className="text-[#252B42] font-bold text-sm mb-1 uppercase">FURNITURE</h4>
                <p className="text-[#737373] text-xs font-bold">5 Items</p>
              </div>
           </div>

           {/* Right Products */}
           <div className="w-full lg:w-[65%] flex flex-col">
              <div className="flex flex-col md:flex-row justify-between items-center mb-8 border-b border-[#E8E8E8] pb-6">
                 <h3 className="text-[#252B42] font-bold text-xl uppercase">BESTSELLER PRODUCTS</h3>
                 <div className="flex items-center gap-10 mt-4 md:mt-0">
                    <span className="text-[#23A6F0] font-bold text-sm cursor-pointer">Men</span>
                    <span className="text-[#737373] font-bold text-sm cursor-pointer">Women</span>
                    <span className="text-[#737373] font-bold text-sm cursor-pointer">Accessories</span>
                 </div>
                 <div className="flex items-center gap-3 mt-4 md:mt-0">
                    <button className="w-10 h-10 rounded-full border border-[#E8E8E8] flex items-center justify-center text-[#737373] hover:bg-gray-50"><ChevronLeft className="w-5 h-5"/></button>
                    <button className="w-10 h-10 rounded-full border border-[#E8E8E8] flex items-center justify-center text-[#737373] hover:bg-gray-50"><ChevronRight className="w-5 h-5"/></button>
                 </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 gap-y-12">
                 {dummyProductsSection1.map(p => <ProductCard key={p.id} {...p} />)}
              </div>
           </div>
        </div>
      </section>

      {/* 4. MOST POPULAR Banner */}
      <section className="w-full flex justify-center py-20 px-12 md:px-24">
        <div className="max-w-[1440px] w-full flex flex-col">
           
           <div className="w-full flex flex-col lg:flex-row">
               {/* Left Scooter */}
               <div className="w-full lg:w-[65%] relative flex">
                  <img src={popularScooter} alt="Delivery" className="w-full h-full object-cover" />
               </div>

               {/* Right Meat */}
               <div className="w-full lg:w-[35%] flex flex-col items-center justify-center p-12 py-20 bg-[#FAFAFA]">
                  <h3 className="text-[#252B42] font-bold text-xl uppercase mb-4 text-center">MOST POPULAR</h3>
                  <p className="text-[#737373] font-semibold text-xs text-center mb-10 max-w-[220px]">
                    We focus on ergonomics and meeting you where you work. It's only a keystroke away.
                  </p>
                  <div className="flex flex-col items-center">
                     <div className="mb-6 w-full flex justify-center">
                        <img src={productStewMeat} alt="Stew Meat" className="w-[180px] h-[180px] object-contain" />
                     </div>
                     <h5 className="text-[#252B42] font-bold text-sm mb-2 text-center">English Department</h5>
                     <div className="flex items-center gap-2 mt-1">
                        <span className="text-[#BDBDBD] font-bold line-through">$16.48</span>
                        <span className="text-[#23856D] font-bold">$6.48</span>
                     </div>
                  </div>
               </div>
           </div>

           {/* Bottom Numbers Row */}
           <div className="w-full bg-white p-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
              {[1,2,3,4].map(num => (
                <div key={num} className="flex flex-row gap-4 items-start">
                   <span className="text-[#E74040] text-4xl font-bold leading-none">{num}.</span>
                   <div className="flex flex-col">
                      <h5 className="text-[#252B42] font-bold text-sm mb-1">Easy to use</h5>
                      <p className="text-[#737373] text-[11px] font-semibold leading-relaxed max-w-[140px]">Things on a very small that you have any direct</p>
                   </div>
                </div>
              ))}
           </div>
        </div>
      </section>

      {/* 5. BESTSELLER PRODUCTS Section 2 */}
      <section className="w-full flex justify-center py-10 px-12 md:px-24">
        <div className="max-w-[1440px] w-full flex flex-col-reverse lg:flex-row gap-8">
           
           {/* Left Products */}
           <div className="w-full lg:w-[65%] flex flex-col">
              <div className="flex flex-col md:flex-row justify-between items-center mb-8 border-b border-[#E8E8E8] pb-6">
                 <h3 className="text-[#252B42] font-bold text-xl uppercase">BESTSELLER PRODUCTS</h3>
                 <div className="flex items-center gap-10 mt-4 md:mt-0">
                    <span className="text-[#23A6F0] font-bold text-sm cursor-pointer">Men</span>
                    <span className="text-[#737373] font-bold text-sm cursor-pointer">Women</span>
                    <span className="text-[#737373] font-bold text-sm cursor-pointer">Accessories</span>
                 </div>
                 <div className="flex items-center gap-3 mt-4 md:mt-0">
                    <button className="w-10 h-10 rounded-full border border-[#E8E8E8] flex items-center justify-center text-[#737373] hover:bg-gray-50"><ChevronLeft className="w-5 h-5"/></button>
                    <button className="w-10 h-10 rounded-full border border-[#E8E8E8] flex items-center justify-center text-[#737373] hover:bg-gray-50"><ChevronRight className="w-5 h-5"/></button>
                 </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 gap-y-12">
                 {dummyProductsSection1.map(p => <ProductCard key={p.id} {...p} />)}
              </div>
           </div>

           {/* Right Banner (Donut) */}
           <div className="w-full lg:w-[35%] relative border border-[#E8E8E8] flex">
              <img src={popularDonut} className="w-full h-full object-cover" alt="Furniture Donut" />
              <div className="absolute top-0 left-0 p-10 z-10">
                <h4 className="text-[#252B42] font-bold text-sm mb-1 uppercase">FURNITURE</h4>
                <p className="text-[#737373] text-xs font-bold">5 Items</p>
              </div>
           </div>

        </div>
      </section>

      {/* 6. MOST POPULAR Banner 2 */}
      <section className="w-full flex justify-center py-20 px-12 md:px-24">
        <div className="max-w-[1440px] w-full flex flex-col lg:flex-row">
           
           {/* Left Product Info */}
           <div className="w-full lg:w-[35%] flex flex-col items-center justify-center p-12 py-20 bg-[#FAFAFA]">
              <h3 className="text-[#252B42] font-bold text-xl uppercase mb-4 text-center">MOST POPULAR</h3>
              <p className="text-[#737373] font-semibold text-xs text-center mb-10 max-w-[220px]">
                We focus on ergonomics and meeting you where you work. It's only a keystroke away.
              </p>
              <div className="flex flex-col items-center">
                 <div className="mb-6 w-full flex justify-center">
                    <img src={productTrailMix} alt="Trail Mix" className="w-[200px] h-[200px] object-contain" />
                 </div>
                 <h5 className="text-[#252B42] font-bold text-sm mb-3 text-center">English Department</h5>
                 
                 <div className="flex items-center gap-2 mb-4 text-[#737373]">
                   <Download className="w-4 h-4" />
                   <span className="text-xs font-bold">15 Sales</span>
                 </div>

                 <div className="flex items-center gap-2 mb-4">
                    <span className="text-[#BDBDBD] font-bold line-through">$16.48</span>
                    <span className="text-[#23856D] font-bold">$6.48</span>
                 </div>

                 <div className="flex items-center gap-2 mt-2">
                   <div className="w-4 h-4 rounded-full bg-[#23A6F0]"></div>
                   <div className="w-4 h-4 rounded-full bg-[#23856D]"></div>
                   <div className="w-4 h-4 rounded-full bg-[#E77C40]"></div>
                   <div className="w-4 h-4 rounded-full bg-[#252B42]"></div>
                 </div>
              </div>
           </div>

           {/* Right Burger Woman */}
           <div className="w-full lg:w-[65%] relative flex">
              <img src={popularBurger} alt="Woman eating burger" className="w-full h-full object-cover" />
           </div>

        </div>
      </section>
      {/* 7. BESTSELLER PRODUCTS Section 3 */}
      <section className="w-full flex justify-center py-20 px-12 md:px-24 bg-[#FAFAFA]">
        <div className="max-w-[1440px] w-full flex flex-col">
           <h3 className="text-[#252B42] font-bold text-2xl uppercase mb-6">BESTSELLER PRODUCTS</h3>
           <div className="w-full border-b border-[#E8E8E8] mb-12"></div>
           <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
              {dummyProductsSection3.map(p => <ProductCard key={p.id} {...p} />)}
           </div>
        </div>
      </section>

      {/* 8. Brands Section */}
      <section className="w-full flex justify-center py-20 px-12 md:px-24 bg-[#FAFAFA]">
        <div className="max-w-[1440px] lg:px-[68px] w-full flex flex-col md:flex-row flex-wrap items-center justify-center md:justify-between gap-12 md:gap-8">
           <img src={brand1} alt="Hooli" className="h-12 w-auto object-contain" />
           <img src={brand2} alt="Lyft" className="h-12 w-auto object-contain" />
           <img src={brand3} alt="Hat Logo" className="h-12 w-auto object-contain" />
           <img src={brand4} alt="Stripe" className="h-12 w-auto object-contain" />
           <img src={brand5} alt="AWS" className="h-12 w-auto object-contain" />
           <img src={brand6} alt="Reddit" className="h-12 w-auto object-contain" />
        </div>
      </section>

      {/* 9. Featured Posts Section */}
      <section className="w-full flex justify-center py-20 px-12 md:px-24 bg-white">
        <div className="max-w-[1440px] w-full flex flex-col items-center">
           
           <h6 className="text-[#23A6F0] font-bold text-sm mb-2 text-center">Practice Advice</h6>
           <h2 className="text-[#252B42] font-bold text-4xl mb-20 text-center">Featured Posts</h2>

           <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-8">
              {dummyPosts.map(post => (
                 <div key={post.id} className="flex flex-col bg-white shadow-sm border border-[#E8E8E8] rounded-sm overflow-hidden">
                    <div className="w-full relative">
                       <img src={post.image} alt="Blog Post" className="w-full aspect-[4/3] object-cover" />
                       <div className="absolute top-4 left-4 bg-[#E74040] text-white text-xs font-bold px-3 py-1 rounded shadow-sm uppercase">NEW</div>
                    </div>
                    <div className="p-6 flex flex-col pt-8">
                       <div className="flex items-center gap-4 mb-4 text-xs font-semibold">
                          <span className="text-[#8EC2F2]">Google</span>
                          <span className="text-[#737373]">Trending</span>
                          <span className="text-[#737373]">New</span>
                       </div>
                       <h4 className="text-[#252B42] text-xl font-normal leading-snug mb-3">Loudest à la Madison #1<br/>(L'integral)</h4>
                       <p className="text-[#737373] text-sm leading-relaxed mb-6">
                         We focus on ergonomics and meeting you where you work. It's only a keystroke away.
                       </p>
                       <div className="flex items-center justify-between py-4 mb-2">
                          <div className="flex items-center gap-2 text-[#737373]">
                             <Clock className="w-4 h-4 text-[#23A6F0]" />
                             <span className="text-xs font-medium">22 April 2021</span>
                          </div>
                          <div className="flex items-center gap-2 text-[#737373]">
                             <LineChart className="w-4 h-4 text-[#23856D]" />
                             <span className="text-xs font-medium">10 comments</span>
                          </div>
                       </div>
                       <a href="#" className="flex items-center gap-2 text-[#23A6F0] font-bold text-sm hover:underline">
                          Learn More <ChevronRight className="w-4 h-4" />
                       </a>
                    </div>
                 </div>
              ))}
           </div>
        </div>
      </section>

    </div>
  );
};

export default HomePage;
