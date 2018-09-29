import React, { Component } from 'react';
import './assets/styles/main.css';

import AirspeedIndicator from './components/AirspeedIndicator'


class App extends Component {
  render() {
    return (
      <div className="App">
				<div className="controls">
          <AirspeedIndicator/>
          <AirspeedIndicator/>
          <AirspeedIndicator/>
        </div>
      </div>
    );
  }
}

export default App;
