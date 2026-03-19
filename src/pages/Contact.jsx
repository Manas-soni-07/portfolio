import React from "react";
import { motion } from "framer-motion";

function Contact() {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message sent! (Demo purpose)");
  };
 
  
const handleWhatsApp = () => {
    const phone = "919516854040";
    const message = "Hi, I want to hire you";

    const isMobile = /iPhone|Android/i.test(navigator.userAgent);

    const url = isMobile
      ? `whatsapp://send?phone=${phone}&text=${encodeURIComponent(message)}`
      : `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;``

    window.open(url, "_blank");
  };

  
  return (
    <div className="min-h-screen bg-gray-900 text-white p-10 flex flex-col items-center pt-20">
      
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl font-bold mb-10"
      >
        Contact Me
      </motion.h1>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="mb-10 text-center"
      >
        <p className="mb-2">
          Email: <span className="text-blue-500">manassoninit07@gmail.com</span>
        </p>
        <p>
          Phone: <span className="text-blue-500">+919516854040</span>
        </p>
      </motion.div>

  
      <motion.form
        onSubmit={handleSubmit}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="w-full max-w-md flex flex-col gap-4"
      >
        <input
          type="text"
          placeholder="Your Name"
          className="p-3 rounded-lg bg-gray-800 border border-gray-700 focus:border-blue-500 outline-none"
          required
        />
        <input
          type="email"
          placeholder="Your Email"
          className="p-3 rounded-lg bg-gray-800 border border-gray-700 focus:border-blue-500 outline-none"
          required
        />
        <textarea
          placeholder="Your Message"
          rows="5"
          className="p-3 rounded-lg bg-gray-800 border border-gray-700 focus:border-blue-500 outline-none"
          required
        ></textarea>

        <button
          type="submit"
          className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-xl font-semibold transition"
        >
          Send Message
        </button>
      </motion.form>

   
      <button
      onClick={handleWhatsApp}
      className="fixed bottom-5 right-5 bg-green-500 text-white p-4 rounded-full shadow-lg hover:scale-110 transition transform"
    >
      WhatsApp
    </button>
    </div>
  );
}

export default Contact;