import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class ActionButton extends Component {
  render() {
    return (
        <button classNmae="action-button">
        Submit
        </button>
        )
  }
}

class App extends Component {
  render() {
    return (
      <div className="App">
      <ActionButton />
      </div>
    );
  }
}

export default App;
