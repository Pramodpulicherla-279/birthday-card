import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import BirthdayCard from './components/BirthdayCard';
import NewPage from './components/BirthdayComponent';
import BirthdayComponent from './components/BirthdayComponent';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<BirthdayCard />} />
        <Route path="/newpage" element={<BirthdayComponent />} />
      </Routes>
    </Router>
  );
};

export default App;