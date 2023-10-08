import React from 'react';
import CluesContainer from './clues/CluesContainer';
import InteractionContainer from './interaction/InteractionContainer';
import Instructions from './Instructions';

const GameContainer = () => {
  return (
    <div className='game-container'>
      <CluesContainer />
      <InteractionContainer />
      <Instructions />
    </div>
  );
};

export default GameContainer;
