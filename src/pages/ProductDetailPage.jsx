import React from 'react';
import { useParams } from 'react-router-dom';

const ProductDetailPage = () => {
  const { id } = useParams();

  return (
    <div className="w-full flex flex-col bg-[#FAFAFA]">
      {/* Breadcrumb Section */}
      <section className="w-full py-10 px-6 md:px-12 max-w-[1440px] mx-auto flex items-center gap-4 text-sm font-bold">
        <span className="text-[#252B42]">Home</span>
        <span className="text-[#BDBDBD]">&gt;</span>
        <span className="text-[#BDBDBD]">Shop</span>
        <span className="text-[#BDBDBD]">&gt;</span>
        <span className="text-[#BDBDBD]">Product {id}</span>
      </section>

      {/* Main Content Area Placeholder */}
      <section className="w-full py-12 px-6 md:px-12 max-w-[1440px] mx-auto flex flex-col items-center justify-center min-h-[50vh]">
        <h2 className="text-3xl font-bold text-[#252B42] mb-4 text-center">Product Detail Page</h2>
        <p className="text-base text-[#737373] text-center max-w-lg mb-8">
          You are viewing Product ID: <span className="font-bold text-[#23A6F0]">{id}</span>
        </p>
        <div className="w-full max-w-4xl bg-white border border-[#E8E8E8] shadow-sm rounded-md p-8 md:p-16 flex flex-col md:flex-row items-center gap-12">
           <div className="w-full md:w-1/2 aspect-square bg-gray-100 flex items-center justify-center rounded-md border border-[#E8E8E8]">
             <span className="text-gray-400">Image Placeholder</span>
           </div>
           <div className="w-full md:w-1/2 flex flex-col items-start text-left">
             <h3 className="text-2xl font-bold text-[#252B42] mb-4">Floating Phone</h3>
             <div className="text-2xl font-bold text-[#252B42] mb-6">$1,139.33</div>
             <p className="text-sm text-[#737373] mb-6 border-b border-[#E8E8E8] pb-6">
                Please provide the reference images for the Product Detail Page so we can implement the exact layout (carousel, reviews, colors, layout etc.).
             </p>
             <button className="bg-[#23A6F0] text-white px-6 py-3 font-bold rounded hover:bg-blue-500 transition">Select Options</button>
           </div>
        </div>
      </section>
    </div>
  );
};

export default ProductDetailPage;
