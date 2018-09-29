import React, { Component } from 'react';
import pointer from './../../assets/images/tachometer/pointer.png';
import background from './../../assets/images/tachometer/background.svg';
import * as PIXI from 'pixi.js'

class AirspeedIndicator extends Component {
	componentDidMount() {
		const app = new PIXI.Application(200, 200, {transparent: true});
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
// 		app.ticker.speed = 60;
		app.ticker.add(function(delta) {
			// just for fun, let's rotate mr rabbit a little
			// delta is 1 if running at 100% performance
			// creates frame-independent transformation
			pointerArrow.rotation += 0.05 * delta;
			console.log(delta)
		});
	}

	render() {
		return (
			<div className="clock" id="clock">
				<img src={background} alt=""/>
			</div>
		);
	}
}

export default AirspeedIndicator;