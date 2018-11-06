import React from 'react';
import styles from './NewGameButton.module.css';

const NewGameButton = (props) => (
  <button
    className={`${styles.button} btn btn-default`}
    onClick={props.handleNewGameClick}
  >
    New Game
  </button>
);

export default NewGameButton;
