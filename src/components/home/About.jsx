import React from "react";
import { motion } from "motion/react";

const About = ({className}) => {
  return (
    <motion.article 
      initial={{ opacity: 0, x: -100 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 1.1, ease: "easeIn", delay: 0}}
      className={className}>
      <h2 className="text-3xl py-4 capitalize font-extrabold text-sky-600">about </h2>
      <div className="flex flex-col gap-3 text-justify">
      <p>👋 Greetings!</p>
      <p>My name is Angelito, I do appreciate your time for checking my portfolio!</p>
      <p>Back then, I was overwhelmed by the vast opportunities that the IT industry could offer to the point that I didn't know what to pursue. As I went through each of them, one thing that caught my attention was web development. Although the complexity of programming has been intimidating for me as a beginner, the satisfaction of observing the whole project execute its functions is a rewarding experience. I thought I was only studying to enhance my technical skills and logical thinking. Still, programming taught me a greater sense of discipline, perseverance, and understanding, which in turn helped me improve my overall well-being.</p>
      <p>Cheers to more growth and learning, Ciao!</p>
      </div>
      
    </motion.article>
  );
};

export default About;
