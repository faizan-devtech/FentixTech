 import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const HiringProcess = () => {
  const form = useRef();
  const [status, setStatus] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();
    setStatus("Sending...");

    const SERVICE_ID = "service_3i22t6a";
    const TEMPLATE_ID = "template_faizi";
    const PUBLIC_KEY = "7M0HvYH52TVNDtPgx";

    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY).then(
      () => {
        setStatus("Message sent successfully!");
        form.current.reset();
        setTimeout(() => setStatus(""), 5000);
      },
      () => {
        setStatus("Failed to send. Please try again.");
        setTimeout(() => setStatus(""), 5000);
      }
    );
  };

  // shared input style
  const inputStyle =
    "w-full px-4 py-3 text-sm border border-gray-300 rounded-sm bg-white " +
    "transition-all duration-300 outline-none " +
    "focus:border-[#1C39BB] focus:ring-4 focus:ring-[#1C39BB]/15 " +
    "focus:scale-[1.02] focus:shadow-lg focus:shadow-[#1C39BB]/10";

  return (
    <section  id="contact" className="  bg-[#f5f5f5] flex items-center justify-center p-6 lg:p-20">
      <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

        {/* LEFT */}
        <div className="space-y-6">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 bg-[#1C39BB] rounded-full"></span>
            <p className="text-gray-600 uppercase tracking-widest text-sm font-semibold">
              About Us
            </p>
          </div>

          <h1 className="text-5xl md:text-5xl font-semibold text-slate-900 leading-tight">
            Our journey of <br /> building success
          </h1>

          <p className="text-gray-500 text-lg max-w-md">
            FentixTech is a leading IT service provider dedicated to helping businesses grow.
          </p>

          <button className="bg-[#1C39BB] text-white text-sm px-4 py-3 rounded-lg font-bold shadow-lg shadow-blue-200 hover:bg-blue-800 transition-all">
            About FentixTech
          </button>
        </div>

        {/* RIGHT FORM */}
        <div className="flex justify-center md:justify-end">
          <div className="w-full max-w-sm p-6 bg-white border border-gray-300 rounded-xl shadow-sm">

            <h2 className="text-2xl font-bold mb-6 text-black text-center">
              Contact Us
            </h2>

            <form ref={form} onSubmit={sendEmail} className="space-y-4">

              {/* Name */}
              <div>
                <label className="block text-black font-semibold text-xs mb-1">
                  Full Name
                </label>
                <input
                  type="text"
                  name="from_name"
                  required
                  className={inputStyle}
                />
              </div>

              {/* Email */}
              <div>
                <label className="block text-black font-semibold text-xs mb-1">
                  Email
                </label>
                <input
                  type="email"
                  name="reply_to"
                  required
                  className={inputStyle}
                />
              </div>

              {/* Message */}
              <div>
                <label className=" block text-black font-semibold text-xs mb-1   ">
                  Message
                </label>
                <textarea
                  name="message"
                  rows="3"
                  required
                  className={inputStyle}
                />
              </div>

              {/* Submit */}
              <button
                type="submit"
                className=" w-full px-6 py-3 text-sm font-semibold text-white bg-[#1C39BB]
             rounded-lg hover:bg-blue-800 transition-all shadow-sm
"
              >
                SUBMIT
              </button>

              {status && (
                <p className="text-center font-bold text-[11px] text-[#1C39BB] mt-2 uppercase">
                  {status}
                </p>
              )}
            </form>
          </div>
        </div>

      </div>
    </section>
  );
};

export default HiringProcess;