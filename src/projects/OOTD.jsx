import React from 'react';

import Header from '../components/Header';

const OOTD = ({ }) => {
  return (
    <div className='body'>
      <div className="fake-window">
        <Header />
        <h2 className='top'>OOTD</h2>
        <div className='projects_container'>
          <h3>Coming Soon...</h3>
          <h3>OOTD is a mobile application that allows users to send their outfit of the day, once per day. As a frontend designer, I created the application interface with the use of React Native.</h3>
          <img className='photo' src='/ootd/ootdLanding.png' />
        </div>
      </div>
    </div>
  );
};

export default OOTD;
