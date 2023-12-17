import React from 'react';

const PlayerFeedbackContainer = ({ playerFeedback }) => {
  return (
    <p className={playerFeedback ? '' : 'hide'} id='is-player-correct'>
      {playerFeedback}
    </p>
  );
};

export default PlayerFeedbackContainer;
