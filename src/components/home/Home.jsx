import React from "react";
import Hero from "./Hero";
import Tech from "./Tech";
import About from "./About";

const Home = () => {
  return (
    <section
      id="home"
      className="px-7 flex flex-col gap-12 min-h-screen w-96 md:px-32 md:w-full xl:grid xl:grid-cols-2 xl:grid-rows-2 xl:gap-x-24 xl:gap-y-4"
    >
      <Hero className="cursor-default pt-40 md:pt-50 lg:pt-64 xl:col-start-1 xl:row-start-1" />
      <Tech className="rounded-md cursor-default flex flex-col xl:col-start-1 xl:row-start-2" />
      <About className="rounded-md cursor-default xl:col-start-2 xl:row-span-2 xl:self-start xl:pt-60" />
    </section>
  );
};

export default Home;
