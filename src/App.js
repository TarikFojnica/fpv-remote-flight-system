import React, { Component } from 'react';
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
		let pointerArrow = PIXI.Sprite.fromImage(pointer, {width: 100, height: 10});

// center the sprite's anchor point
		pointerArrow.anchor.set(0.5, 0.1);

// move the sprite to the center of the screen
		pointerArrow.x = app.screen.width / 2;
		pointerArrow.y = app.screen.height / 2;

		app.stage.addChild(pointerArrow);

// Listen for animate update
		app.ticker.add(function(delta) {
			// just for fun, let's rotate mr rabbit a little
			// delta is 1 if running at 100% performance
			// creates frame-independent transformation
			pointerArrow.rotation += 0.1 * delta;
		});
  }

  render() {
    return (
      <div className="App">
        <div className="clock" id="clock">
          <img src={background} alt=""/>
        </div>
      </div>
    );
  }
}

export default App;
