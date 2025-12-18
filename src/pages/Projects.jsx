import React from "react";
import { Link } from "react-router-dom";

import Header from "../components/Header";

const Projects = () => {
  return (
    <div className="w-full h-screen px-4 py-6 box-border text-blue-700">
      <div className="relative w-full h-full max-w-4xl mx-auto border-4 border-blue-700 bg-stone-100 px-6 py-8 flex flex-col gap-10 overflow-hidden box-border">
        <Header />
        <div className="flex-1 flex flex-col items-center justify-center text-center gap-2 overflow-hidden">
          <h2 className="text-3xl tracking-wider uppercase">Projects</h2>
          <ul className="w-full max-w-xl text-blue-700">
            <li>
              <Link
                to="https://github.com/keviniannn/credis"
                className="block text-center w-64 mx-auto hover:bg-blue-700 hover:text-stone-100"
                target="_blank"
                rel="noopener noreferrer"
              >
                Credis
              </Link>
            </li>
            <li>
              <Link
                to="https://github.com/keviniannn/scraped-tomatoes"
                className="block text-center w-64 mx-auto hover:bg-blue-700 hover:text-stone-100"
                target="_blank"
                rel="noopener noreferrer"
              >
                Scraped Tomatoes
              </Link>
            </li>
            <li>
              <Link
                to="https://kevspizza.netlify.app/"
                className="block text-center w-64 mx-auto hover:bg-blue-700 hover:text-stone-100"
                target="_blank"
                rel="noopener noreferrer"
              >
                Pizza Blog
              </Link>
            </li>
            <li>
              <Link
                to="https://github.com/keviniannn/bring-your-own"
                className="block text-center w-64 mx-auto hover:bg-blue-700 hover:text-stone-100"
                target="_blank"
                rel="noopener noreferrer"
              >
                Bring Your Own
              </Link>
            </li>
            <li>
              <Link
                to="https://github.com/keviniannn/national-basketball-predictions"
                className="block text-center w-64 mx-auto hover:bg-blue-700 hover:text-stone-100"
                target="_blank"
                rel="noopener noreferrer"
              >
                National Basketball Predictions
              </Link>
            </li>
            <li>
              <Link
                to="https://github.com/kourosh-alasti/constellations"
                className="block text-center w-64 mx-auto hover:bg-blue-700 hover:text-stone-100"
                target="_blank"
                rel="noopener noreferrer"
              >
                Constellations (Hackathon)
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Projects;
