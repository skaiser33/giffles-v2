import Button from '@mui/material/Button';
import { ThemeProvider } from '@mui/material/styles';
import buttonTheme from '../../themes/buttonTheme';
import NewCluesButton from './NewCluesButton';
import PlayerFeedbackContainer from '../PlayerFeedbackContainer';
import getTitle from '../../logic/getTitle';
import clearAll from '../../logic/clearAll';
import stockGifs from '../../models/stockGifs';
import { timerValue } from '../../logic/constants';

const InteractionContainer = ({
  countingDown,
  setCountingDown,
  guess,
  setGuess,
  gifCounter,
  setGifCounter,
  gifSources,
  setGifSources,
  isNewGame,
  setIsNewGame,
  playerFeedback,
  setPlayerFeedback,
  prevRandomIndices,
  setPrevRandomIndices,
  secondsLeft,
  setSecondsLeft,
  selectedCategory,
  setSelectedCategory,
  title,
  setTitle,
  score,
  setScore,
}) => {
  const startTimer = () => setCountingDown((prev) => !prev);

  const startNewRound = () => {
    clearAll();
    setPlayerFeedback('');
    setGifCounter(0);
    setTitle(
      getTitle(
        selectedCategory,
        gifSources,
        setGifSources,
        setPlayerFeedback,
        prevRandomIndices,
        setPrevRandomIndices
      )
    );
    startTimer();
  };

  const startNewPlayer = () => {
    clearAll();
    setCountingDown(false);
    setGifCounter(0);
    setGifSources([]);
    setIsNewGame(true);
    setPlayerFeedback('');
    setPrevRandomIndices({
      movies: [],
      songs: [],
      books: [],
    });
    setScore(0);
    setSecondsLeft(timerValue);
    // setGuess('');
  };

  let hiddenBetweenRounds = countingDown ? 'show' : 'hide';

  let hiddenDuringPlay = countingDown ? 'hide' : 'show';

  const isPlayerCorrect = (e) => {
    e.preventDefault();
    if (isNewGame) {
      setIsNewGame(false);
    }
    setCountingDown(false);
    setSecondsLeft(timerValue);
    clearAll();
    // if player is CORRECT
    if (
      guess.toLowerCase() === title.titleString ||
      guess.toLowerCase() === title.gifWords.join(' ')
    ) {
      setGifSources(stockGifs.winnerGifs);

      setScore((prev) => prev + 100 + secondsLeft);
      setPlayerFeedback(
        `Correct! You earned ${100 + secondsLeft} points.
        \n(Redeemable for food rations in a future dystopian hellscape)`
      );

      // if player is INCORRECT
    } else {
      setGifSources(stockGifs.loserGifs);
      setPlayerFeedback(
        `Yeah...no. The correct answer was ${title.titleString.toUpperCase()}.`
      );
    }

    setGuess('');
  };

  return (
    <div className='interaction-container'>
      <ThemeProvider theme={buttonTheme}>
        <div className={hiddenBetweenRounds}>
          <NewCluesButton
            gifCounter={gifCounter}
            setGifCounter={setGifCounter}
          />
        </div>

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
          <button id='answerButton' type='submit'>
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
        </form>
        <div className={hiddenDuringPlay}>
          <Button
            variant='contained'
            id='new-round-button'
            onClick={startNewRound}
          >
            {/* ***'NEXT ROUND' EXCEPT FOR FIRST ROUND */}
            {isNewGame ? "Let's Play Giffles!" : 'Next Round!'}
          </Button>
        </div>

        <div id='score-and-reset'>
          <p className='playerScore'>Your Score: {score}</p>
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
