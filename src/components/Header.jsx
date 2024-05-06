import React from 'react';
import { Link } from 'react-router-dom';

import './Header.css';

const Header = ({ }) => {
  return (
    <div className="header">
      <ul>
        <li><Link to="/home" className='no-underline'>Home</Link></li>
        <li><Link to="/about" className='no-underline'>About</Link></li>
        <li><Link to="/projects" className='no-underline'>Projects</Link></li>
        <li><Link to="/resume" className='no-underline'>Resume</Link></li>
        <li><Link to="/contact" className='no-underline'>Contact</Link></li>
      </ul>
    </div>
  );
};

export default Header;
