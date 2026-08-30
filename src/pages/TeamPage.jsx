import React from 'react';
import { Facebook, Instagram, Twitter } from 'lucide-react'; // Fallback generic icons since brands are missing, but let's try Globe

// Using random placeholder avatars for members if specific images aren't available locally
const teamMembers = [
  {
    id: 1,
    name: 'Gökhan Özdemir',
    role: 'Project Manager',
    image: 'https://i.pravatar.cc/300?img=11', // Placeholder or LinkedIn avatar url
  },
  {
    id: 2,
    name: 'Antigravity AI',
    role: 'Full Stack Developer',
    image: 'https://i.pravatar.cc/300?img=33',
  },
  {
    id: 3,
    name: 'Çağdaş Bilgin',
    role: 'Product Owner',
    image: 'https://i.pravatar.cc/300?img=60',
  }
];

const TeamPage = () => {
  return (
    <div className="w-full flex flex-col bg-[#FAFAFA]">
      {/* Breadcrumb Section */}
      <section className="w-full py-10 px-6 md:px-12 max-w-[1440px] mx-auto flex flex-col items-center justify-center gap-4 text-center">
        <h3 className="text-base font-bold text-[#737373]">WHAT WE DO</h3>
        <h2 className="text-4xl md:text-5xl font-bold text-[#252B42]">Meet Our Team</h2>
        <div className="flex items-center gap-4 text-sm font-bold mt-2">
          <span className="text-[#252B42]">Home</span>
          <span className="text-[#BDBDBD]">&gt;</span>
          <span className="text-[#BDBDBD]">Team</span>
        </div>
      </section>

      {/* Team Grid Section */}
      <section className="w-full py-16 px-6 md:px-12 max-w-[1440px] mx-auto flex flex-col items-center justify-center">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12 w-full max-w-5xl">
          {teamMembers.map((member) => (
            <div key={member.id} className="flex flex-col items-center justify-center bg-white border border-[#E8E8E8] rounded shadow-sm overflow-hidden pb-8 transition-transform hover:-translate-y-2">
              <div className="w-full aspect-[3/4] overflow-hidden mb-6">
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-full h-full object-cover" 
                />
              </div>
              <h3 className="text-xl font-bold text-[#252B42] text-center mb-2">{member.name}</h3>
              <p className="text-sm font-bold text-[#737373] text-center mb-4">{member.role}</p>
              
              <div className="flex items-center gap-4 text-[#23A6F0]">
                {/* Generic icons representing social links */}
                <a href="#" className="hover:text-blue-600 transition"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg></a>
                <a href="#" className="hover:text-blue-600 transition"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg></a>
                <a href="#" className="hover:text-blue-600 transition"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path></svg></a>
              </div>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
};

export default TeamPage;
