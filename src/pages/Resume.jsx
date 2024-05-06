import React from 'react';
import Header from '../components/Header';

const Resume = () => {
  return (
    <div className='body'>
      <div className="fake-window">
        <Header />
        <h2 className='top'>Resume</h2>
        <embed src="/KevinNguyenResume.pdf" type="application/pdf" width="60%" height="60%" />
      </div>
    </div>
  );
};

export default Resume;