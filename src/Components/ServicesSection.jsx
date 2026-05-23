 import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFigma } from "@fortawesome/free-brands-svg-icons";

import {
  faCode,
  faMobileVibrate,
  faFileCode,
  faMicrochip,
  faBullhorn,
  faPalette,
  faUsers,
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
    {
      icon: faPalette,
      title: "Branding",
      desc: "Building a strong and unique brand identity that resonates with customers and builds long-term trust.",
    },
    {
      icon: faUsers,
      title: "Staff Augmentation",
      desc: "Skilled professionals seamlessly integrate with your team to scale workforce and accelerate project delivery.",
    },
  ];

  return (
    <section
      id="services"
      className="w-full py-20 px-6 md:px-12 lg:px-24 bg-white overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <div className="flex items-center gap-2 mb-4">
          <span className="w-2 h-2 bg-blue-700 rounded-full"></span>
          <p className="text-black uppercase tracking-wider text-sm">
            Our Services
          </p>
        </div>

        <h1 className="text-black text-4xl md:text-5xl font-semibold">
          What We Are Offering
        </h1>

        <p className="text-gray-700 text-lg max-w-3xl mt-5 leading-relaxed">
          FentixTech is a dynamic technology solutions provider dedicated to
          helping businesses navigate and thrive in the digital era.
        </p>

        {/* Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md p-6 border-[1.4px] border-black hover:border-blue-500 hover:-translate-y-2 transition-all duration-300"
            >
              {/* Smaller Icons */}
              <FontAwesomeIcon
                icon={service.icon}
                className="text-black text-3xl mb-4"
              />

              {/* One-Line Title */}
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