import React from 'react';
import logo from './logo.svg';
import './App.css';
import Adder from './components/Adder';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Cristobal's Adder React App</h1>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <Adder />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React, or Angular :v
        </a>
      </header>
    </div>
  );
}

export default App;
