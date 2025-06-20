import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/home/Home"
import Projects from "./components/projects/Projects";
import Contact from "./components/Contact";

const App = () => {
  return (
    <>
    <div className="fixed -z-10 min-h-screen w-full bg-dark bg-[linear-gradient(to_right,#202020_1px,transparent_1px),linear-gradient(to_bottom,#202020_1px,transparent_1px)] bg-[size:6rem_4rem]"></div>
      <main className="flex flex-col items-center md:px-8 lg:px-16 text-d-txt">
        <Navbar />
        <Home />
        <Projects />
        <Contact />
      </main>
    </>
  );
};

export default App;
