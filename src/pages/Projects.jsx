import React from 'react';
import Header from '../components/Header';

const Projects = () => {
  return (
    <div className='body'>
      <div className="fake-window">
        <Header />
        <div className='container'>
          <h2 className='top'>Projects</h2>
          <div className='content'>
            <ul style={{ width: '70%' }}>
              <li>
                <a
                  href="https://github.com/keviniannn/bring-your-own"
                  className="no-underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Bring Your Own (Potluck App)
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/keviniannn/national-basketball-predictions"
                  className="no-underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  National Basketball Predictions
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/kourosh-alasti/constellations"
                  className="no-underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Constellations (Hackathon)
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/keviniannn/spotivents"
                  className="no-underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Spotivents
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/keviniannn/ootd"
                  className="no-underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  OOTD (WIP)
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/keviniannn/noted"
                  className="no-underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Noted
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;