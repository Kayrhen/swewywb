import React, { Component } from 'react';
import { Navbar, Jumbotron, Button, NavDropdown } from 'react-bootstrap';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      </header>
      <body>
        <nav class="navbar navbar-expand-md">
            <ul class="navbar-nav">
                <li class="nav-item">
                    <a class="nav-link" href="#">Cities</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Professions</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Weather</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">About</a>
                </li>
            </ul>
        </nav>
      </body>
    </div>
  );
}

export default App;
