import React, { useState } from "react";
import { BiMenu, BiX } from "react-icons/bi";
import { motion, AnimatePresence } from "motion/react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
// for mobile setting sidebar activation
  const handleMenu = () => {
    setIsOpen((prevState) => !prevState);
  };

  const handleScroll = (id) => {
    document.getElementById(id)?.scrollIntoView({behavior: "smooth"});
  };

  return (
    <nav className="fixed top-0 z-10 flex w-full items-center justify-between border-b border-b-gray-700/40 px-16 text-white backdrop-blur-md md:justify-evenly">
      <button onClick={() => handleScroll("home")}>
        <img src="/Dark_logo.jpg" alt="logo" className="max-w-16 h-auto" />
      </button>
      <ul className="hidden md:flex gap-10">
        <button
          onClick={() => handleScroll("home")}
          className="text-sm cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100 hover:text-sky-600 uppercase"
        >
          home
        </button>
        <button
          onClick={() => handleScroll("projects")}
          className="text-sm cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100 hover:text-sky-600 uppercase"
        >
          projects
        </button>
        <button
          onClick={() => handleScroll("contact")}
          className="text-sm cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100 hover:text-sky-600 uppercase"
        >
          contact
        </button>
      </ul>

      {isOpen ? (
        <BiX className="block md:hidden text-4xl" onClick={handleMenu} />
      ) : (
        <BiMenu className="block md:hidden text-4xl" onClick={handleMenu} />
      )}

      <AnimatePresence>
      {isOpen && (
        <motion.aside
          initial={{ y: "100%" }}
          animate={{ y: 0 }}
          exit={{ y: "100%" }}
          transition={{ type: "spring", stiffness: 200, damping: 30 }}
          className={`fixed right-0 top-[65px] flex h-screen w-screen flex-col items-center justify-start gap-10 border-l border-l-gray-700/40 bg-dark p-12 text-white backdrop-blur-md ${
            isOpen ? "block" : "hidden"
          }`}
        >
          <ul className="flex flex-col gap-8">
            <button
              onClick={() => handleScroll("home")}
              className="text-sm cursor-pointer opacity-60 transition-all duration-300 hover:opacity-100 uppercase"
            >
              home
            </button>
            <button
              onClick={() => handleScroll("projects")}
              className="text-sm cursor-pointer opacity-60 transition-all duration-300 hover:opacity-100 uppercase"
            >
              projects
            </button>
            <button
              onClick={() => handleScroll("contact")}
              className="text-sm cursor-pointer opacity-60 transition-all duration-300 hover:opacity-100 uppercase"
            >
              contact
            </button>
          </ul>
        </motion.aside>
      )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
