 import React from 'react';

const HeroSection = () => {
  const handleScroll = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -70;
      const y =
        element.getBoundingClientRect().top +
        window.pageYOffset +
        yOffset;

      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen w-full py-20 px-6 md:px-14 lg:px-24 bg-white overflow-hidden flex items-center justify-center"
    >
     
      {/* 🎥 Background Video (unchanged design) */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover opacity-40"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src="/vedios/bg-vedio2.mp4" type="video/mp4" />
      </video>

      {/* Content wrapper (ONLY responsiveness added) */}
      <div className="relative z-10 flex flex-col items-center text-center max-w-4xl px-2 sm:px-4 md:px-6">

        {/* Heading (responsive only) */}
        <h1 className="text-2xl sm:text-3xl md:text-4xl xl:text-5xl font-bold leading-tight tracking-tight">
          <span className="text-orange-500">Accelerating Business</span>
          <br />
          <span className="text-gray-900">
            Growth Through Scalable & Innovative Technology
          </span>
        </h1>

        {/* Paragraph (responsive only) */}
        <p className="text-base sm:text-lg md:text-xl lg:text-2xl font-semibold text-gray-800 mb-6 md:mb-8 mt-4">
          We design, develop, and deliver comprehensive software, prioritizing user
          experience, engagement, and intelligent solutions for diverse platforms.
        </p>

        {/* Button wrapper responsive only */}
        <div className="flex flex-col sm:flex-row gap-4">

          <button
            onClick={() => handleScroll('contact')}
            className="bg-[#1C39BB] text-white hover:bg-[#162f99] transform hover:scale-105 transition-all duration-300 shadow-lg px-6 py-3.5 text-base font-semibold rounded-xl"
          >
            Contact Us
          </button>

        </div>

      </div>
    </section>
  );
};

export default HeroSection;