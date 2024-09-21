import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import BirthdayCard from './components/BirthdayCard';
import BirthdayComponent from './components/BirthdayComponent';
import { AudioProvider } from './components/AudioContext';

const App = () => {
  return (
    <AudioProvider>
    <Router>
      <Routes>
        <Route path="/" element={<BirthdayCard />} />
        <Route path="/birthdaycomponent" element={<BirthdayComponent />} />
      </Routes>
    </Router>
  </AudioProvider>
  );
};

export default App;