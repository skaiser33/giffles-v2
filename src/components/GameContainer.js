import React, { useState } from 'react';
import CluesContainer from './clues/CluesContainer';
import InteractionContainer from './interaction/InteractionContainer';
import Instructions from './Instructions';

const GameContainer = () => {
  const [selectedCategory, setSelectedCategory] = useState('movies');
  const [gifCounter, setGifCounter] = useState(0);
  return (
    <div className='game-container'>
      <CluesContainer
        selectedCategory={selectedCategory}
        gifCounter={gifCounter}
      />
      <InteractionContainer
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
        gifCounter={gifCounter}
        setGifCounter={setGifCounter}
      />
      <Instructions />
    </div>
  );
};

export default GameContainer;
