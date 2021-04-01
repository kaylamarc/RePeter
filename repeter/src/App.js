import logo from './logo.png';
import React from 'react'
import ReactPlayer from 'react-player'
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to RePeter!</h1>
      </header>
      <img src={logo} className="App-logo" alt="logo" />

      <div className="Pete">
        <h1>I am Peter! I will Re-Pete anything you want me to play! (Haha get it?)</h1>
      </div>

      <div className="Player">
        <ReactPlayer url='https://youtu.be/izwSQOLUakw' />
      </div>

    </div>
  );
}

export default App;
