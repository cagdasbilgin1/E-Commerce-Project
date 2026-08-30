import React from 'react';

const ContactPage = () => {
  return (
    <div className="w-full flex flex-col bg-[#FAFAFA]">
      {/* Breadcrumb Section */}
      <section className="w-full py-10 px-6 md:px-12 max-w-[1440px] mx-auto flex flex-col md:flex-row justify-between items-center">
        <h2 className="text-2xl font-bold text-[#252B42] mb-4 md:mb-0">Contact Us</h2>
        <div className="flex items-center gap-4 text-sm font-bold">
          <span className="text-[#252B42]">Home</span>
          <span className="text-[#BDBDBD]">&gt;</span>
          <span className="text-[#BDBDBD]">Contact</span>
        </div>
      </section>

      {/* Main Content Area Placeholder */}
      <section className="w-full py-12 px-6 md:px-12 max-w-[1440px] mx-auto flex flex-col items-center justify-center min-h-[50vh]">
        <h3 className="text-3xl font-bold text-[#252B42] mb-4 text-center">Get in touch today!</h3>
        <p className="text-base text-[#737373] text-center max-w-lg mb-8">
          Please provide the reference images for the Contact Page design so we can implement the exact layout (forms, maps, address info, etc.).
        </p>
        
        <div className="w-full max-w-2xl bg-white border border-[#E8E8E8] shadow-sm rounded-md p-8 flex flex-col gap-6">
           <div className="flex flex-col gap-2">
             <label className="text-sm font-bold text-[#252B42]">Name</label>
             <input type="text" className="w-full bg-[#F9F9F9] border border-[#E8E8E8] p-4 rounded outline-none" placeholder="Your Name" />
           </div>
           <div className="flex flex-col gap-2">
             <label className="text-sm font-bold text-[#252B42]">Email</label>
             <input type="email" className="w-full bg-[#F9F9F9] border border-[#E8E8E8] p-4 rounded outline-none" placeholder="Your Email" />
           </div>
           <div className="flex flex-col gap-2">
             <label className="text-sm font-bold text-[#252B42]">Message</label>
             <textarea className="w-full bg-[#F9F9F9] border border-[#E8E8E8] p-4 rounded outline-none min-h-[150px]" placeholder="Your Message"></textarea>
           </div>
           <button className="bg-[#23A6F0] text-white px-6 py-4 font-bold rounded hover:bg-blue-500 transition mt-4 w-full md:w-auto self-start">
             Send Message
           </button>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
