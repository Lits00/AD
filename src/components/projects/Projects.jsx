import React from "react";
import Portfolio from "../../assets/imgs/Portfolio.png";
import Shopping from "../../assets/imgs/ShoppingCart.png";
import Weather from "../../assets/imgs/weatherApp.png";
import {
  SiCss3,
  SiHtml5,
  SiJavascript,
  SiReact,
  SiTailwindcss,
} from "react-icons/si";
import { BiLinkExternal } from "react-icons/bi";
import { TbApi } from "react-icons/tb";
import { motion } from "motion/react";


const Projects = () => {
  return (
    <section
      id="projects"
      className="px-7 flex flex-col min-h-screen w-96 items-center justify-evenly py-28 md:justify-center md:px-32 md:w-full xl:pt-0"
    >
      <motion.h2
        initial={{ scale: 0.2, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.3 }}
        className="text-3xl capitalize font-extrabold text-sky-600 mb-6 pb-10"
      >
        Projects
      </motion.h2>

      <div className="flex flex-col gap-4 lg:flex-row lg:gap-4">
      <motion.article
        initial={{ scale: 0.6, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.3 }}
        className=" bg-zinc-800 p-4 rounded-md cursor-default"
      >
        <a href="https://personal-portfolio-lits00s-projects.vercel.app/" target="_blank">
          <img src={Portfolio} alt="Portfolio" />
        </a>
        <div className="flex flex-row justify-between mt-3">
          <div className="flex flex-row gap-2">
            <p>Built with:</p>
            <SiReact className="text-xl text-cyan-500" />
            <SiTailwindcss className="text-xl text-sky-400" />
          </div>
          <a href="https://personal-portfolio-lits00s-projects.vercel.app/" target="_blank"><BiLinkExternal className="text-2xl" /></a>
        </div>
        <p className="mt-2">My very own portfolio website.</p>
      </motion.article>
      
      <motion.article
        initial={{ scale: 0.6, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.3 }}
        className=" bg-zinc-800 p-4 rounded-md cursor-default"
      >
        <a href="https://shopping-cart-lits00.vercel.app/" target="_blank">
          <img src={Shopping} alt="ShoppingCart Project" />
        </a>
        <div className="flex flex-row justify-between mt-3">
          <div className="flex flex-row gap-2">
            <p>Built with:</p>
            <SiCss3 className="text-xl text-sky-500" />
            <SiReact className="text-xl text-cyan-500" />
            <TbApi className="text-2xl text-white"/>
          </div>
          <a href="https://shopping-cart-lits00.vercel.app/" target="_blank"><BiLinkExternal className="text-2xl" /></a>
        </div>
        <p className="mt-2">A project from "The Odin Project" in which I built a simple online shop, applying the basic fundamentals that I learned from the React course.</p>
      </motion.article>

      <motion.article
        
        initial={{ scale: 0.6, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.3 }}
        className=" bg-zinc-800 p-4 rounded-md cursor-default"
      >
        <a href="https://lits00.github.io/WeatherApp/"
        target="_blank"><img src={Weather} alt="Weather App Project" /></a>
        <div className="flex flex-row justify-between mt-3">
          <div className="flex flex-row gap-2">
          <p>Built with:</p>
          <SiHtml5 className="text-xl text-red-500" />
          <SiCss3 className="text-xl text-sky-500" />
          <SiJavascript className="text-xl text-amber-300" />
          <TbApi className="text-2xl text-white"/>
          </div>
          <a href="https://lits00.github.io/WeatherApp/" target="_blank"><BiLinkExternal className="text-2xl" /></a>
        </div>
        <p className="mt-2">A vanilla Javascript project where I used WeatherAPI to gather and display weather data from different locations depending on user input.</p>
      </motion.article>
      </div>
    </section>
  );
};

export default Projects;
