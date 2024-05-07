import React from 'react';
import { Link } from 'react-router-dom';

import Header from '../components/Header';

const Projects = ({ }) => {
  return (
    <div className='body'>
      <div className="fake-window">
        <Header />
        <div className='container'>
          <h2 className='top'>Projects</h2>
          <div className='content'>
            <ul style={{width: '70%'}}>
              <li><Link to="/spotivents" className='no-underline'>Spotivents</Link></li>
              <li><Link to="/betterpredict" className='no-underline'>Better Predict (WIP)</Link></li>
              <li><Link to="/ootd" className='no-underline'>OOTD (WIP) </Link></li>
              <li><Link to="/noted" className='no-underline'>Noted</Link></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
