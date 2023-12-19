import { useState } from 'react';
import Button from '@mui/material/Button';
import { ThemeProvider } from '@mui/material/styles';
import buttonTheme from '../../themes/buttonTheme';
import NewCluesButton from './NewCluesButton';
import PlayerFeedbackContainer from '../PlayerFeedbackContainer';
import getTitle from '../../logic/getTitle';
import clearAll from '../../logic/clearAll';
import fillGifContainer from '../../logic/fillGifContainer';
import stockGifs from '../../models/stockGifs';

const InteractionContainer = ({
  countingDown,
  setCountingDown,
  gifCounter,
  setGifCounter,
  gifSources,
  setGifSources,
  playerFeedback,
  setPlayerFeedback,
  // playerFeedbackHidden,
  // setPlayerFeedbackHidden,
  secondsLeft,
  setSecondsLeft,
  selectedCategory,
  setSelectedCategory,
  title,
  setTitle,
  score,
  setScore,
}) => {
  const [guess, setGuess] = useState('');

  const startTimer = () => setCountingDown((prev) => !prev);

  const startNewRound = () => {
    if (gifSources.length) {
      clearAll(gifSources.length);
    }
    // setPlayerFeedbackHidden('hide');
    setPlayerFeedback('');

    setGifCounter(0);
    setTitle(
      getTitle(selectedCategory, gifSources, setGifSources, setPlayerFeedback)
      // getTitle(selectedCategory, setPlayerFeedback, setPlayerFeedbackHidden)
    );
    startTimer();
  };

  const startNewPlayer = () => {
    setScore(0);
    startNewRound();
  };

  let hiddenBetweenRounds = countingDown ? 'show' : 'hide';

  let hiddenDuringPlay = countingDown ? 'hide' : 'show';

  const isPlayerCorrect = (e) => {
    e.preventDefault();
    setCountingDown(false);
    setSecondsLeft(15);
    if (gifSources.length) {
      clearAll(gifSources.length);
    }
    // setPlayerFeedbackHidden('');
    // if player is CORRECT
    if (
      guess.toLowerCase() === title.titleString ||
      guess.toLowerCase() === title.gifWords.join(' ')
      // guess.toLowerCase() === masterArray[randomIndex].toLowerCase() ||
      // guess.toLowerCase() === gifWords.join(' ')
    ) {
      setGifSources(stockGifs.winnerGifs);

      setScore((prev) => prev + 100 + secondsLeft);
      setPlayerFeedback(
        `Correct! You earned ${100 + secondsLeft} points.
        \n(Redeemable for food rations in a future dystopian hellscape)`
      );
      // console.log('winnerGifs[0].url', winnerGifs[0].url);

      // pScore += 100 + seconds;
      // playerScore.innerHTML = `Your Score: ${pScore}`;
      // clearBetweenGifs();
      // showWinnerGifs();
      // if player is INCORRECT
    } else {
      setGifSources(stockGifs.loserGifs);
      setPlayerFeedback(
        `Yeah...no. The correct answer was ${title.titleString.toUpperCase()}.`
      );
      // clearBetweenGifs();
      // showLoserGifs();
    }

    // fillGifContainer(
    //   { titleString: 'winner', nonGifText: {}, gifWords: [] },
    //   gifSources
    // );

    setGuess('');
  };

  return (
    <div className='interaction-container'>
      {/* <button id="newClue" className="hide">New Clues Please!</button> */}
      <ThemeProvider theme={buttonTheme}>
        <div className={hiddenBetweenRounds}>
          <NewCluesButton
            gifCounter={gifCounter}
            setGifCounter={setGifCounter}
          />
        </div>
        {/* <p className={playerFeedbackHidden} id='is-player-correct'>
          {playerFeedback}
        </p> */}

        <PlayerFeedbackContainer playerFeedback={playerFeedback} />

        <form
          id='answ'
          onSubmit={isPlayerCorrect}
          className={hiddenBetweenRounds}
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

        <form id='nextRoundForm' className={hiddenDuringPlay}>
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
        <div className={hiddenDuringPlay}>
          <Button
            variant='contained'
            id='new-round-button'
            onClick={startNewRound}

            // value="Let's Play Giffles!"
          >
            {/* ***'NEXT ROUND' EXCEPT FOR FIRST ROUND */}
            Let's Play Giffles!
          </Button>
        </div>

        <div id='score-and-reset'>
          <p className='playerScore'>Your Score: {score}</p>
          {/* <button id="newPlayer" className="hide">New Player / Reset Game</button> */}
          <Button
            variant='contained'
            color='secondary'
            id='newPlayer'
            className='hide'
            onClick={startNewPlayer}
          >
            New Player / Reset Game
          </Button>
        </div>
      </ThemeProvider>
    </div>
  );
};

export default InteractionContainer;
