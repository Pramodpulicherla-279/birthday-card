import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Typography } from '@mui/material';
import { TouchApp } from '@mui/icons-material';
import './Style3.css';
import { useAudio } from './AudioContext';

const BirthdayCard = () => {
  const navigate = useNavigate();
  const { playAudio } = useAudio();
  const [isEnvelopeOpened, setIsEnvelopeOpened] = useState(false);

  const handleClick = () => {
    playAudio();
    navigate('/birthdaycomponent');
  };

  const handleEnvelopeOpen = () => {
    setIsEnvelopeOpened(true);
  };

  return (
    <div style={{ backgroundColor: '#fff4ec', width: '100vh', height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <div className="envelope" onClick={handleEnvelopeOpen}>
        <div className="back"></div>
        <div className="letter">
          <div className='heart'></div>
          <div className="text">
            <p>Happy to meet you again Vanitha. I have something for your special Day. &hearts;</p>
            {isEnvelopeOpened && (
              <Button
                className="button"
                onClick={handleClick}
                variant="contained"
                color="primary"
                style={{
                  position: 'relative',
                  padding: '8px 20px',
                  background: '#fec195',
                  fontSize: '12px',
                  fontWeight: '500',
                  color: '#181818',
                  cursor: 'pointer',
                  border: '1px solid #fec195',
                  borderRadius: '16px',
                  filter: 'drop-shadow(2px 2px 3px rgba(0, 0, 0, 0.2))'
                }}
              >
                Gift
              </Button>
            )}
          </div>
        </div>
        <div className="front"></div>
        <div className="top"></div>
        <div className="shadow"></div>
        <div className="text1">
          {/* <h2>Hey! Listen I have something for you from my heart.</h2> */}
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