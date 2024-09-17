import React, { useRef } from 'react';
import { Button, Typography } from '@mui/material';
import { TouchApp } from '@mui/icons-material';
import './Style3.css';

const BirthdayCard = () => {
  const audioRef = useRef(null); // Create a ref for the audio element

  const navigateToNewPage = () => {
    // Open the new page in a new window
    window.open('/newpage', '_blank');
  };

  const playAudio = () => {
    if (audioRef.current) {
      audioRef.current.play();
    }
  };

  const handleClick = () => {
    playAudio();
    navigateToNewPage();
  };

  return (
    <div style={{ backgroundColor: '#b784db', width:'100vh',height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <div className="envelope">
        <div className="back"></div>
        <div className="letter">
          <div className="text">
            <p>hello! &hearts;</p>
            <Button className="button" onClick={handleClick} variant="contained" color="primary">
              Click here
            </Button>
            <audio ref={audioRef} src="/song.mp3" />
          </div>
        </div>
        <div className="front"></div>
        <div className="top"></div>
        <div className="shadow"></div>
        <div className="text1">
          <h2>Hey! Listen I have something for you from my heart.</h2>
        </div>
        <div className="tap-here">
          <Typography variant="h6" component="p" className="tap-text">
            Tap here to open
          </Typography>
          <TouchApp className="tap-icon" />
        </div>
      </div>
    </div>
  );
};

export default BirthdayCard;