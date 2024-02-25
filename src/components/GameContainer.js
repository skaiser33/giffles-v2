import React, { useState } from 'react';
import Timer from './Timer';
import CluesContainer from './clues/CluesContainer';
import InteractionContainer from './interaction/InteractionContainer';
import Instructions from './Instructions';

const GameContainer = () => {
  const [countingDown, setCountingDown] = useState(false);
  // handles which of 5 available gif clue sets is currently being displayed for the current round
  const [gifCounter, setGifCounter] = useState(0);
  // array of fixed height gif images retrieved from raw data in gifData
  const [gifSources, setGifSources] = useState([]);
  const [guess, setGuess] = useState('');

  const [isNewGame, setIsNewGame] = useState(true);
  const [playerFeedback, setPlayerFeedback] = useState('');
  const [score, setScore] = useState(0);
  const [secondsLeft, setSecondsLeft] = useState(15);
  const [selectedCategory, setSelectedCategory] = useState('movies');
  const [title, setTitle] = useState({
    titleString: [],
    gifWords: [],
    nonGifText: {},
  });

  return (
    <div className='game-container'>
      <Timer
        countingDown={countingDown}
        setCountingDown={setCountingDown}
        gifSources={gifSources}
        setGifSources={setGifSources}
        guess={guess}
        setGuess={setGuess}
        isNewGame={isNewGame}
        setIsNewGame={setIsNewGame}
        playerFeedback={playerFeedback}
        setPlayerFeedback={setPlayerFeedback}
        secondsLeft={secondsLeft}
        setSecondsLeft={setSecondsLeft}
        title={title}
      />
      <CluesContainer
        gifCounter={gifCounter}
        setGifCounter={setGifCounter}
        gifSources={gifSources}
        setGifSources={setGifSources}
        setPlayerFeedback={setPlayerFeedback}
        selectedCategory={selectedCategory}
        title={title}
        setTitle={setTitle}
      />
      <InteractionContainer
        countingDown={countingDown}
        setCountingDown={setCountingDown}
        guess={guess}
        setGuess={setGuess}
        gifSources={gifSources}
        setGifSources={setGifSources}
        gifCounter={gifCounter}
        setGifCounter={setGifCounter}
        isNewGame={isNewGame}
        setIsNewGame={setIsNewGame}
        playerFeedback={playerFeedback}
        setPlayerFeedback={setPlayerFeedback}
        score={score}
        setScore={setScore}
        secondsLeft={secondsLeft}
        setSecondsLeft={setSecondsLeft}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
        title={title}
        setTitle={setTitle}
      />
      <Instructions />
    </div>
  );
};

export default GameContainer;
