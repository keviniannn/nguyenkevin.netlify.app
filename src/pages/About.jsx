import React from "react";

import Header from "../components/Header";

const About = () => {
  return (
    <div className="w-full h-screen px-4 py-6 box-border text-blue-700">
      <div className="relative w-full h-full max-w-4xl mx-auto border-4 border-blue-700 bg-stone-100 px-6 py-8 flex flex-col gap-10 overflow-hidden box-border">
        <Header />
        <div className="flex-1 flex flex-col items-center justify-center text-center gap-6 overflow-hidden">
          <h2 className="text-3xl tracking-wider uppercase">About</h2>
          <p className="max-w-2xl text-base leading-relaxed">
            Hello, my name is Kevin Nguyen. I am currently pursuing a Master of
            Science in Computer Science at the Georgia Institute of Technology.
            I received my Bachelor's from California State University,
            Fullerton. I am passionate about coding and the ability to create
            with the use of different programming languages. Outside of school,
            I enjoy occupying my time by playing the guitar, videogames, or
            developing my pizza recipe.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
