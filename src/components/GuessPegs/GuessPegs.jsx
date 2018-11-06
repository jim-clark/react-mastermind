import React from 'react';
import GuessPeg from '../GuessPeg/GuessPeg';
import styles from './GuessPegs.module.css';

const GuessPegs = (props) => (
  <div className={styles.pegs}>
    <GuessPeg 
      color={props.colors[props.code[0]]}
      currentGuess={props.currentGuess}
      handlePegClick={() => props.handlePegClick(0)}
    />
    <GuessPeg 
      color={props.colors[props.code[1]]}
      currentGuess={props.currentGuess}
      handlePegClick={() => props.handlePegClick(1)}
    />
    <GuessPeg 
      color={props.colors[props.code[2]]}
      currentGuess={props.currentGuess}
      handlePegClick={() => props.handlePegClick(2)}
    />
    <GuessPeg 
      color={props.colors[props.code[3]]}
      currentGuess={props.currentGuess}
      handlePegClick={() => props.handlePegClick(3)}
    />
  </div>
);

export default GuessPegs;
