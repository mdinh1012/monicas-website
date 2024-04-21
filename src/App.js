import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './NavBar'; // Import NavBar component
import Home from './Home'; // Ensure this is the correct path
import ThingsToRead from './ThingsToRead'; // Ensure this is the correct path

function App() {
  return (
    <Router>
      <NavBar />
      <Routes> {/* Routes should wrap all Route components */}
        <Route path="/" element={<Home />} />  {/* Specify path="/" for Home */}
        <Route path="/things-to-read" element={<ThingsToRead />} />
      </Routes>
    </Router>
  );
}

export default App;
