import { useState } from 'react';
import Button from '@mui/material/Button';
import { ThemeProvider } from '@mui/material/styles';
import buttonTheme from '../../themes/buttonTheme';
import NewCluesButton from './NewCluesButton';
import getTitle from '../../api/getTitle';
import clearAll from '../../api/clearAll';
import hideAfterAnswer from '../../api/hideAfterAnswer';

const InteractionContainer = ({
  countingDown,
  setCountingDown,
  gifCounter,
  setGifCounter,
  gifSources,
  playerFeedback,
  setPlayerFeedback,
  playerFeedbackHidden,
  secondsLeft,
  selectedCategory,
  setSelectedCategory,
  title,
  setTitle,
  score,
  setPlayerFeedbackHidden,
}) => {
  const [guess, setGuess] = useState('');

  const startTimer = () => setCountingDown((prev) => !prev);

  const startNewRound = () => {
    if (gifSources.length) {
      clearAll(gifSources.length);
    }
    setPlayerFeedbackHidden('hide');
    setGifCounter(0);
    setTitle(getTitle(selectedCategory));
    startTimer();
  };

  let answerInputHidden = countingDown ? '' : 'hide';

  const isPlayerCorrect = (e) => {
    e.preventDefault();
    // clearInterval(timer);
    // console.log('answersubmit e.target.answer.value is', e.target.answer.value);
    // console.log('answersubmit guess is', guess);
    // guess = answerInput.value;
    hideAfterAnswer();
    setPlayerFeedbackHidden('');
    if (
      guess.toLowerCase() === title.titleString ||
      guess.toLowerCase() === title.gifWords.join(' ')
      // guess.toLowerCase() === masterArray[randomIndex].toLowerCase() ||
      // guess.toLowerCase() === gifWords.join(' ')
    ) {
      setPlayerFeedback(
        `Correct! You earned ${
          100 + secondsLeft
        } points.<br><em>(redeemable for food rations in a future dystopian hellscape)</em>`
      );
      // isPlayerCorrect.innerHTML = `Correct! You earned ${
      //   100 + seconds
      // } points.<br><em>(redeemable for food rations in a future dystopian hellscape)</em>`;
      // pScore += 100 + seconds;
      // playerScore.innerHTML = `Your Score: ${pScore}`;
      // clearBetweenGifs();
      // showWinnerGifs();
    } else {
      setPlayerFeedback(
        `Yeah...no. <br>The correct answer was <em>${title.titleString}.</em>`
      );

      // isPlayerCorrect.innerHTML = `Yeah...no.<br>The correct answer was <em>${masterArray[randomIndex]}.</em>`;
      // clearBetweenGifs();
      // showLoserGifs();
    }
    setGuess('');
  };

  return (
    <div className='interaction-container'>
      {/* <button id="newClue" className="hide">New Clues Please!</button> */}
      <ThemeProvider theme={buttonTheme}>
        <NewCluesButton gifCounter={gifCounter} setGifCounter={setGifCounter} />
        <p className={playerFeedbackHidden} id='is-player-correct'>
          {playerFeedback}
        </p>

        <form
          id='answ'
          onSubmit={isPlayerCorrect}
          className={answerInputHidden}
        >
          <label htmlFor='answer'>Guess the title:</label>
          <input
            type='text'
            id='answer'
            name='answer'
            value={guess}
            onChange={(e) => {
              setGuess(e.target.value);
            }}
          />
          <button
            id='answerButton'
            type='submit'
            // value=''
          >
            Submit Answer
          </button>
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
