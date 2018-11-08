import React from 'react';
import {Link} from 'react-router-dom';
import './SettingsPage.css';

const SettingsPage = (props) => {

  const selectedLevelStyle = {
    border: '2px solid #333'
  };

  function handleDifficultyChange(level) {
    props.handleDifficultyChange(level);
    props.handleNewGame();
    props.history.push('/');
  }

  const levels = props.colorTable.map((level, idx) => (
    <div className='Settings-level-row' key={level.name}>
      <button className="Settings-level-btn btn btn-default"
        style={idx === props.difficultyLevel ? selectedLevelStyle : null}
        disabled={idx === props.difficultyLevel}
        onClick={() => handleDifficultyChange(idx)}
      >
        {level.name}
      </button>
      <div className='Settings-level-colors'>
        {level.colors.map(color => 
          <div
            className='Settings-color'
            style={{backgroundColor: color}}
            key={color}
          />
        )}
      </div>
    </div>
  ));

  return (
    <div className='Settings'>
      <header className='header-footer'>Set Difficulty Level</header>
      <div>
        {levels}
      </div>
      <div>
        <Link className='Settings-cancel btn btn-default btn-sm' to='/'>Cancel</Link>
      </div>
    </div>
  );

};

export default SettingsPage;
