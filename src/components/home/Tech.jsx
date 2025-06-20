import React from "react";
import { motion } from "motion/react";
import {
  SiCss3,
  SiExpress,
  SiGit,
  SiHtml5,
  SiJavascript,
  SiMongodb,
  SiNodedotjs,
  SiPostman,
  SiReact,
  SiTailwindcss,
} from "react-icons/si";

const Tech = ({className}) => {
  return (
    <motion.article
      initial={{ opacity: 0, x: -100 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 1, ease: "easeIn", delay: 0}}
      className={className}>
      <h2 className="text-xl py-4 capitalize font-bold text-sky-600">tech stack</h2>
      <ul className="grid grid-cols-3 gap-3 md:grid-cols-4 lg:grid-cols-5">
        <li className="flex flex-col items-center justify-start gap-1 bg-zinc-900 rounded-md p-3 hover:bg-zinc-800">
          <SiGit className="text-2xl text-red-500" />
          <p>Git</p>
        </li>
        <li className="flex flex-col items-center justify-start gap-1 bg-zinc-900 rounded-md p-3 hover:bg-zinc-800">
          <SiHtml5 className="text-2xl text-red-500" />
          <p>HTML</p>
        </li>
        <li className="flex flex-col items-center justify-start gap-1 bg-zinc-900 rounded-md p-3 hover:bg-zinc-800">
          <SiCss3 className="text-2xl text-sky-500" />
          <p>CSS</p>
        </li>
        <li className="flex flex-col items-center justify-start gap-1 bg-zinc-900 rounded-md p-3 hover:bg-zinc-800">
          <SiJavascript className="text-2xl text-amber-300" />
          <p>Javascript</p>
        </li>
        <li className="flex flex-col items-center justify-start gap-1 bg-zinc-900 rounded-md p-3 hover:bg-zinc-800">
          <SiReact className="text-2xl text-cyan-500" />
          <p>React</p>
        </li>
        <li className="flex flex-col items-center justify-start gap-1 bg-zinc-900 rounded-md p-3 hover:bg-zinc-800">
          <SiNodedotjs className="text-2xl text-lime-500" />
          <p>Node.js</p>
        </li>
        <li className="flex flex-col items-center justify-start gap-1 bg-zinc-900 rounded-md p-3 hover:bg-zinc-800">
          <SiExpress className="text-2xl text-slate-300" />
          <p>Express.js</p>
        </li>
        <li className="flex flex-col items-center justify-start gap-1 bg-zinc-900 rounded-md p-3 hover:bg-zinc-800">
          <SiMongodb className="text-2xl text-lime-700" />
          <p>MongoDB</p>
        </li>
        <li className="flex flex-col items-center justify-start gap-1 bg-zinc-900 rounded-md p-3 hover:bg-zinc-800">
          <SiPostman className="text-2xl text-orange-600" />
          <p>Postman</p>
        </li>
        <li className="flex flex-col items-center justify-start gap-1 bg-zinc-900 rounded-md p-3 hover:bg-zinc-800">
          <SiTailwindcss className="text-2xl text-sky-400" />
          <p>Tailwind</p>
        </li>
      </ul>
    </motion.article>
  );
};

export default Tech;
