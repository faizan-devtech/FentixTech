 import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

const Form = () => {
  const form = useRef();
  const [status, setStatus] = useState('');

  const sendEmail = (e) => {
    e.preventDefault();
    setStatus('Sending...');

    const SERVICE_ID = 'service_3i22t6a';
    const TEMPLATE_ID = 'template_faizi';
    const PUBLIC_KEY = '7M0HvYH52TVNDtPgx';

    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY)
      .then(() => {
          setStatus('Message sent!');
          form.current.reset();
          setTimeout(() => setStatus(''), 5000);
      }, (error) => {
          console.error(error.text);
          setStatus('Error. Try again.');
          setTimeout(() => setStatus(''), 5000);
      });
  };

  return (
    // Fixed container ensures the form stays centered and doesn't expand
    <section className="fixed inset-0 flex justify-center items-center bg-gray-50 p-4">
      {/* Decreased width to max-w-sm (standard compact size) */}
      <div className="w-full max-w-sm p-6 bg-white border border-black rounded-lg shadow-sm">
        <h2 className="text-2xl font-bold mb-6 text-black text-center">Contact Us</h2>

        <form ref={form} onSubmit={sendEmail} className="space-y-4">
          <div>
            <label htmlFor="from_name" className="block text-black font-bold text-sm mb-1">Full Name</label>
            <input 
              type="text" 
              name="from_name" 
              id="from_name"
              required 
              placeholder="Name"
              className="w-full px-3 py-2 border border-black rounded-none focus:bg-gray-50 outline-none text-sm"
            />
          </div>

          <div>
            <label htmlFor="reply_to" className="block text-black font-bold text-sm mb-1">Email</label>
            <input 
              type="email" 
              name="reply_to" 
              id="reply_to"
              required 
              placeholder="email@example.com"
              className="w-full px-3 py-2 border border-black rounded-none focus:bg-gray-50 outline-none text-sm"
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-black font-bold text-sm mb-1">Message</label>
            <textarea 
              name="message" 
              id="message"
              rows="3" 
              required 
              placeholder="Message..."
              className="w-full px-3 py-2 border text-black border-black rounded-none focus:bg-gray-50 outline-none resize-none text-sm"
            ></textarea>
          </div>

          <button 
            type="submit" 
            className="w-full py-3 bg-black text-white font-bold text-lg hover:bg-gray-800 transition-colors"
          >
            SUBMIT
          </button>

          {status && (
            <p className="text-center font-bold text-xs text-black mt-2 uppercase tracking-tighter">
              {status}
            </p>
          )}
        </form>
      </div>
    </section>
  );
};

export default Form;