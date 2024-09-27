import React, { useState, useEffect } from 'react';
import Confetti from 'react-confetti';
import './new.css';

// Import images

import img3 from '../images/img3.png';

const BirthdayComponent = () => {
  const [showConfetti, setShowConfetti] = useState(false);

  useEffect(() => {
    // Set a delay for the confetti to appear
    const appearTimer = setTimeout(() => {
      setShowConfetti(true);

      // Hide confetti after 5 seconds
      const hideTimer = setTimeout(() => {
        setShowConfetti(false);
      }, 8000);

      // Cleanup the hide timer
      return () => clearTimeout(hideTimer);
    }, 50000); // Delay of 2 seconds before confetti appears

    // Cleanup the appear timer
    return () => clearTimeout(appearTimer);
  }, []);

  return (
    <div style={{ backgroundColor: '#181818', width:'100%',height: '100vh', justifyContent: 'center', alignItems: 'center' }}>
      <h1 style={{ color: '#181818' }}>.fhohfd;hnfkfjhnsfhnsfnf</h1>
      <div className="animation-box">
        <div className="first-text">“Happy birthday! I hope all your birthday wishes and dreams come true.”</div>
        <div className="second-text">
          “A wish for you on your birthday, whatever you ask may you receive, whatever you seek may you find, whatever you wish may it be fulfilled on your birthday and always. Happy birthday!”<br/>
          {/* <img src={img1} className="image-animation1" alt="Birthday Image 1" onError={(e) => { console.error('Error loading img1:', e); }} /> */}
        </div>
        <div className="third-text">“May the joy that you have spread in the past come back to you on this day. Wishing you a very happy birthday!”</div>
        <div className="fourth-text">
          “Count not the candles…see the lights they give. Count not the years, but the life you live. Wishing you a wonderful time ahead. Happy birthday.”
          {/* <img src={img2} className="image-animation2" alt="Birthday Image 2" onError={(e) => { console.error('Error loading img2:', e); }} /> */}
        </div>
        <div className="fifth-text" style={{ fontSize: '36px' }}>“Be happy! Today is the day you were brought into this world to be a blessing and inspiration to the people around you! You are a wonderful person! May you be given more birthdays to fulfill all of your dreams!”</div>
        {showConfetti && <Confetti />}
        <div className="sixth-text">
          HAPPY <br />BIRTHDAY <br/> <span className='name'>Vanitha</span><br/>
          <img src={img3} className="image-animation3" alt="Birthday Image 3" onError={(e) => { console.error('Error loading img3:', e); }} />
        </div>
        <div className="seventh-text">-Pramod</div>
      </div>
    </div>
  );
};

export default BirthdayComponent;