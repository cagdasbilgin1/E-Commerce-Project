import React from 'react';
import { Link } from 'react-router-dom';

const ProductCard = ({ id, image, title, department, oldPrice, newPrice }) => {
  return (
    <Link to={`/product/${id}`} className="flex flex-col items-center justify-center p-4 w-full h-full transition-transform hover:scale-105 cursor-pointer">
      <div className="w-[200px] h-[200px] flex items-center justify-center mb-4 bg-white">
        <img src={image} alt={title} className="max-w-full max-h-full object-contain" />
      </div>
      <h3 className="font-bold text-[#252B42] text-base text-center">{title}</h3>
      <p className="font-bold text-[#737373] text-sm mt-1 text-center">{department}</p>
      <div className="flex items-center gap-2 mt-2">
        <span className="text-[#BDBDBD] font-bold line-through">{oldPrice}</span>
        <span className="text-[#23856D] font-bold">{newPrice}</span>
      </div>
    </Link>
  );
};

export default ProductCard;
