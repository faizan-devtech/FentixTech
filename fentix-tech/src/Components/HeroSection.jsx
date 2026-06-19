 import NavDropdown from "./NavDropdown";

const HeroSection = ({ onApply }) => {
  const handleScroll = (id) => {
    const element = document.getElementById(id);

    if (element) {
      const yOffset = -70;

      const y =
        element.getBoundingClientRect().top +
        window.pageYOffset +
        yOffset;

      window.scrollTo({
        top: y,
        behavior: "smooth",
      });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen w-full py-20 px-6 md:px-14 lg:px-24 bg-white overflow-hidden flex items-center justify-center"
    >
      {/* Background Video */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover opacity-40"
        autoPlay
        loop
        muted
        playsInline
      >
        <source
          src="/vedios/bg-vedio2.mp4"
          type="video/mp4"
        />
      </video>

      {/* Overlay */}
      <div className="absolute inset-0 bg-white/30"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center text-center max-w-4xl px-2 sm:px-4 md:px-6">
        <h1 className="text-3xl sm:text-4xl md:text-5xl xl:text-6xl font-bold leading-tight tracking-tight">
          <span className="text-orange-500">
            Accelerating Business
          </span>

          <br />

          <span className="text-gray-900">
            Growth Through Scalable &
            <br />
            Innovative Technology
          </span>
        </h1>

        <p className="text-base sm:text-lg md:text-xl lg:text-2xl font-semibold text-gray-800 mt-6 mb-8">
          We design, develop, and deliver comprehensive
          software solutions, prioritizing user experience,
          engagement, and intelligent technologies for
          businesses worldwide.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4">
          <button
            onClick={() => handleScroll("contact")}
            className="px-5 py-2 text-sm font-medium bg-white text-[#1C39BB] border-2 border-[#1C39BB] rounded-lg transition-all duration-300 hover:text-orange-400 hover:border-orange-400"
          >
            Contact Us
          </button>

          {/* Apply Button */}
          <NavDropdown onApply={onApply} />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;