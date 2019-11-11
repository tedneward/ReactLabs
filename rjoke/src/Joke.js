import React from 'react';

export class Joke {
  constructor(setup, punchline, lols, groans) {
    this.setup = setup;
    this.punchline = punchline;
    this.lols = lols;
    this.groans = groans;
  }
}

export class JokeUI extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <div>{this.props.joke.punchline}</div>;
  }
}

export class JokeList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const jokes = this.props.jokes.map( (joke, idx) =>
      <li key={idx}>
        <JokeUI joke={joke} />
      </li> 
    );
    return <div>
      <ul>{jokes}</ul>
    </div>;
  }
}