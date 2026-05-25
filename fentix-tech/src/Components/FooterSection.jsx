 import React from 'react';
import { ChevronUp } from 'lucide-react';

const FooterSection = ({ goHome }) => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
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
      'Staff Augmentation',
    ],
    Portfolio: [
      'VanLock Locksmith',
      'Rukan Albait',
      'Black Sea Limo',
      'Italo Milan',
      'Corporate Easy',
    ],
    Industries: [
      'Logistics',
      'Healthcare',
      'Travel',
      'eCommerce',
      'Finance',
      'Education',
      'Sports',
    ],
    Resources: ['News and Events'],
  };

  return (
    <footer className="relative bg-[#050B1A] text-gray-300 pt-16 pb-6 overflow-hidden">

      {/* Background Glow */}
      <div className="absolute top-0 right-1/4 w-125 h-75 bg-[#1C39BB]/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">

        {/* Top Section */}
        <div className="border-b border-gray-800/60 pb-10">

          {/* Logo */}
          <div
            onClick={goHome}
            className="flex items-center gap-0.5 cursor-pointer select-none w-fit"
          >
            <img
              src="/images/logo.png"
              alt="Logo"
              className="h-10 w-10 object-contain"
            />

            <div className="mr-4 text-lg uppercase font-bold leading-none">
              <span className="text-[#1C39BB]">Fentix</span>
              <span className="text-orange-500">Tech</span>
            </div>
          </div>
        </div>

        {/* Links Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-10 py-14">

          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category} className="space-y-4">

              <h4 className="text-[#1C39BB] font-semibold text-lg tracking-wide">
                {category}
              </h4>

              <ul className="space-y-2.5 text-sm">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href={`#${link.toLowerCase().replace(/\s+/g, '-')}`}
                      className="text-gray-400 hover:text-white transition-all duration-300"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>

            </div>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800/60 pt-8 flex flex-col items-center justify-center gap-5 text-center">

          {/* Social Icons */}
          <div className="flex items-center gap-4">

            {/* WhatsApp */}
            <a
              href="https://wa.me/923421915123"
              target="_blank"
              rel="noreferrer"
              className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-[#1C39BB] hover:border-[#1C39BB] hover:-translate-y-1 transition-all duration-300"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M20.52 3.48A11.86 11.86 0 0 0 12.06 0C5.5 0 .16 5.34.16 11.9c0 2.09.55 4.14 1.6 5.95L0 24l6.3-1.66a11.8 11.8 0 0 0 5.76 1.47h.01c6.56 0 11.9-5.34 11.9-11.9 0-3.18-1.24-6.17-3.45-8.43Z" />
              </svg>
            </a>

            {/* Instagram */}
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noreferrer"
              className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-[#1C39BB] hover:border-[#1C39BB] hover:-translate-y-1 transition-all duration-300"
            >
              <svg
                className="w-4 h-4 stroke-current fill-none stroke-2"
                viewBox="0 0 24 24"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect x="2" y="2" width="20" height="20" rx="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
              </svg>
            </a>

            {/* LinkedIn */}
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noreferrer"
              className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-[#1C39BB] hover:border-[#1C39BB] hover:-translate-y-1 transition-all duration-300"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg>
            </a>

          </div>

          {/* Copyright */}
          <p className="text-sm text-gray-500 tracking-wide">
            © 2026
            <span className="text-gray-300 hover:text-white transition-colors cursor-pointer">
              {' '}FentixTech
            </span>
            {' '}| All Rights Reserved
          </p>

        </div>
      </div>

      {/* Scroll To Top */}
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