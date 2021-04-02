import logo from './logo.png';
import React, { Component } from 'react'
import ReactPlayer from 'react-player'
import './App.css';

// function UpdateURL() {
//   var player = document.getElementById("player");
//   var input = document.getElementById("url-input");

//   player.url = input.value;
// }

class App extends Component {
  state = {
    url: null,
    loop: true,
    playing: true
  }

  render() {
    const { url, loop, playing } = this.state

    return (
      <div className="App">
      <header className="App-header">
        <h1>Welcome to RePeter!</h1>
      </header>
      <img src={logo} className="App-logo" alt="logo" />

      <div className="Pete">
        <h1>I am Peter! I will Re-Pete anything you want me to play! (Haha get it?)</h1>
      </div>

      <div className="Instruct">
        <h1>Just enter a valid URL and enjoy!</h1>
      </div>

      <div className="Player">
        <div className="Controls">
          <input ref={input => { this.urlInput = input}} type='text' placeholder='Enter URL'></input>
          <button className="Button" onClick={ () => this.setState({url: this.urlInput.value})}>Go!</button>
        </div>
        <ReactPlayer className='React-player' url={url} loop={loop} playing={playing}></ReactPlayer>
      </div>
      
      <div className="Pre-List">
        <h1>What can I play?</h1>
        <ul className="List">
          <li>YouTube</li>
          <li>Soundcloud</li>
          <li>Twitch</li>
          <li>Vimeo</li>
          <li>Facebook videos</li>
        </ul>
      </div>

    </div>
    )
  }
}

export default App;
