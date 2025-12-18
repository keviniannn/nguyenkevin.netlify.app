import React from "react";
import { Link } from "react-router-dom";
import { animated, useSpring } from "@react-spring/web";

import Header from "../components/Header";

const Home = () => {
  const animation = useSpring({
    opacity: 1,
    from: { opacity: 0 },
    config: { duration: 500 },
  });

  return (
    <div className="w-full h-screen px-4 py-6 box-border text-blue-700">
      <animated.div
        style={animation}
        className="relative w-full h-full max-w-4xl mx-auto border-4 border-blue-700 bg-stone-100 px-6 py-8 flex flex-col gap-10 overflow-hidden box-border"
      >
        <Header />
        <div className="flex-1 flex flex-col items-center justify-center text-center gap-2 overflow-hidden">
          <h1 className="text-4xl tracking-wider uppercase">Kevin Nguyen</h1>
          <h3 className="text-xl tracking-wide italic uppercase">
            Software Engineer
          </h3>
        </div>
        <div className="grid grid-cols-2 gap-4 place-items-center max-w-md mx-auto">
          <Link
            to="https://www.linkedin.com/in/keviniann/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-center w-32 hover:bg-blue-700 hover:text-stone-100"
          >
            <p className="text-md">LinkedIn</p>
          </Link>
          <Link
            to="https://github.com/keviniannn"
            target="_blank"
            rel="noopener noreferrer"
            className="text-center w-32 hover:bg-blue-700 hover:text-stone-100"
          >
            <p className="text-md">GitHub</p>
          </Link>
        </div>
      </animated.div>
    </div>
  );
};

export default Home;
