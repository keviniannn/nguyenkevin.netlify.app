import React from 'react';

import Header from '../components/Header';

const About = ({ }) => {
  return (
    <div className='body'>
      <div className="fake-window">
        <Header />
        <div className='container'>
          <h2 className='top'>About</h2>
          <div className='content'>
            <p>Hello, my name is Kevin Nguyen. I am currently pursuing a Bachelor of Science in Computer Science at Cal State University, Fullerton. I am passionate about coding and the ability to create with the use of different programming languages. Outside of school, I enjoy occupying my time by playing the guitar and video games.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
