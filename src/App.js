import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './NavBar'; // Import NavBar component
import Home from './Home'; // Ensure this is the correct path
import ThingsToRead from './ThingsToRead'; // Ensure this is the correct path

function App() {
  return (
<<<<<<< HEAD
    <Router>
      <NavBar />
      <Routes> {/* Routes should wrap all Route components */}
        <Route path="/" element={<Home />} />  {/* Specify path="/" for Home */}
        <Route path="/things-to-read" element={<ThingsToRead />} />
      </Routes>
    </Router>
=======
    <div className="App">
      <header>
        <h1>Welcome!</h1>
        <p>Hello, I am Monica. </p>
         <p> Welcome to my personal website where I share a little bit about myself. </p>
      </header>
      <main>
        <section>
          <h2>About Me</h2>
          <p>I'm Monica, a passionate explorer of the world, from cuisine to culture. Here's a glimpse into my life and what I love to do.
            I am currently a 4th year student at The University of Washington in the CSSE program.
          </p>
          <img src="/dog.jpeg" alt="Monica Dinh" width={250} height={300} />
        </section>
        <section>
          <h2>Things I enjoy:</h2>
          <ul>
            {interests.map((interest, index) => (
              <li key={index}>{interest}</li>
            ))}
          </ul>
          <button onClick={reorderInterests}>Reorder Interests</button>
        </section>
      </main>
    </div>
>>>>>>> 2d9a4eccc6f40a4de3fcaed1ad195c641f26e890
  );
}

export default App;
