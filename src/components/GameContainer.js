import React from 'react';
import GifflesContainer from './GifflesContainer';
import InteractionContainer from './InteractionContainer';
import Instructions from './Instructions';

const GameContainer = () => {
  return (
    <div className="game-container">
      <GifflesContainer />
      <InteractionContainer />       
      <Instructions />
    </div>
  );
};

export default GameContainer;