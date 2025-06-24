import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdAlternateEmail } from "react-icons/md";
import { motion } from "motion/react";

const Hero = ({className}) => {
  return (
    <motion.article 
      initial={{ opacity: 0, x: -100 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 1, ease: "easeIn"}}
      className={className}>
      <h1 className="text-6xl pb-4 capitalize font-extrabold md:text-5xl lg:text-6xl">angelito dionisio</h1>
      <h2 className="text-3xl pb-4 capitalize font-extrabold text-sky-600 md:text-2xl lg:text-3xl">front-end web developer</h2>
      <p className=" pb-4">Building awesome stuff with tech! ✨</p>
      <ul className="flex gap-6">
        <li className="cursor-pointer text-3xl hover:text-sky-600 md:text-2xl"><a href="mailto:litsdionisio@gmail.com" target="_blank" rel="noopener noreferrer"><MdAlternateEmail /></a></li>
        <li className="cursor-pointer text-3xl hover:text-sky-600 md:text-2xl"><a href="https://github.com" target="_blank" rel="noopener noreferrer"><FaGithub /></a></li>
        <li className="cursor-pointer text-3xl hover:text-sky-600 md:text-2xl"><a href="https://www.linkedin.com/in/lits-dionisio/" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a></li>
      </ul>
    </motion.article>
  )
};

export default Hero;
