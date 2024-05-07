import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { animated } from '@react-spring/web';
import './Landing.css';

const Landing = ({ }) => {
  const [inputValue, setInputValue] = useState('');
  const [text, setText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);

  const fullText = "Welcome to my portfolio. Press any button to continue...";

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (currentIndex < fullText.length) {
        setText(fullText.substring(0, currentIndex + 1));
        setCurrentIndex(currentIndex + 1);
      } else {
        clearInterval(intervalId);
      }
    }, 75); // Adjust interval for typing speed (milliseconds)
    return () => clearInterval(intervalId);
  }, [currentIndex, fullText]);

  const navigate = useNavigate();
  const handleKeyDown = (event) => {
    navigate('/home'); // Replace with your desired destination
  };

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown); // Listen for keydown event on document
    return () => document.removeEventListener('keydown', handleKeyDown); // Clean up event listener
  }, [handleKeyDown]);

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  return (
    <div className='body'>
      <div className='fake-window'>
        <div className='landing'>
          <animated.span style={{ opacity: 1 }} className="welcome">{text}</animated.span>
          <input type="text" value={inputValue} onChange={handleChange} style={{ visibility: 'hidden' }} />
        </div>
      </div>
    </div>
  );
};

export default Landing;
