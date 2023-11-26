import clearAll from './clearAll';

const respondToError = (err, setPlayerFeedback, setPlayerFeedbackHidden) => {
  clearAll();
  setPlayerFeedback(
    "Sorry, they seem to be runnin' low on them particular gifs. Try spinning the wheel again."
  );
  setPlayerFeedbackHidden('');
  console.error(`GAME ERROR: ${err}`);
};

export default respondToError;
