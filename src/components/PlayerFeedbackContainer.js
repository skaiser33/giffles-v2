import React from 'react';

const PlayerFeedbackContainer = ({ playerFeedback }) => {
  return (
    <div className={playerFeedback ? '' : 'hide'} id='is-player-correct'>
      {playerFeedback}
      {/* <p
        className={playerFeedback ? 'line-break' : 'hide'}
        id='is-player-correct'
      >
        {playerFeedback}
      </p> */}
      {/* <pre className={playerFeedback ? '' : 'hide'} id='is-player-correct'>
      {playerFeedback}
    </pre> */}
    </div>
  );
};

export default PlayerFeedbackContainer;
