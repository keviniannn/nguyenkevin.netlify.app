import React from 'react';

import Header from '../components/Header';

const Noted = ({ }) => {
  return (
    <div className='body'>
      <Header />
      <div className="fake-window">
        <h2 className='top'>Noted</h2>
        <div className='projects_container'>
          <img className='photo' src='/noted/noted1.png' />
          <img className='photo' src='/noted/noted2.png' />
          <img className='photo' src='/noted/noted3.png' />
        </div>
      </div>
    </div>
  );
};

export default Noted;
