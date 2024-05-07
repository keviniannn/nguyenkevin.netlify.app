import React from 'react';
import Header from '../components/Header';

const Resume = () => {
  return (
    <div className='body'>
      <div className="fake-window">
        <Header />
        <div className='container'>
          <h2 className='top'>Resume</h2>
          <div className='pdf'>
            <embed src="/KevinNguyenResume.pdf" type="application/pdf" height="100%"/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;