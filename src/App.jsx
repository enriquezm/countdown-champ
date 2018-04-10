import React from 'react';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      deadline: 'December 25, 2018',
      newDeadline: ''
    }
  }

  changeDeadline() {
    this.setState({
      deadline: this.state.newDeadline
    })
  }

  render() {
    return (
      <div className="app">
        <div className="app-title">Countdown to {this.state.deadline}</div>
        <div>
          <div className="clock clock-days">4 days</div>
          <div className="clock clock-hours">22 hours</div>
          <div className="clock clock-minutes">15 minutes</div>
          <div className="clock clock-seconds">10 seconds</div>
        </div>
        <div>
          <input
            placeholder='new date'
            onChange={event => this.setState({newDeadline: event.target.value})}
          />
          <button onClick={() => this.changeDeadline()}>Submit</button>
        </div>
      </div>
    );
  }
}

export default App;
