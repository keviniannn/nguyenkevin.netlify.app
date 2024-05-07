import React from 'react';

import Header from '../components/Header';

const Spotivents = ({ }) => {
  return (
    <div className='body'>
      <div className="fake-window">
        <Header />
        <div className='container'>
          <div className='top'>
            <h2>Spotivents</h2>
          </div>
          <div className='projects'>
            <h3>A Python program created with the use of the Tkinter library in order to view upcoming concerts based on a user's recently listened to artists on Spotify. The spotipy library is used to communicate with the Ticketmaster API, in order to retrieve and collect the results for the user.</h3>
            <img className='photo' src='/spotivents/spotiventsReadMe.png' />
            <img className='photo' src='/spotivents/spotiventsOutput.png' />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Spotivents;




