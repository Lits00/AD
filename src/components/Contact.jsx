import React from "react";

const Contact = () => {
  return (
    <section
      id="contact"
      className="px-7 flex flex-col min-h-72 w-96 items-center justify-around md:px-32 md:w-full"
    >
      <h2 className="capitalize text-3xl font-bold text-sky-600 mb-6">get in touch</h2>
      <p className="px-4">
        Want to connect? Feel free to drop a message and I'll get back to you as
        soon as I can.
      </p>

      <ul className="flex gap-5">
        <li className="cursor-pointer text-lg hover:text-sky-600 md:text-2xl"><a href="mailto:litsdionisio@gmail.com" target="_blank" rel="noopener noreferrer">Email</a></li>
        <li className="cursor-pointer text-lg hover:text-sky-600 md:text-2xl"><a href="https://www.linkedin.com/in/lits-dionisio/" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
      </ul>
    </section>
  );
};

export default Contact;
