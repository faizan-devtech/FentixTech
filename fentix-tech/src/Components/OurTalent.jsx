 import React, { useRef } from 'react';

const talentData = [
  {
    name: "Noman Tariq",
    role: "Backend Developer",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=400"
  },
  {
    name: "Asfand Yar",
    role: "Graphic Designer",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=400"
  },
  {
    name: "Asim Tariq",
    role: "Mobile Developer",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=400"
  },
  {
    name: "Muhammad Haris",
    role: "CMS Developer",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=400"
  },
];

const OurTalent = () => {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const { scrollLeft } = scrollRef.current;
      const moveAmount = 300;

      scrollRef.current.scrollTo({
        left:
          direction === "left"
            ? scrollLeft - moveAmount
            : scrollLeft + moveAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="bg-white text-black py-16 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-24">

        {/* Header */}
        <div className="flex justify-between items-end mb-12">
          <div className="space-y-2">
            

            <h2 className="text-4xl md:text-5xl font-semibold tracking-tight">
              Meet Our Talent
            </h2>
          </div>
        </div>

        {/* Slider */}
        <div className="relative group">

          {/* Left Arrow */}
          <button
            onClick={() => scroll('left')}
            className="absolute -left-4 lg:-left-16 top-1/2 -translate-y-1/2 z-20 p-4 rounded-full border border-gray-300 bg-white shadow-md hover:border-[#1C39BB] hover:text-[#1C39BB] text-black transition-all opacity-0 group-hover:opacity-100 hidden md:flex"
          >
            <svg
              width="20"
              height="20"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="3"
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>

          {/* Right Arrow */}
          <button
            onClick={() => scroll('right')}
            className="absolute -right-4 lg:-right-16 top-1/2 -translate-y-1/2 z-20 p-4 rounded-full border border-gray-300 bg-white shadow-md hover:border-[#1C39BB] hover:text-[#1C39BB] text-black transition-all opacity-0 group-hover:opacity-100 hidden md:flex"
          >
            <svg
              width="20"
              height="20"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="3"
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>

          {/* Cards */}
          <div
            ref={scrollRef}
            className="flex overflow-x-auto gap-6 pb-6 no-scrollbar snap-x snap-mandatory scroll-smooth"
          >
            {talentData.map((talent, index) => (
              <div
                key={index}
                className="min-w-65 bg-white border border-gray-200 rounded-[35px] p-6 flex flex-col items-center group/card transition-all duration-500 hover:border-[#1C39BB] hover:shadow-xl"
              >
                {/* Image */}
                <div className="relative w-40 h-40 mb-5">
                  <div className="absolute inset-0 rounded-full border border-gray-300 group-hover/card:border-[#1C39BB] transition-all duration-500"></div>

                  <div className="w-full h-full rounded-full overflow-hidden relative z-10">
                    <img
                      src={talent.image}
                      alt={talent.name}
                      className="w-full h-full object-cover grayscale group-hover/card:grayscale-0 transition-all duration-700"
                    />
                  </div>
                </div>

                {/* Info */}
                <div className="text-center">
                  <h3 className="text-xl font-bold mb-1 group-hover/card:text-[#1C39BB] transition-colors">
                    {talent.name}
                  </h3>

                  <p className="text-gray-500 text-xs font-semibold uppercase tracking-wider">
                    {talent.role}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style
        dangerouslySetInnerHTML={{
          __html: `
            .no-scrollbar::-webkit-scrollbar {
              display: none;
            }
          `,
        }}
      />
    </section>
  );
};

export default OurTalent;