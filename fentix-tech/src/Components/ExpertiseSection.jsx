 import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faReact,
  faNodeJs,
  faPython,
  faPhp,
  faLaravel,
  faAngular,
  faVuejs,
  faJs,
  faHtml5,
  faCss3Alt,
  faSwift,
  faAndroid,
  faApple,
} from "@fortawesome/free-brands-svg-icons";

import {
  faDatabase,
  faCloud,
  faBrain,
  faRobot,
  faMobileScreenButton,
  faCode,
  faServer,
  faPenNib,
  faMicrochip,
  faLeaf,
} from "@fortawesome/free-solid-svg-icons";

const SkillSection = () => {
  const [activeTab, setActiveTab] = useState("Web Platforms");

  const skillsData = {
    "Web Platforms": [
      {
        category: "Frontend",
        items: [
          { name: "React js", icon: faReact },
          { name: "Next.Js", icon: faCode },
          { name: "Angular", icon: faAngular },
          { name: "Vue", icon: faVuejs },
          { name: "Typescript", icon: faJs },
          { name: "Html5", icon: faHtml5 },
          { name: "CSS", icon: faCss3Alt },
          { name: "Javascript", icon: faJs },
          { name: "Rest API", icon: faServer },
        ],
      },
      {
        category: "Backend",
        items: [
          { name: "Node.js", icon: faNodeJs },
          { name: "Python", icon: faPython },
          { name: "Nest.Js", icon: faServer },
          { name: "Php", icon: faPhp },
          { name: "Laravel", icon: faLaravel },
          { name: "Django", icon: faPython },
          { name: "Flask", icon: faPython },
        ],
      },
    ],

    "Mobile Apps": [
      {
        category: "Cross Platforms",
        items: [
          { name: "Flutter", icon: faMobileScreenButton },
          { name: "React Native", icon: faReact },
        ],
      },
      {
        category: "Android",
        items: [
          { name: "Kotlin", icon: faAndroid },
          { name: "MVVM", icon: faCode },
          { name: "Java", icon: faAndroid },
          { name: "Retrofit", icon: faCloud },
          { name: "Jetpack", icon: faAndroid },
        ],
      },
      {
        category: "iOS",
        items: [
          { name: "Swift", icon: faSwift },
          { name: "UIKit", icon: faApple },
          { name: "Core Data", icon: faDatabase },
          { name: "MVVM", icon: faCode },
        ],
      },
    ],

    "AI ML & GenAI": [
      {
        category: "AI & ML Frameworks",
        items: [
          { name: "TensorFlow", icon: faBrain },
          { name: "PyTorch", icon: faMicrochip },
          { name: "Keras", icon: faRobot },
          { name: "Scikit-learn", icon: faBrain },
          { name: "Generative AI", icon: faRobot },
          { name: "LLMs", icon: faBrain },
        ],
      },
    ],

    "UI/UX": [
      {
        category: "Design Tools",
        items: [
          { name: "Figma", icon: faPenNib },
          { name: "Adobe XD", icon: faPenNib },
          { name: "Sketch", icon: faPenNib },
        ],
      },
    ],

    Database: [
      {
        category: "Databases",
        items: [
          { name: "MongoDB", icon: faLeaf },
          { name: "MySQL", icon: faServer },
          { name: "MsSQL", icon: faDatabase },
          { name: "PostgreSQL", icon: faDatabase },
        ],
      },
    ],
  };

  const tabs = Object.keys(skillsData);

  return (
    <section id="expertise" className="w-full bg-[#f5f5f5] py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* HEADER */}
        <div className="mb-12 md:mb-16 text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl  font-bold text-gray-900 leading-tight">
            Our Expertise
          </h2>

          <p className="max-w-3xl mx-auto mt-5 text-base sm:text-lg md:text-xl text-gray-600 leading-relaxed">
         Collaborate with a vetted pool of specialized engineering talent across web, mobile, and software domains. Our experts bring deep proficiency in modern frameworks and scalable systems, empowering businesses to rapidly scale development teams and achieve faster, high-quality product delivery.”
          </p>
        </div>

        {/* MAIN LAYOUT */}
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 border-t border-gray-200 pt-10 md:pt-12">

          {/* SIDEBAR */}
          <div className="w-full lg:w-72 shrink-0">
            <div className="
              flex lg:flex-col 
              gap-3 
              overflow-x-auto lg:overflow-visible 
              pb-3 lg:pb-0
              scrollbar-hide
            ">
              {tabs.map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`whitespace-nowrap lg:whitespace-normal
                    px-5 py-3 
                    rounded-full 
                    text-sm md:text-base 
                    font-medium 
                    transition-all duration-300 
                    shrink-0 lg:shrink
                    ${
                      activeTab === tab
                        ? "bg-linear-to-r from-[#E8EBFA] to-white text-black border-l-4 border-[#1C39BB] shadow-sm"
                        : "text-gray-700 hover:bg-white"
                    }
                  `}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>

          {/* CONTENT */}
          <div className="flex-1 min-w-0">

            {skillsData[activeTab].map((section, idx) => (
              <div key={idx} className="mb-10 md:mb-14">

                <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold text-gray-900 mb-6 md:mb-8">
                  {section.category}
                </h3>

                <div className="flex flex-wrap gap-3 md:gap-4">

                  {section.items.map((skill) => (
                    <div
                      key={skill.name}
                      className="group flex items-center gap-3 bg-white hover:bg-black
                      px-4 md:px-5
                      h-12 md:h-14
                      rounded-full
                      shadow-sm hover:shadow-lg
                      transition-all duration-300
                      hover:-translate-y-1
                      cursor-pointer"
                    >
                      <div className="w-8 h-8 md:w-9 md:h-9 flex items-center justify-center rounded-full bg-gray-100">
                        <FontAwesomeIcon
                          icon={skill.icon}
                          className="text-xs md:text-sm text-gray-600 group-hover:text-black"
                        />
                      </div>

                      <span className="text-xs sm:text-sm md:text-base font-medium text-gray-900 group-hover:text-white transition-colors duration-300">
                        {skill.name}
                      </span>
                    </div>
                  ))}

                </div>
              </div>
            ))}

          </div>
        </div>

      </div>
    </section>
  );
};

export default SkillSection;