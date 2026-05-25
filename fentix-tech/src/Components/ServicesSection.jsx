 import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFigma } from "@fortawesome/free-brands-svg-icons";

import {
  faCode,
  faMobileVibrate,
  faFileCode,
  faMicrochip,
  faBullhorn,
} from "@fortawesome/free-solid-svg-icons";

const ServicesSection = () => {
  const services = [
    {
      icon: faCode,
      title: "Web Development",
      desc: "We create software from custom solutions to system updates that improve operational efficiency and foster innovation.",
    },
    {
      icon: faMobileVibrate,
      title: "Mobile Development",
      desc: "Our mobile applications are responsive, user-friendly, and built to meet your business requirements.",
    },
    {
      icon: faFileCode,
      title: "Custom Development",
      desc: "We craft tailored solutions designed for your business needs, improving efficiency and innovation.",
    },
    {
      icon: faMicrochip,
      title: "AI / ML / GenAI",
      desc: "Using AI and machine learning to create intelligent solutions that improve decisions and business growth.",
    },
    {
      icon: faFigma,
      title: "UI / UX Design",
      desc: "Creating modern and intuitive user interfaces that improve user experiences and satisfaction.",
    },
    {
      icon: faBullhorn,
      title: "Digital Marketing",
      desc: "Data-driven marketing strategies to increase visibility, engage audiences, and drive measurable growth.",
    },
  ];

  return (
    <section
      id="services"
      className="w-full py-20 px-6 md:px-12 lg:px-24 bg-white overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        
        {/* Heading */}
        <h1 className="text-black text-4xl md:text-5xl font-bold text-center leading-tight">
          Our Services
        </h1>

        <p className="text-gray-700 text-lg max-w-3xl mt-5 leading-relaxed text-center mx-auto">
          FentixTech is a dynamic technology solutions provider dedicated to
          helping businesses navigate and thrive in the digital era.
        </p>

        {/* Cards (FIXED RESPONSIVE GRID) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 mt-16">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md p-6 border-[1.4px] border-[#1C39BB] hover:border-blue-500 hover:-translate-y-2 transition-all duration-300"
            >
              <FontAwesomeIcon
                icon={service.icon}
                className="text-[#1C39BB] text-3xl mb-4"
              />

              <h3 className="font-bold text-black text-lg mb-3 whitespace-nowrap overflow-hidden text-ellipsis">
                {service.title}
              </h3>

              <p className="text-gray-700 text-sm leading-relaxed">
                {service.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;