import React from 'react';
import CluesContainer from './CluesContainer';
import InteractionContainer from './InteractionContainer';
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
