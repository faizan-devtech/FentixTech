 import React from "react";

const WhatsAppFloat = () => {
  const phoneNumber = "923421915123";

  return (
    <a
      href={`https://wa.me/${phoneNumber}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="
        fixed
        bottom-4 sm:bottom-6
        left-4 sm:left-6
        z-50
        w-14 sm:w-16 md:w-20
        h-14 sm:h-16 md:h-20
        rounded-full
        bg-green-500
        flex
        items-center
        justify-center
        shadow-lg
        hover:scale-110
        transition-all
        duration-300
        animate-pulse
      "
    >
      <img
        src="https://cdn-icons-png.flaticon.com/512/733/733585.png"
        alt="WhatsApp"
        className="w-8 sm:w-10 md:w-12 h-8 sm:h-10 md:h-12"
      />
    </a>
  );
};

export default WhatsAppFloat;