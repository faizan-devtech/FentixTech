 import React from "react";
import Tilt from "react-parallax-tilt";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";
import NavDropdown from "./NavDropdown";

const Internship = ({ onApply }) => {
  const reviews = [
    {
      name: "Muhammad Ahmad",
      role: "MERN Stack Intern",
      review:
        "Worked on production-level applications and significantly improved my full-stack development skills.",
    },
    {
      name: "Ayesha Khan",
      role: "Frontend Intern",
      review:
        "Excellent mentorship and exposure to professional development workflows.",
    },
    {
      name: "Ali Raza",
      role: "Web Developer Intern",
      review:
        "A valuable experience that helped me transition from student to professional developer.",
    },
    {
      name: "Hassan Ali",
      role: "React Intern",
      review:
        "Learned real-world React architecture and team collaboration practices.",
    },
    {
      name: "Fatima Noor",
      role: "UI/UX Intern",
      review:
        "Improved my design thinking and worked on real product interfaces.",
    },
    {
      name: "Usman Tariq",
      role: "Backend Intern",
      review:
        "Got strong hands-on experience with Node.js and API development.",
    },
    {
      name: "Zain Ali",
      role: "Full Stack Intern",
      review:
        "Best internship experience with real project exposure and mentorship.",
    },
    {
      name: "Sana Malik",
      role: "Frontend Intern",
      review:
        "Helped me build confidence in building scalable frontend applications.",
    },
    {
      name: "Bilal Khan",
      role: "React Developer Intern",
      review:
        "Very professional environment and structured learning path.",
    },
    {
      name: "Hira Ahmed",
      role: "Software Intern",
      review:
        "Learned teamwork, Git workflow, and real development lifecycle.",
    },
  ];

  return (
    <section id="internship" className="bg-[#F8FAFC] py-16 px-6 lg:px-20">
      <div className="max-w-7xl mx-auto">

        {/* HEADER */}
        <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-6 mb-12">

          <div className="max-w-3xl">
            <span className="inline-block px-3 py-1 text-xs font-semibold bg-blue-50 text-[#1C39BB] rounded-full mb-4">
              INTERNSHIP PROGRAM
            </span>

            <h1 className="text-4xl font-bold text-slate-900">
              Launch Your Career With{" "}
              <span className="text-[#1C39BB]">FentixTech</span>
            </h1>

            <p className="mt-4 text-gray-600 text-lg">
              Gain real-world experience, mentorship, and industry exposure.
            </p>
          </div>

            <NavDropdown onApply={onApply} />
        </div>

        {/* STATS */}
<div className="grid grid-cols-2 lg:grid-cols-4 gap-5 mb-12">
  {[
    { num: "220+", label: "Applications" },
    { num: "50+", label: "Interns Selected" },
    { num: "20+", label: "Projects" },
    { num: "95%", label: "Success Rate" },
  ].map((item, i) => (
    <Tilt
      key={i}
      tiltMaxAngleX={6}
      tiltMaxAngleY={6}
      scale={1.03}
      transitionSpeed={1500}
      className="w-full"
    >
      <div className="bg-white border border-slate-100 rounded-xl p-5 shadow-sm hover:shadow-md transition duration-300 cursor-pointer">
        <h3 className="text-3xl font-bold text-[#1C39BB]">
          {item.num}
        </h3>
        <p className="text-sm text-gray-600 mt-1">
          {item.label}
        </p>
      </div>
    </Tilt>
  ))}
</div>
        {/* REVIEWS */}
        <div>

          <h2 className="text-3xl font-bold text-center mb-10 text-slate-900">
            Intern Success Stories
          </h2>

          <Swiper
            modules={[Autoplay]}
            spaceBetween={28}
            slidesPerView={1}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            breakpoints={{
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
          >
            {reviews.map((review, index) => (
              <SwiperSlide key={index} className="h-auto flex">

                <Tilt
                  tiltMaxAngleX={4}
                  tiltMaxAngleY={4}
                  scale={1.01}
                  className="w-full h-full"
                >
                  <div className="w-full h-full min-h-50 flex flex-col justify-between bg-white border border-slate-100 rounded-2xl p-5 shadow-sm hover:shadow-md transition duration-300">

                    {/* TOP */}
                    <div className="space-y-3">

                      <div>
                        <h3 className="text-sm font-semibold text-slate-900">
                          {review.name}
                        </h3>
                        <p className="text-xs text-[#1C39BB] font-medium">
                          {review.role}
                        </p>
                      </div>

                      <p className="text-sm text-slate-600 leading-relaxed">
                        “{review.review}”
                      </p>

                    </div>

                    {/* BOTTOM */}
                    <div className="flex items-center justify-between mt-5">

                      <div className="text-yellow-500 text-sm">
                        ⭐⭐⭐⭐⭐
                      </div>

                      <span className="text-xs text-slate-400">
                        Verified Intern
                      </span>

                    </div>

                  </div>
                </Tilt>

              </SwiperSlide>
            ))}
          </Swiper>

        </div>

      </div>
    </section>
  );
};

export default Internship;