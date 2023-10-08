// import React from 'react';
import clearAll from './clearAll';
import hideAfterAnswer from './hideAfterAnswer';

const respondToError = (err) => {
  clearAll();
  hideAfterAnswer();
  // *** REFACTOR AS ERROR IN ANSWER VALIDATION CONTAINER ***
  // *** ADD SPECIFIC ERRORS IF err HAS CERTAIN VALUES ***
  // isPlayerCorrect.innerHTML =
  //   "Sorry, they seem to be runnin' low on them particular gifs.<br>Try spinning the wheel again.";
  console.log(
    "Sorry, they seem to be runnin' low on them particular gifs. Try spinning the wheel again."
  );
};

export default respondToError;
