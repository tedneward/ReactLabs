import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Joke } from './Joke';

function App() {
  const jokes = [
    new Joke("Joke setup", "Joke punchline", 0, 0),
    new Joke("Joke setup", "Joke punchline", 0, 0),
    new Joke("Joke setup", "Joke punchline", 0, 0),
    new Joke("Joke setup", "Joke punchline", 0, 0),
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
