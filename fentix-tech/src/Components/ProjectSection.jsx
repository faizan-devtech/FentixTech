 import React from "react";

const projects = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description:
      "Complete online shopping platform with cart, payment gateway and admin dashboard.",
    image: "https://images.unsplash.com/photo-1556740749-887f6717d7e4",
    tech: ["React", "Node.js", "MongoDB"],
    category: "Full Stack",
  },
  {
    id: 2,
    title: "Company Portfolio Website",
    description:
      "Modern business website with smooth animations and responsive design.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f",
    tech: ["React", "Tailwind", "Framer Motion"],
    category: "React",
  },
  {
    id: 3,
    title: "HR Management System",
    description:
      "Employee and attendance management system with analytics dashboard.",
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f",
    tech: ["React", "Express", "MySQL"],
    category: "Full Stack",
  },
  {
    id: 4,
    title: "Hospital Management System",
    description:
      "Healthcare system for appointments, patient records and doctor management.",
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef",
    tech: ["React", "Firebase", "Tailwind"],
    category: "Backend",
  },
  {
    id: 5,
    title: "Real Estate Platform",
    description:
      "Property listing and booking platform with advanced search and admin panel.",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa",
    tech: ["Next.js", "MongoDB", "Stripe"],
    category: "Full Stack",
  },
  {
    id: 6,
    title: "LMS for Students",
    description:
      "Online learning platform for courses, quizzes and student progress.",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3",
    tech: ["React", "Node.js", "PostgreSQL"],
    category: "Full Stack",
  },
];

const ProjectSection = () => {
  const filtered = projects;

  return (
    <section className="relative w-full  bg-white text-gray-900 py-20 px-6 md:px-12 overflow-hidden">

      {/* FIXED BACKGROUND LAYER */}
      <div className="absolute inset-0 bg-white pointer-events-none z-0" />

      {/* CONTENT WRAPPER */}
      <div className="relative z-10">

        {/* Heading */}
        <div className="text-center mb-12">
          <span className="text-blue-700 uppercase tracking-widest text-sm font-semibold">
            Our Work
          </span>

          <h2 className="text-4xl md:text-5xl font-bold mt-3">
            Featured Projects
          </h2>

          <p className="text-gray-600 mt-5 max-w-2xl mx-auto">
            We build scalable and modern digital products for businesses.
          </p>
        </div>

        {/* Grid */}
        <div className="max-w-7xl mx-auto grid gap-8 sm:grid-cols-2 lg:grid-cols-3">

          {filtered.map((project) => (
            <div
              key={project.id}
              className="group flex flex-col bg-white border border-gray-200 rounded-3xl overflow-hidden shadow-md
              transition-all duration-500 transform-gpu will-change-transform
              hover:-translate-y-2 hover:shadow-xl"
            >

              {/* IMAGE */}
              <div className="relative overflow-hidden bg-white">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-60 object-cover bg-white
                  transition-transform duration-700 will-change-transform
                  group-hover:scale-110"
                />

                {/* SAFE OVERLAY (NO BLACK FLASH) */}
                <div className="absolute inset-0 bg-linear-to-t from-black/10 via-transparent to-transparent pointer-events-none" />
              </div>

              {/* CONTENT */}
              <div className="flex flex-col flex-1 p-6 bg-white">

                <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-700 transition-colors">
                  {project.title}
                </h3>

                <p className="text-gray-600 text-sm leading-relaxed my-4">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((item, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 rounded-full text-xs bg-blue-50 text-blue-700 border border-blue-200"
                    >
                      {item}
                    </span>
                  ))}
                </div>

                <button className="mt-auto w-full py-3 rounded-xl bg-blue-700 hover:bg-blue-800 transition text-white font-medium">
                  View Details
                </button>

              </div>
            </div>
          ))}

        </div>
      </div>

    </section>
  );
};

export default ProjectSection;