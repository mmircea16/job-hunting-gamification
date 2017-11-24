import React, { Component } from 'react';
import './App.css';
import { Button } from 'reactbulma'
import {NameQuestion} from "./components/NameQuestion";

// react-dom (what we'll use here)
import { BrowserRouter, Link, Route } from 'react-router-dom'

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
          <Link to="/name_question"><Button primary>Continue</Button></Link>
      </div>
    );
  }
}

class Question extends Component {
    render() {
        return <div>Hello World</div>
    }
}

class RoutedApp extends Component {
    render() {
        return <BrowserRouter>
            <div>
                {/*<nav>*/}
                    {/*<Link to="/dashboard">Dashboard</Link>*/}
                {/*</nav>*/}
                <div>
                    <Route exact path="/" component={App}/>
                    <Route exact path="/name_question" component={NameQuestion}/>
                </div>
            </div>
        </BrowserRouter>
    }
}
export default RoutedApp;
