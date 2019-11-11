import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Joke } from './Joke';

function App() {
  const jokes = [
    new Joke("Why did the Republican chicken cross the road?",
      "FAKE NEWS!", 0, 0),
    new Joke("Why did the Democrat chicken cross the road?",
      "IMPEACH IT!", 0, 0),
    new Joke("Why did the millennial chicken cross the road?",
      "OK boomer", 0, 0),
    new Joke("Why did Chuck Norris cross the road?",
      "He was hungry for chicken!", 0, 0)
  ];
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          I am a React developer now!
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
