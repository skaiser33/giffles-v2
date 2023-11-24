import React, { useState } from 'react';
import Timer from './Timer';
import CluesContainer from './clues/CluesContainer';
import InteractionContainer from './interaction/InteractionContainer';
import Instructions from './Instructions';

const GameContainer = () => {
  const [secondsLeft, setSecondsLeft] = useState(30);
  const [countingDown, setCountingDown] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('movies');
  const [gifCounter, setGifCounter] = useState(0);
  const [title, setTitle] = useState({
    titleString: [],
    gifWords: [],
    nonGifText: {},
  });
  const [gifSources, setGifSources] = useState([]);
  const [score, setScore] = useState(0);

  return (
    <div className='game-container'>
      <Timer
        secondsLeft={secondsLeft}
        setSecondsLeft={setSecondsLeft}
        countingDown={countingDown}
        setCountingDown={setCountingDown}
      />
      <CluesContainer
        selectedCategory={selectedCategory}
        gifCounter={gifCounter}
        setGifCounter={setGifCounter}
        gifSources={gifSources}
        setGifSources={setGifSources}
        title={title}
        setTitle={setTitle}
      />
      <InteractionContainer
        secondsLeft={secondsLeft}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
        gifCounter={gifCounter}
        setGifCounter={setGifCounter}
        gifSources={gifSources}
        setGifSources={setGifSources}
        title={title}
        setTitle={setTitle}
        countingDown={countingDown}
        setCountingDown={setCountingDown}
        score={score}
        setScore={setScore}
      />
      <Instructions />
    </div>
  );
};

export default GameContainer;
