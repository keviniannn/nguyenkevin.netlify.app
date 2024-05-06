import React from 'react';
import { Link } from 'react-router-dom';
import { animated, useSpring } from '@react-spring/web';
import './Home.css';

import Header from '../components/Header';

const Home = () => {
  const animation = useSpring({ opacity: 1, from: { opacity: 0 }, config: { duration: 1000 } });

  return (
    <div className='body'>
      <div className="fake-window">
        <Header />
        <animated.div style={animation} className="animation-container">
          <div>
            <h1 className='title'>KEVIN NGUYEN</h1>
            <h3 className='subtitle'>SOFTWARE ENGINEER</h3>
          </div>
          <div className='footer'>
            <Link
              to="https://www.linkedin.com/in/kevin-nguyen-5b09b42b4/"
              target="_blank"
              rel="noopener noreferrer"
              className='no-underline'
            >
              <p className='foot-title'>LINKEDIN</p>
            </Link>
            <Link
              to="https://github.com/keviniannn"
              target="_blank"
              rel="noopener noreferrer"
              className='no-underline'
            >
              <p className='foot-title'>GITHUB</p>
            </Link>
          </div>
        </animated.div>
      </div>
    </div>
  );
};

export default Home;
