 import React from "react";

const AboutSection = () => {
  return (
    <section className="w-full py-16 px-6 md:px-14 lg:px-24 bg-[#f5f5f5] ">
      
      {/* 🔷 Top Heading */}
      <div className="max-w-7xl mx-auto text-center mb-12">
        <h1 className="text-3xl md:text-5xl font-semibold">
          About Us
        </h1>
        <p className="text-gray-600 mt-3 text-sm md:text-base max-w-2xl mx-auto">
          We build scalable and innovative digital solutions for modern businesses.
        </p>
      </div>

      {/* 🔷 Main Content (2 columns) */}
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-10">
        
        {/* 📄 Left: Text Content */}
        <div className="w-full lg:w-1/2">
          <h2 className="text-3xl md:text-4xl font-semibold mb-4">
            Who We Are
          </h2>

          <p className="text-gray-600 leading-relaxed mb-4">
 FentixTech is committed to engineering technology solutions that enable businesses to scale with confidence. From modern web applications to customized software systems, we focus on building digital experiences that are reliable, efficient, and future-ready. Our team combines innovation, precision, and industry expertise to transform complex challenges into impactful technology solutions that support sustainable business growth.
          </p>

          <p className="text-gray-600 leading-relaxed mb-6">
            Our mission is to help businesses grow by delivering reliable,
            efficient, and user-friendly software solutions using cutting-edge technologies.
          </p>

          
        </div>

        {/* 🖼 Right: Image */}
        <div className="w-full lg:w-1/2 flex justify-center">
          <img
            src="/images/about-png.png"
            alt="About Us"
            className="w-full max-w-md rounded-xl shadow-lg object-cover"
          />
        </div>

      </div>
    </section>
  );
};

export default AboutSection;