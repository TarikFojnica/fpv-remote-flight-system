import React, { Component } from 'react';
import logo from './logo.svg';
import arrow from './images/right-arrow.png';
import jet from './images/jet.png';
import './App.css';
import * as PIXI from 'pixi.js'


class App extends Component {
  componentDidMount() {
		const app = new PIXI.Application(1000, 700, {backgroundImage : jet});
		document.getElementById('clock').appendChild(app.view);

// create a new Sprite from an image path
		let bunny = PIXI.Sprite.fromImage(arrow);

// center the sprite's anchor point
		bunny.anchor.set(0, 0.5);

// move the sprite to the center of the screen
		bunny.x = app.screen.width / 2;
		bunny.y = app.screen.height / 2;

		app.stage.addChild(bunny);

// Listen for animate update
		app.ticker.add(function(delta) {
			// just for fun, let's rotate mr rabbit a little
			// delta is 1 if running at 100% performance
			// creates frame-independent transformation
			bunny.rotation += 0.1 * delta;
		});
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <div class="clock" id="clock"></div>
      </div>
    );
  }
}

export default App;
