import React from 'react';

import Header from '../components/Header';

const Spotivents = ({ }) => {
  return (
    <div className='body'>
      <Header />
      <div className="fake-window">
        <h2 className='top'>Spotivents</h2>
        <div className='container'>
          <h3>A Python program created with the use of the Tkinter library in order to view upcoming concerts based on a user's recently listened to artists on Spotify. The spotipy library is used to communicate with the Ticketmaster API, in order to retrieve and collect the results for the user.</h3>
          <img className='photo' src='/spotivents/spotiventsReadMe.png' />
        </div>
      </div>
    </div>
  );
};

export default Spotivents;




