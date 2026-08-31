import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const ShopPage = () => {
  const categories = useSelector(state => state.product.categories);
  
  // Sort by rating descending and get top 5
  const topCategories = [...categories]
    .sort((a, b) => b.rating - a.rating)
    .slice(0, 5);

  return (
    <div className="w-full flex flex-col bg-[#FAFAFA]">
      {/* Header/Breadcrumb Section */}
      <section className="w-full py-10 px-6 md:px-12 max-w-[1440px] mx-auto flex flex-col md:flex-row justify-between items-center">
        <h2 className="text-2xl font-bold text-[#252B42] mb-4 md:mb-0">Shop</h2>
        <div className="flex items-center gap-4 text-sm font-bold">
          <span className="text-[#252B42]">Home</span>
          <span className="text-[#BDBDBD]">&gt;</span>
          <span className="text-[#BDBDBD]">Shop</span>
        </div>
      </section>

      {/* Top 5 Categories Section */}
      <section className="w-full py-12 px-6 md:px-12 max-w-[1440px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
          {topCategories.map(cat => {
            const genderPath = cat.gender === 'k' ? 'kadin' : 'erkek';
            const catNamePath = cat.code.split(':')[1];
            return (
              <Link 
                key={cat.id} 
                to={`/shop/${genderPath}/${catNamePath}/${cat.id}`}
                className="relative overflow-hidden group rounded aspect-square flex items-center justify-center cursor-pointer"
              >
                <img 
                  src={cat.img} 
                  alt={cat.title} 
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 transition-opacity group-hover:bg-opacity-50"></div>
                <div className="relative z-10 flex flex-col items-center justify-center text-white p-4 text-center">
                  <h3 className="font-bold text-lg mb-1">{cat.title}</h3>
                  <p className="text-sm">Rating: {cat.rating}</p>
                </div>
              </Link>
            )
          })}
        </div>
      </section>
    </div>
  );
};

export default ShopPage;
