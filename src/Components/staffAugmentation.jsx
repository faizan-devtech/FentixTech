 import React, { useState } from 'react';

const StaffAugmentation = () => {
  const [activeTab, setActiveTab] = useState('dedicated');

  const content = {
    dedicated: {
      subHeader: "Our Experts will Drive Your Vision",
      title: "Build your own team",
      description:
        "You can choose the team of skilled, proficient and dedicated developers that perfectly matches your business needs and efficiently creates the product with agile methodology. You pay for the week or month of work completed by the team.",
      buttonText: "Hire Now",
      image: "images/group-img.jpg",
    },
    fixed: {
      subHeader: "Your Search for Skilled Professionals ends here",
      title: "Fixed Price Project",
      description:
        "Recommended for the projects with a fixed budget as our developers can empower your business with speed, scalability and agility. We take full responsibility of your product from user and market research to design, development and maintenance.",
      buttonText: "Discuss Now",
      image: "images/group-img.jpg",
    },
  };

  const activeData = content[activeTab];

  return (
    <section className="bg-[#f5f5f5] py-20 px-4 md:px-8 font-sans">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-2 text-[#1C39BB] mb-2">
            <div className="w-1.5 h-1.5 rounded-full bg-[#1C39BB]"></div>
            <span className="text-sm font-medium">Staff Augmentation</span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-neutral-800 tracking-tight">
            Engagement Models
          </h2>
        </div>

        {/* Tabs */}
        <div className="flex flex-col md:flex-row gap-4 mb-16 max-w-4xl mx-auto">
          <button
            onClick={() => setActiveTab('dedicated')}
            className={`flex-1 py-4 px-8 rounded-xl font-semibold transition-all duration-300 text-lg
              ${
                activeTab === 'dedicated'
                  ? 'bg-[#1C39BB] text-white shadow-lg shadow-blue-200'
                  : 'bg-neutral-100 text-neutral-500 hover:bg-neutral-200'
              }`}
          >
            Dedicated Team Model
          </button>

          <button
            onClick={() => setActiveTab('fixed')}
            className={`flex-1 py-4 px-8 rounded-xl font-semibold transition-all duration-300 text-lg
              ${
                activeTab === 'fixed'
                  ? 'bg-[#1C39BB] text-white shadow-lg shadow-blue-200'
                  : 'bg-neutral-100 text-neutral-500 hover:bg-neutral-200'
              }`}
          >
            Fixed Price Project
          </button>
        </div>

        {/* Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Text */}
          <div className="order-2 lg:order-1 space-y-6">

            <div className="flex items-center gap-2 text-neutral-700">
              <div className="w-1.5 h-1.5 rounded-full bg-[#1C39BB]"></div>
              <span className="text-sm font-medium">{activeData.subHeader}</span>
            </div>

            <h3 className="text-4xl md:text-5xl font-bold text-neutral-900">
              {activeData.title}
            </h3>

            <p className="text-neutral-600 text-lg leading-relaxed max-w-xl">
              {activeData.description}
            </p>

            <button className="bg-[#1C39BB]  ld py-3. 5 px-10 rounded-full transition-all duration-300 shadow-md hover:shadow-blue-200">
              {activeData.buttonText}
            </button>
          </div>

          {/* Image */}
          <div className="order-1 lg:order-2">
            <div className="rounded-3xl overflow-hidden shadow-xl">
              <img
                src={activeData.image}
                alt={activeData.title}
                className="w-full h-auto object-cover"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default StaffAugmentation;