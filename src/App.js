import React, { useState } from 'react';
import './App.css';

function App() {
  // Initial array of interests
  const [interests, setInterests] = useState([
    'Traveling',
    'Cooking',
    'Working out',
    'Going to Music festivals',
    'Watching thrillers',
  ]);

  // Function to reorder the list of interests
  const reorderInterests = () => {
    const newOrder = [...interests];
    newOrder.push(newOrder.shift()); // Move the first item to the end
    setInterests(newOrder); // Update the state to re-render the list
  };

  return (
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
          <img src="/monica.jpg" alt="Monica Dinh" width={250} height={300} />
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
  );
}

export default App;
