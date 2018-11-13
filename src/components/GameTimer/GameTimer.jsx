import React, { Component } from 'react';
import styles from './GameTimer.module.css';

function formatTime(seconds) {
  let mins = Math.floor(seconds / 60).toString().padStart(2, '0');
  let secs = (seconds % 60).toString().padStart(2, '0');
  return `${mins}:${secs}`;
}

class GameTimer extends Component {
  // ES7+ Class property syntax
  state = {
    elapsedTime: 0
  };

  handleTick = () => {
    if (!this.props.isTiming) return;
    this.setState(
      curState => ({elapsedTime: ++curState.elapsedTime}),
      () => { this.props.handleTimerUpdate(this.state.elapsedTime, this.resetTimer); }
    );
  };

  resetTimer = () => {
    this.setState({ elapsedTime: 0 });
  }

  /*--- Lifecycle Methods ---*/

  componentDidMount() {
    this.timerId = setInterval(this.handleTick, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timerId);
  }

  render() {
    return (
      <div className={styles.GameTimer}>
        {formatTime(this.state.elapsedTime)}
      </div>
    );
  }
}

export default GameTimer;