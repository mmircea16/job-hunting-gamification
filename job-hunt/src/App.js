import React, { Component } from 'react';
import './App.css';
import { Button } from 'reactbulma'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome! I will help you get a job</h1>
        </header>
        <p className="App-intro">
          Before you start you need to read about how to get ready for employment. Once you've done that please go further
        </p>
          <Button primary>Continue</Button>
      </div>
    );
  }
}

export default App;
