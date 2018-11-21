import React, { Component } from 'react';
import styles from './GameTimer.module.css';
import { formatTime } from '../../utils/utilities';

class GameTimer extends Component {
  // ES7+ Class property syntax
  state = {
    elapsedTime: this.props.startTime
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