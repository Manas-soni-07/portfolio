import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Projects", path: "/projects" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="fixed w-full z-50 backdrop-blur-md bg-black/70 text-white px-6 py-4 flex justify-between items-center shadow-lg"
    >
     
      <h1 className="font-bold text-xl tracking-wide">
        Manas <span className="text-blue-500">Soni</span>
      </h1>

 
      <div className="hidden md:flex space-x-6">
        {navLinks.map((link, i) => (
          <Link key={i} to={link.path}>
            <span
              className={`relative cursor-pointer transition ${
                location.pathname === link.path
                  ? "text-blue-500"
                  : "hover:text-blue-400"
              }`}
            >
              {link.name}

            
              {location.pathname === link.path && (
                <motion.div
                  layoutId="underline"
                  className="absolute left-0 -bottom-1 h-[2px] w-full bg-blue-500"
                />
              )}
            </span>
          </Link>
        ))}
      </div>

 
      <div className="md:hidden">
        <button onClick={() => setIsOpen(!isOpen)}>
          ☰
        </button>
      </div>

     
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute top-16 left-0 w-full bg-black text-center py-6 flex flex-col gap-4 md:hidden"
        >
          {navLinks.map((link, i) => (
            <Link
              key={i}
              to={link.path}
              onClick={() => setIsOpen(false)}
              className="hover:text-blue-400"
            >
              {link.name}
            </Link>
          ))}
        </motion.div>
      )}
    </motion.nav>
  );
}

export default Navbar;