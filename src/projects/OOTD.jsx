import React from 'react';

import Header from '../components/Header';

const OOTD = ({ }) => {
  return (
    <div className='body'>
      <div className="fake-window">
        <Header />
        <h2 className='top'>OOTD</h2>
        <div className='noted_container'>
          <img className='photo' src='/ootd/ootdLanding.png' />
        </div>
      </div>
    </div>
  );
};

export default OOTD;
