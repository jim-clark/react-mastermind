import React from 'react';
import GuessPegs from '../GuessPegs/GuessPegs';
import GuessScore from '../GuessScore/GuessScore';
import ScoreButton from '../ScoreButton/ScoreButton';
import './GuessRow.css';

const GuessRow = (props) => (
  <div className='GuessRow'>
    <div
      className='row-num'
      style={{color: props.currentGuess ? 'black' : 'lightgrey'}}
    >
      {props.rowIdx + 1}
    </div>
    <GuessPegs
      code={props.guess.code}
      colors={props.colors}
      currentGuess={props.currentGuess}
      handlePegClick={props.handlePegClick}
    />
    {
      props.currentGuess ?
        <ScoreButton
          handleScoreClick={props.handleScoreClick}
          disabled={props.guess.code.includes(null)}
        /> :
        <GuessScore score={props.guess.score} />
    }
  </div>
);

export default GuessRow;
