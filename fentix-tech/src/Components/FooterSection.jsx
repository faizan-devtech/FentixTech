 import React from 'react';
import { ChevronUp } from 'lucide-react';

const FooterSection = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const footerLinks = {
    About: ['About', 'Our Team', 'Careers', 'Clients', 'Contact'],
    Services: [
      'Web Development',
      'Mobile App Development',
      'Custom Software Development',
      'AI/ML/GenAI Development',
      'UI / UX',
      'Digital Marketing',
      'Branding',
      'Staff Augmentation'
    ],
    Portfolio: ['VanLock Locksmith', 'Rukan Albait', 'Black Sea Limo', 'Italo Milan', 'Coporate Easy'],
    Industries: ['Logistics', 'Healthcare', 'Travel', 'eCommerce', 'Finance', 'Education', 'Sports'],
    Resources: ['News and Events']
  };

  return (
    <footer className="relative bg-[#050B1A] bg-radial-gradient text-gray-300 pt-16 pb-6 overflow-hidden">
      {/* Background Glow Effect - Updated to Persian Blue */}
      <div className="absolute top-0 right-1/4 w-125 h-75 bg-[#1C39BB]/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* Top Section: Logo & Badge */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 border-b border-gray-800/60 pb-12">
          {/* Logo Container */}
          <div className="flex items-center gap-3">
            <img 
              src="images/logo.png.png" 
              alt="FentixTech Logo" 
              className="h-12 w-auto object-contain"
              onError={(e) => { e.target.style.display = 'none'; }}
            />
            <div>
              {/* Updated branding text color accent */}
              <span className="text-2xl font-bold tracking-wider text-white block">
                FENTIX<span className="text-orange-400">TECH</span>
              </span>
              <span className="text-[10px] tracking-[0.2em] text-gray-400 block uppercase font-medium -mt-1">
                Where Ideas Meets
              </span>
            </div>
          </div>

          {/* Trusted Global Badge - Updated indicator dot & link text color */}
          <div className="flex items-center gap-3 bg-white/5 backdrop-blur-sm border border-white/10 px-5 py-3 rounded-xl max-w-sm">
            <div className="w-2.5 h-2.5 bg-[#1C39BB] rounded-full animate-pulse" />
            <p className="text-sm text-gray-200 font-medium">
              Global Trusted Software Company <span className="text-orange-400">FentixTech</span>
            </p>
          </div>
        </div>

        {/* Middle Section: Links Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-10 py-16">
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category} className="space-y-4">
              {/* Updated header category label titles */}
              <h4 className="text-[#1C39BB] font-bold text-lg tracking-wide capitalize">
                {category}
              </h4>
              <ul className="space-y-2.5 text-sm">
                {links.map((link) => (
                  <li key={link}>
                    <a 
                      href={`#${link.toLowerCase().replace(/\s+/g, '-')}`}
                      className="text-gray-400 hover:text-white transition-colors duration-200 block py-0.5"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Section: Compliance, Socials, Copyright */}
        <div className=" align-center ml-124">
          
           

          {/* Copyright Information */}
          <p className="text-xs text-gray-500 font-medium tracking-wide order-3 lg:order-2 items-center mr-35">
            © 2026 <span className="text-gray-400 hover:text-white transition-colors">FentixTech</span> | All Rights Reserved
          </p>

          {/* Social Icons & Contact Payload */}
          <div className="flex flex-col sm:flex-row items-center gap-6 lg:gap-8 order-2 lg:order-3 w-full sm:w-auto justify-between ml-10">
            {/* Social Links - Updated hover text color and dynamic border lines */}
            <div className="flex items-center gap-4">
              
               {/* WhatsApp */}
<a
  href="https://wa.me/923421915123"
  target="_blank"
  rel="noreferrer"
  className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-[#1C39BB] hover:border-[#1C39BB] transition-all duration-300"
>
  <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
    <path d="M20.52 3.48A11.86 11.86 0 0 0 12.06 0C5.5 0 .16 5.34.16 11.9c0 2.09.55 4.14 1.6 5.95L0 24l6.3-1.66a11.8 11.8 0 0 0 5.76 1.47h.01c6.56 0 11.9-5.34 11.9-11.9 0-3.18-1.24-6.17-3.45-8.43ZM12.07 21.8a9.8 9.8 0 0 1-5-1.36l-.36-.22-3.74.98 1-3.64-.24-.37a9.8 9.8 0 1 1 8.34 4.61Zm5.4-7.34c-.3-.15-1.8-.89-2.08-.99-.28-.1-.48-.15-.68.15-.2.3-.78.99-.96 1.19-.18.2-.35.23-.65.08-.3-.15-1.26-.46-2.4-1.48-.89-.79-1.49-1.76-1.67-2.06-.18-.3-.02-.46.13-.61.14-.14.3-.35.45-.53.15-.18.2-.31.3-.51.1-.2.05-.38-.02-.53-.08-.15-.68-1.64-.93-2.24-.24-.58-.49-.5-.68-.51h-.58c-.2 0-.53.07-.81.38-.28.3-1.08 1.06-1.08 2.59 0 1.53 1.11 3.01 1.27 3.22.15.2 2.2 3.36 5.33 4.7.74.32 1.32.51 1.77.65.74.24 1.41.21 1.94.13.59-.09 1.8-.74 2.05-1.45.25-.71.25-1.32.18-1.45-.07-.13-.27-.2-.57-.35Z"/>
  </svg>
</a>
 
              {/* Instagram */}
              <a href="https://instagram.com" target="_blank" rel="noreferrer" className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-[#1C39BB] hover:border-[#1C39BB] transition-all duration-300">
                <svg className="w-3.5 h-3.5 stroke-current fill-none stroke-2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </a>
              {/* LinkedIn */}
              <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-[#1C39BB] hover:border-[#1C39BB] transition-all duration-300">
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>
            </div>

            {/* Direct Contact Metrics */}
             
          </div>
        </div>
      </div>

      {/* Floating Scroll To Top Button Anchor */}
      <button 
        onClick={scrollToTop}
        aria-label="Scroll to top"
        className="absolute bottom-6 right-6 lg:right-8 bg-[#1A1160] text-white p-3 rounded-lg hover:bg-[#1C39BB] transition-all duration-300 shadow-lg border border-white/10 hover:-translate-y-1"
      >
        <ChevronUp size={16} />
      </button>
    </footer>
  );
};
export default FooterSection;


