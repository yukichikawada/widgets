import React from 'react';
import ReactDOM from 'react-dom';

class Clock extends React.Component {
  constructor() {
    super();
    let time = new Date();
    const id = time.getTime();
    this.state = {
      time: time
    };
    this.tick = this.tick.bind(this);
  }

  render() {
    let time = this.state.time;
    return (
      <div><h1>Clock</h1>
        <div className="clock">
          <div className="clock-headers">
            <h4>Time:</h4>
            <h4>Date:</h4>
          </div>
          <div className="clock-values">
            <h4 className="time">
              {time.getHours()}:{time.getMinutes()}:{time.getSeconds()} PDT
            </h4>
            <h4 className="date">
              {this.getDayName(time.getDay())} {this.getMonthName(time.getMonth())} {time.getDate()} {time.getFullYear()}
            </h4>
          </div>
        </div>
      </div>
    );
  }

  getDayName(index) {
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    return days[index];
  }

  getMonthName(index) {
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    return months[index];
  }

  tick() {
    let time = new Date();
    this.setState({ time });
  }

  componentDidMount() {
    setInterval(this.tick, 1000);
  }

  componentWillUnmount() {
    this.setState({time: undefined});
  }
}

module.exports = Clock;
