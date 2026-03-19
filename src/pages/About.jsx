import React from "react";
import { motion } from "framer-motion";
import profilePic from "../assets/my1.png";

function About() {
  return (
    <div className="pt-20 min-h-screen bg-gray-900 text-white flex flex-col md:flex-row items-center justify-center gap-10 p-10">

      {/* Profile Image */}
      <motion.div
        initial={{ x: -150, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="w-64 h-64 rounded-full overflow-hidden border-4 border-gradient-to-br from-blue-500 to-purple-500 shadow-lg flex-shrink-0"
      >
        <img
          src={profilePic}
          alt="Manas Soni"
          className="w-full h-full object-cover"
        />
      </motion.div>

     
      <motion.div
        initial={{ x: 150, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="max-w-xl"
      >
        <h1 className="text-4xl font-bold mb-4">
          About Me
        </h1>

        <p className="text-gray-300 mb-4">
          Hi, I’m <span className="text-blue-500 font-semibold">Manas Soni</span>, a passionate Frontend Developer specializing in React.js. I build modern, responsive, and high-performance web applications.
        </p>

        <p className="text-gray-300 mb-6">
          Hands-on experience with HTML, CSS, JavaScript, React, Tailwind CSS, Node.js, MongoDB. I’m always eager to learn new technologies and create amazing web experiences.
        </p>

    
        <div className="mt-6">
          <h2 className="text-2xl font-semibold mb-4 border-b border-gray-700 pb-2">Skills</h2>

    
          <div className="mb-4">
            <h3 className="text-xl font-medium text-blue-400 mb-2">Frontend</h3>
            <div className="flex flex-wrap gap-3">
              {["React.js", "JavaScript", "HTML", "CSS", "Tailwind CSS", "Redux", "Framer Motion"].map((skill, idx) => (
                <motion.span
                  key={idx}
                  whileHover={{ scale: 1.1 }}
                  className="px-3 py-1 bg-gray-800 rounded-full text-blue-300 text-sm font-medium cursor-pointer shadow-md hover:bg-blue-900 transition"
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </div>

   
          <div className="mb-4">
            <h3 className="text-xl font-medium text-green-400 mb-2">Backend</h3>
            <div className="flex flex-wrap gap-3">
              {["Node.js", "Express.js", "MongoDB"].map((skill, idx) => (
                <motion.span
                  key={idx}
                  whileHover={{ scale: 1.1 }}
                  className="px-3 py-1 bg-gray-800 rounded-full text-green-300 text-sm font-medium cursor-pointer shadow-md hover:bg-green-900 transition"
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </div>


          <div className="mb-4">
            <h3 className="text-xl font-medium text-yellow-400 mb-2">Tools & Others</h3>
            <div className="flex flex-wrap gap-3">
              {["Git", "GitHub", "VS Code", "Postman", "NPM"].map((skill, idx) => (
                <motion.span
                  key={idx}
                  whileHover={{ scale: 1.1 }}
                  className="px-3 py-1 bg-gray-800 rounded-full text-yellow-300 text-sm font-medium cursor-pointer shadow-md hover:bg-yellow-900 transition"
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </div>
        </div>

    
        {/* <div className="mt-8">
          <h2 className="text-2xl font-semibold mb-3 border-b border-gray-700 pb-2">Certifications & Experience</h2>
          <ul className="list-disc list-inside text-gray-300">
            <li>Frontend Development with React – Udemy</li>
            <li>Full Stack Web Development – FreeCodeCamp</li>
            <li>1+ years experience building responsive websites</li>
          </ul>
        </div> */}
      </motion.div>
    </div>
  );
}

export default About;