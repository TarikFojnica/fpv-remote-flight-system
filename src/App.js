import React, { Component } from 'react';
import logo from './logo.svg';
import pointer from './images/tachometer/pointer.png';
import background from './images/tachometer/background.svg';
import jet from './images/jet.png';
import './App.css';
import * as PIXI from 'pixi.js'


class App extends Component {
  componentDidMount() {
		const app = new PIXI.Application(400, 400, {transparent: true});
		document.getElementById('clock').appendChild(app.view);

// create a new Sprite from an image path
		let bunny = PIXI.Sprite.fromImage(pointer, {width: 100, height: 10});

// center the sprite's anchor point
		bunny.anchor.set(0, 0);

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
        <div className="clock" id="clock">
          <img src={background} alt=""/>
        </div>
      </div>
    );
  }
}

export default App;
