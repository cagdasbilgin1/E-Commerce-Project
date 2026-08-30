import React from 'react';

const AboutPage = () => {
  return (
    <div className="w-full flex flex-col bg-white">
      {/* Hero Section Placeholder */}
      <section className="w-full max-w-[1440px] mx-auto flex flex-col md:flex-row items-center justify-between px-6 md:px-12 py-12 md:py-24 gap-12">
        <div className="flex flex-col items-center md:items-start text-center md:text-left md:w-1/2">
          <h3 className="text-base font-bold text-[#252B42] mb-6 hidden md:block">ABOUT COMPANY</h3>
          <h1 className="text-4xl md:text-6xl font-bold text-[#252B42] mb-6">ABOUT US</h1>
          <p className="text-[#737373] text-lg max-w-sm mb-8">
            We know how large objects will act, but things on a small scale
          </p>
          <button className="bg-[#23A6F0] text-white px-8 py-4 font-bold rounded hover:bg-blue-500 transition">
            Get Quote Now
          </button>
        </div>
        <div className="w-full md:w-1/2 flex items-center justify-center relative">
           <div className="w-full max-w-md aspect-square bg-[#FAFAFA] rounded-full overflow-hidden border border-[#E8E8E8] flex items-center justify-center">
              <span className="text-gray-400 font-bold">About Hero Image Placeholder</span>
           </div>
        </div>
      </section>

      {/* Content Section Placeholder */}
      <section className="w-full max-w-[1440px] mx-auto px-6 md:px-12 py-12 md:py-24 flex flex-col items-center">
        <div className="w-full flex flex-col md:flex-row items-start justify-between gap-12 max-w-4xl">
           <div className="flex flex-col md:w-1/2">
              <p className="text-sm font-bold text-[#E74040] mb-4">Problems trying</p>
              <h2 className="text-2xl font-bold text-[#252B42]">
                Met minim Mollie non desert Alamo est sit cliquey dolor do met sent.
              </h2>
           </div>
           <div className="flex flex-col md:w-1/2">
              <p className="text-sm text-[#737373]">
                Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics.
              </p>
           </div>
        </div>
      </section>

      {/* Stats Section Placeholder */}
      <section className="w-full max-w-[1440px] mx-auto px-6 md:px-12 py-12 md:py-24 flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="flex flex-col items-center">
            <h2 className="text-5xl font-bold text-[#252B42] mb-2">15K</h2>
            <p className="text-base font-bold text-[#737373]">Happy Customers</p>
          </div>
          <div className="flex flex-col items-center">
            <h2 className="text-5xl font-bold text-[#252B42] mb-2">150K</h2>
            <p className="text-base font-bold text-[#737373]">Monthly Visitors</p>
          </div>
          <div className="flex flex-col items-center">
            <h2 className="text-5xl font-bold text-[#252B42] mb-2">15</h2>
            <p className="text-base font-bold text-[#737373]">Countries Worldwide</p>
          </div>
          <div className="flex flex-col items-center">
            <h2 className="text-5xl font-bold text-[#252B42] mb-2">100+</h2>
            <p className="text-base font-bold text-[#737373]">Top Partners</p>
          </div>
      </section>

      {/* Message Placeholder */}
      <section className="w-full py-12 px-6 flex justify-center">
        <p className="text-sm text-[#737373] text-center">
           Please provide the reference images for the About Us Page to finalize the 1:1 design.
        </p>
      </section>
    </div>
  );
};

export default AboutPage;
