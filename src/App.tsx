import React from 'react';
import logo from './logo.svg';
import './App.css';
import './assets/styles/style.css';
import header1 from './components/header';

const newLocal = "const";
function App() {
  return (
    <div className="App">
      <div className="App-header">
        {newLocal}
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          ---
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </div>
    </div>
  );
}

export default App;
