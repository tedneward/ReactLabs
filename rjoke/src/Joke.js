import React from 'react';
import PropTypes from 'prop-types';

export class Joke {
  constructor(setup, punchline, lols, groans) {
    this.setup = setup;
    this.punchline = punchline;
    this.lols = lols;
    this.groans = groans;
  }
}

export class UpvoteCounter extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: props.count };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    this.setState(prevState => ({ count: prevState.count + 1 }));
    if (this.props.onVote !== undefined) 
      this.props.onVote(this.state.count);
  }
  render() {
    return (
      <span>{this.state.count}<button onClick={this.handleClick}>&#x25B2;</button></span>
    );
  }
  static propTypes = {
    count: PropTypes.number
  };
  static defaultProps = {
    count: 0
  };
}

export class JokeUI extends React.Component {
  constructor(props) {
    super(props);

    let editing = false;
    if (this.props.joke.setup === undefined ||
        this.props.joke.punchline === undefined ||
        this.props.joke.setup === "" ||
        this.props.joke.punchline === "")
      editing = true;

    this.state = {
      joke: this.props.joke,
      visible: false,
      editing: editing,
    };

    this.handlePunchlineClick = this.handlePunchlineClick.bind(this);
    this.onLOLVote = this.onLOLVote.bind(this);
    this.onGroanVote = this.onGroanVote.bind(this);

    this.onEditSubmit = this.onEditSubmit.bind(this);
    this.onSetupChange = this.onSetupChange.bind(this);
    this.onPunchlineChange = this.onPunchlineChange.bind(this);
  }

  handlePunchlineClick() {
    this.setState( prevState => ({visible: !prevState.visible}) );
  }
  onLOLVote() {
    this.setState((prevState) => (
      {joke: new Joke(prevState.joke.setup, 
        prevState.joke.punchline, 
        prevState.joke.lols + 1, 
        prevState.joke.groans)}) );
  }
  onGroanVote() {
    this.setState((prevState) => (
      {joke: new Joke(prevState.joke.setup, 
        prevState.joke.punchline, 
        prevState.joke.lols, 
        prevState.joke.groans + 1)}) );
  }

  render() {
    return (this.state.editing ? this.renderEditUI() : this.renderDisplayUI());
  }

  renderDisplayUI() {
    return <p>
      <span>{this.state.joke.setup}</span>
      <br/>
      <span onClick={this.handlePunchlineClick}>
        <b>{this.state.visible ? this.state.joke.punchline : "CLICK FOR PUNCHLINE"}</b>
      </span>
      <br/>
      <span>LOLs: <UpvoteCounter count={this.state.joke.lols} 
        onVote={ this.onLOLVote } /></span>&nbsp;
      <span>Groans: <UpvoteCounter count={this.state.joke.groans} 
        onVote={ this.onGroanVote } /></span>
    </p>;
  }

  onSetupChange(event) {
    let text = event.target.value;
    this.setState(prevState => ({joke: new Joke(text, 
      prevState.joke.punchline, 
      prevState.joke.lols, 
      prevState.joke.groans)
    }) );
  }
  onPunchlineChange(event) {
    let text = event.target.value;
    this.setState(prevState => ({joke: new Joke(prevState.joke.setup, 
      text, 
      prevState.joke.lols, 
      prevState.joke.groans)
    }) );
  }
  onEditSubmit(event) {
    this.setState({editing: false});
    event.preventDefault();
  }

  renderEditUI() {
    return <form onSubmit={this.onEditSubmit}>
        <label>
          Setup: <textarea value={this.state.joke.setup} onChange={ this.onSetupChange }/>
        </label>
        <label>
          Punchline: <textarea value={this.state.joke.punchline} onChange={ this.onPunchlineChange }/>
        </label>
        <br/>
        <input type="submit" value="Finished" />
      </form>;
  }
}

export class JokeList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      jokes: this.props.jokes
    };
    this.onNewJoke = this.onNewJoke.bind(this);
  }

  onNewJoke() {
    this.setState(prevState => ({jokes: prevState.jokes.concat([new Joke()])}) );
  }

  render() {
    const jokes = this.state.jokes.map( (joke, idx) =>
      <li key={idx}>
        <JokeUI joke={joke} />
      </li> 
    );
    return <div>
      <ul>{jokes}</ul>
      <button onClick={this.onNewJoke}>Add new Joke</button>
    </div>;
  }
}