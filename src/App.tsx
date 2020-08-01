import React from 'react';
import logo from './logo.svg';
import './App.css';
import Menu from './Menu/Menu';

function App() {
  return (
    <div className="App">
      <Menu />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Dropdown menu test.
        </p>
      </header>
    </div>
  );
}

export default App;
