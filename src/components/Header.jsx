import React from "react";
import { Link } from "react-router-dom";

const Header = ({}) => {
  return (
    <div className="absolute top-4 left-4 z-50 px-4 py-3">
      <ul>
        <li className="pl-2 w-32 hover:bg-blue-700 hover:text-stone-100 text-md">
          <Link to="/">Home</Link>
        </li>
        <li className="pl-2 w-32 hover:bg-blue-700 hover:text-stone-100 text-md">
          <Link to="/about">About</Link>
        </li>
        <li className="pl-2 w-32 hover:bg-blue-700 hover:text-stone-100 text-md">
          <Link to="/projects">Projects</Link>
        </li>
        <li className="pl-2 w-32 hover:bg-blue-700 hover:text-stone-100 text-md">
          <Link to="/resume">Resume</Link>
        </li>
        <li className="pl-2 w-32 hover:bg-blue-700 hover:text-stone-100 text-md">
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </div>
  );
};

export default Header;
