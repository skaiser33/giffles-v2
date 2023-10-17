import React, { useState } from 'react';
import CluesContainer from './clues/CluesContainer';
import InteractionContainer from './interaction/InteractionContainer';
import Instructions from './Instructions';

const GameContainer = () => {
  const [selectedCategory, setSelectedCategory] = useState('movies');
  return (
    <div className='game-container'>
      <CluesContainer selectedCategory={selectedCategory} />
      <InteractionContainer
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
      />
      <Instructions />
    </div>
  );
};

export default GameContainer;
