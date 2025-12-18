import React from "react";
import { Link } from "react-router-dom";
import { animated, useSpring } from "@react-spring/web";
import "./Home.css";

import Header from "../components/Header";

const Home = () => {
  const animation = useSpring({
    opacity: 1,
    from: { opacity: 0 },
    config: { duration: 500 },
  });

  return (
    <div className="body">
      <div className="border-3 bg-stone-100 w-7xl h-max">
        <Header />
        <animated.div style={animation} className="animation-container">
          <div className="justify-center grid place-items-center">
            <h1 className="text-4xl tracking-wider uppercase text-center">
              Kevin Nguyen
            </h1>
            <h3 className="text-xl tracking-wide italic uppercase text-center">
              Software Engineer
            </h3>
          </div>
          <div className="max-w-md bottom grid grid-cols-2 gap-4 place-items-center">
            <Link
              to="https://www.linkedin.com/in/keviniann/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-center"
            >
              <p className="text-xl">LINKEDIN</p>
            </Link>
            <Link
              to="https://github.com/keviniannn"
              target="_blank"
              rel="noopener noreferrer"
              className="text-center"
            >
              <p className="text-xl">GITHUB</p>
            </Link>
          </div>
        </animated.div>
      </div>
    </div>
  );
};

export default Home;
