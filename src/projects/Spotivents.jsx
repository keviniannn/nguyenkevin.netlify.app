import React from 'react';

import Header from '../components/Header';

const Spotivents = ({ }) => {
  return (
    <div className='body'>
      <Header />
      <div className="fake-window">
        <h2 className='top'>Spotivents</h2>
        <div className='projects_container'>
          <img className='photo' src='/spotivents/spotiventsReadMe.png' />
          <img className='photo' src='/spotivents/spotiventsOutput.png' />
        </div>
      </div>
    </div>
  );
};

export default Spotivents;


