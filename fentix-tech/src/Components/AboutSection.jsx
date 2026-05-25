 import React from "react";

const AboutSection = () => {
  return (
    <section className="w-full bg-[#f5f5f5] py-16 sm:py-20 px-6 md:px-14 lg:px-24">

      {/* TOP HEADING */}
      <div className="max-w-6xl mx-auto text-center mb-14">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900">
          About Us
        </h1>

        <p className="text-gray-600 mt-4 text-sm sm:text-base md:text-lg max-w-2xl mx-auto">
          We build scalable, reliable, and innovative digital solutions for modern businesses.
        </p>
      </div>

      {/* MAIN GRID */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

        {/* LEFT CONTENT */}
        <div className="space-y-6">

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-slate-900">
            Who We Are
          </h2>

          <p className="text-gray-600 leading-relaxed text-sm sm:text-base md:text-lg">
            FentixTech is a technology-driven company focused on building modern
            web applications, scalable software systems, and intuitive digital
            experiences. We combine innovation, engineering excellence, and
            industry expertise to deliver high-performance solutions.
          </p>

          <p className="text-gray-600 leading-relaxed text-sm sm:text-base md:text-lg">
            Our mission is to empower businesses with reliable, efficient, and
            future-ready digital products that drive growth and long-term success.
          </p>

        </div>

         
        <div className="flex justify-center lg:justify-end">
          <img
            src="/images/about-png.png"
            alt="About FentixTech"
            className=" h-100 width-100 rounded-xl shadow-lg"
          />
        </div>

      </div>
    </section>
  );
};

export default AboutSection;