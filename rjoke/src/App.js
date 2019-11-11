import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Joke, JokeUI, JokeList } from './Joke';
import { Header } from './Header';
import { Footer } from './Footer';

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
      <Header />

      {/* <JokeUI joke={jokes[0]} /> */}
      <JokeList jokes={jokes} />

      <Footer company="Neward &amp; Associates, LLC" />
    </div>
  );
}

export default App;
