import React, { useState } from 'react';
import Timer from './Timer';
import CluesContainer from './clues/CluesContainer';
import InteractionContainer from './interaction/InteractionContainer';
import Instructions from './Instructions';

const GameContainer = () => {
  const [countingDown, setCountingDown] = useState(false);
  const [gifCounter, setGifCounter] = useState(0);
  const [gifSources, setGifSources] = useState([]);
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
        gifCounter={gifCounter}
        setGifCounter={setGifCounter}
        gifSources={gifSources}
        setGifSources={setGifSources}
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
