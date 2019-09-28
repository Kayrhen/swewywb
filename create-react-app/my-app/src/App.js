import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Navigation from './components/Navigation'

class App extends Component {
  render() {
    return (
    	<div>
      <Navigation />
      <div className="App">
        <header className="App-header">
          <p>
            Blakk is better.
          </p>
        </header>
      </div>
      </div>
    );
  }
}

export default App;
