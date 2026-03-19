import React from "react";
import { motion } from "framer-motion";

const projectList = [
  {
    title: "Portfolio Website",
    description: "Built using React & Tailwind CSS with animations.",
    link: "#",
    GitHub : "https://github.com/Manas-soni-07/portfolio"
  },
  {
    title: "E-commerce App",
    description: "React + Redux + Tailwind CSS + Firebase backend.",
    link: "https://customer-e-commerce.netlify.app/",
    GitHub : "https://github.com/Manas-soni-07/react-ecommerce1"
  },
  {
    title: "Reels Creator App",
    description: "React + Framer Motion for dynamic video content.",
    link: "https://github.com/Manas-soni-07/reels-creator-portfoio",
    GitHub : "https://github.com/Manas-soni-07/reels-creator-portfoio"
  },
  {
    title: "Employee Dashboard",
    description: "Virtual Table, Analytics, React + Tailwind CSS.",
    link: "https://dashboard-emplyee.netlify.app/",
    GitHub : "https://github.com/Manas-soni-07/employee-frontend"
  },
    {
    title: "Car Rental App",
    description:
      "Full-stack car rental application built with React, Node.js, Express.js, and MongoDB. Features: User Authentication, Car Listings, Booking System, and Admin Panel.",
    link: "#",
    GitHub : "https://github.com/Manas-soni-07/car-rental-frontend"
  },
];

function Projects() {
  return (
    <div className="min-h-screen bg-gray-900 text-white p-10 pt-20">
      <h1 className="text-4xl font-bold mb-10 text-center">Projects</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projectList.map((project, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 }}
            className="bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all cursor-pointer"
          >
            <h2 className="text-2xl font-semibold mb-2 text-blue-500">
              {project.title}
            </h2>
            <p className="text-gray-300 mb-4">{project.description}</p>
            <a
              href={project.link}
              className="text-blue-400 hover:text-blue-500 font-semibold"
              target="_blank"
            >
              View Project
            </a>

            <br />
            <br />

            <a
              href={project.GitHub}
              className="text-blue-400 hover:text-blue-500 font-semibold"
              target="_blank"
            >
             View GitHub
            </a>
            
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default Projects;