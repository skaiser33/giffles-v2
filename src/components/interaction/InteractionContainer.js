// import React from 'react';
// import { useState } from 'react';
import Button from '@mui/material/Button';
import { ThemeProvider } from '@mui/material/styles';
import buttonTheme from '../../themes/buttonTheme';
import NewCluesButton from './NewCluesButton';
import getTitle from '../../api/getTitle';
import clearAll from '../../api/clearAll';

const InteractionContainer = ({
  selectedCategory,
  setSelectedCategory,
  gifCounter,
  setGifCounter,
  gifSources,
  setGifSources,
  setTitle,
  countingDown,
  setCountingDown,
  score,
  setScore,
}) => {
  // const [selectedCategory, setSelectedCategory] = useState('movies');
  // let gifCounter = 0;
  const startTimer = () => setCountingDown((prev) => !prev);

  const startNewRound = () => {
    if (gifSources.length) {
      clearAll(gifSources.length);
    }
    setGifCounter(0);
    setTitle(getTitle(selectedCategory));
    startTimer();
  };

  let answerInputHidden = countingDown ? '' : 'hide';
  // let answerInputHidden = '';

  return (
    <div className='interaction-container'>
      {/* <button id="newClue" className="hide">New Clues Please!</button> */}
      <ThemeProvider theme={buttonTheme}>
        <NewCluesButton gifCounter={gifCounter} setGifCounter={setGifCounter} />
        <p className='hide' id='is-player-correct'></p>

        <form id='answ' className={answerInputHidden}>
          <label htmlFor='answer'>Guess the title:</label>
          <input type='text' id='answer' name='answer' />
          <input id='answerButton' type='submit' value='Submit Answer' />
        </form>

        <form id='nextRoundForm'>
          <label htmlFor='categories'>Choose your category:</label>
          <select
            name='categories'
            id='categories'
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
          >
            <option value='movies'>Movies</option>
            <option value='songs'>Songs</option>
            <option value='books'>Books</option>
          </select>
          {/* <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={age}
          label="Age"
          onChange={handleChange}
        >
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select> */}
          {/* <input id='next' type='submit' value="Let's Play Giffles!" /> */}
        </form>
        <button
          id='new-round-button'
          onClick={startNewRound}
          // value="Let's Play Giffles!"
        >
          Let's Play Giffles!
        </button>

        <div id='score-and-reset'>
          <p className='playerScore'>Your Score: {score}</p>
          {/* <button id="newPlayer" className="hide">New Player / Reset Game</button> */}
          <Button
            variant='contained'
            color='secondary'
            id='newPlayer'
            className='hide'
          >
            New Player / Reset Game
          </Button>
        </div>
      </ThemeProvider>
    </div>
  );
};

export default InteractionContainer;
