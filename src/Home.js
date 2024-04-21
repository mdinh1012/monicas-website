import React, { useState } from 'react';
import './App.css';
import myImage from './myDOGS.png';
import { Link } from 'react-router-dom' ;

function Home() {
  const [items, setItems] = useState([
    'Traveling',
    'Cooking and Baking',
    'Working out',
    'Listening to podcasts',
  ]);

  const [ascending, setAscending] = useState(true);

  const reorderList = () => {
    let reorderedItems;
    if (ascending) {
      reorderedItems = [...items].sort().reverse();
    } else {
      reorderedItems = [...items].sort();
    }
    setItems(reorderedItems);
    setAscending(!ascending);
  };

  return (
    <div className="App">
      <div className="WelcomeMessage">
        <h1>Welcome!</h1>
      </div>
      <div className="ShortNarrative">
        <p>Hello, I am Monica. <br/>
          Welcome to my personal website where I share a little bit about myself.
        </p>
        <h2>About Me</h2>
        <p>I'm Monica, a passionate explorer of the world, from cuisine to culture. Here's a glimpse into my life and what I love to do. </p>
        <p>   I am currently a 4th year student at The University of Washington in the CSSE program.
         <p>  A fun fact about me is that I have 4 dogs! I know it's crazy right?! </p>
        </p>
      </div>
      <div className="Picture">
        <img src={myImage} alt="Four dogs on the couch" style={{ width: '600px', height: '400px'}} />
      </div>
      <div className="List">
        <p><strong>List of things I enjoy doing in my free time:</strong></p>
        <ul>
          {items.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
        <button onClick={reorderList}>Re-order List</button>
      </div>
    </div>
  );
}

export default Home;
