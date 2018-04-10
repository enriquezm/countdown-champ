import React from 'react';
import './App.css';

class App extends React.Component {
  render() {
    return (
      <div className="app">
        <div className="app-title">Countdown to December 25, 2018</div>
        <div>
          <div className="clock clock-days">4 days</div>
          <div className="clock clock-hours">22 hours</div>
          <div className="clock clock-minutes">15 minutes</div>
          <div className="clock clock-seconds">10 seconds</div>
        </div>
        <div>
          <input placeholder='new date' />
          <button>Submit</button>
        </div>
      </div>
    );
  }
}

export default App;
