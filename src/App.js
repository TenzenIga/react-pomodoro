import React, { Component } from "react";
import Sidebar from "./components/sidebar";
import Screen from "./components/screen";
import "./App.css";
import tuturu from "./assets/tuturu_1.mp3";
class App extends Component {
  constructor() {
    super();
    this.state = {
      workTime: 1,
      breakTime: 5,
      seconds: 60,
      score: 0,
      isOn: false,
      status: "work",
      percentage: 0
    };

    this.start = this.start.bind(this);
    this.reset = this.reset.bind(this);
    this.countPercentage = this.countPercentage.bind(this);
    this.handleBreaktime = this.handleBreaktime.bind(this);
    this.handleWorktime = this.handleWorktime.bind(this);
  }
  audio = new Audio(tuturu);

  start() {
    const { breakTime, workTime, status } = this.state;
    switch (status) {
      case "break":
        this.timer = setInterval(
          () =>
            this.setState({
              seconds: this.state.seconds - 1,
              percentage:
                this.state.score % 3 === 0
                  ? this.state.percentage - this.countPercentage(breakTime * 3)
                  : this.state.percentage - this.countPercentage(breakTime)
            }),
          1000
        );

        break;
      default:
        this.timer = setInterval(
          () =>
            this.setState({
              seconds: this.state.seconds - 1,
              percentage: this.state.percentage + this.countPercentage(workTime)
            }),
          1000
        );
        this.setState({
          score: this.state.score + 1
        });
        break;
    }

    this.setState({
      isOn: true
    });
  }

  countPercentage(time) {
    return 100 / (time * 60);
  }
  reset() {
    clearInterval(this.timer);
    this.setState({
      seconds: this.state.workTime * 60,
      isOn: false,
      status: "work",
      percentage: 0
    });
  }

  componentDidUpdate() {
    if (this.state.seconds === 0) {
      clearInterval(this.timer);
      this.playSound();
      if (this.state.status === "work") {
        this.setState({
          status: "break",
          seconds:
            this.state.score % 3 === 0
              ? this.state.breakTime * 60 * 3
              : this.state.breakTime * 60,
          isOn: false
        });
      } else {
        this.setState({
          status: "work",
          seconds: this.state.workTime * 60,
          isOn: false
        });
      }
    }
  }

  getSeconds = () => {
    return `0${this.state.seconds % 60}`.slice(-2);
  };

  getMinutes = () => {
    return Math.floor(this.state.seconds / 60);
  };

  handleWorktime(e) {
    const { value } = e.target;
    if (!this.state.isOn) {
      this.setState({
        workTime: value,
        seconds: value * 60,
        percentage: 0,
        status: "work",
        score: 0
      });
    }
  }

  handleBreaktime(e) {
    const { value } = e.target;
    if (!this.state.isOn) {
      this.setState({
        breakTime: value,
        percentage: 0,
        seconds: this.state.workTime * 60,
        score: 0,
        status: "work"
      });
    }
  }
  playSound = () => {
    let playVar = this.audio.play();
    if (playVar !== "undefined") {
      playVar
        .then(function() {})
        .catch(function(error) {
          console.log(error);
        });
    }
  };
  render() {
    const { workTime } = this.state;
    return (
      <div className="App">
        <Sidebar
          handleInput={this.handleInput}
          workTime={this.state.workTime}
          breakTime={this.state.breakTime}
          handleBreaktime={this.handleBreaktime}
          handleWorktime={this.handleWorktime}
        />

        <Screen
          percentage={this.state.percentage}
          minutes={this.getMinutes()}
          seconds={this.getSeconds()}
          start={this.start}
          reset={this.reset}
          status={this.state.status}
          isOn={this.state.isOn}
          score={this.state.score}
        />
      </div>
    );
  }
}

export default App;
