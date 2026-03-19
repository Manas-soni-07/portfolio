import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

function Home() {
     const handleWhatsApp = () => {
    const phone = "919516854040";
    const message = "Hii, I want to hire ";

    const isMobile = /iPhone|Android/i.test(navigator.userAgent);

    const url = isMobile
      ? `whatsapp://send?phone=${phone}&text=${encodeURIComponent(message)}`
      : `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;``

    window.open(url, "_blank");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-black via-gray-900 to-black text-white px-5">

      <div className="text-center max-w-2xl">

        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl font-bold"
        >
          Hi, I'm <span className="text-blue-500">Manas Soni</span> 👋
        </motion.h1>

      
        <motion.p
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="mt-6 text-lg md:text-xl text-gray-300"
        >
         React.js Developer 🚀 |  MERN stack Developer <br/>
          I build modern, fast & responsive web apps.<br/>
          Available for <span className="text-blue-500 font-semibold">Freelance Projects</span>
        </motion.p>

       
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="mt-8 flex justify-center gap-4"
        >
          <button onClick={handleWhatsApp} className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-xl font-semibold transition">
            Hire Me
          </button>

          <Link to='/projects'>  <button className="border border-gray-500 hover:border-white px-6 py-3 rounded-xl font-semibold transition">
            View Projects
          </button>
          </Link>
        </motion.div>

        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="mt-10 flex justify-center gap-6 text-xl"
        >
          <a href="https://www.instagram.com/manas_soni_22/" className="hover:text-blue-500">Instagram</a>
          <a href="https://www.linkedin.com/in/manas-soni-185686337/" className="hover:text-blue-400">LinkedIn</a>
          <a href="https://github.com/Manas-soni-07" className="hover:text-gray-400">GitHub</a>
        </motion.div>

      </div>
    </div>
  );
}

export default Home;