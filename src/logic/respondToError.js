import clearAll from './clearAll';
import fillGifContainer from './fillGifContainer';
import stockGifs from '../models/stockGifs';

const respondToError = (
  err,
  gifSources,
  setGifSources,
  setPlayerFeedback
  // setPlayerFeedbackHidden
) => {
  clearAll();
  if (gifSources.length) {
    clearAll(gifSources.length);
  }

  setGifSources(stockGifs.errorGifs);

  setPlayerFeedback(
    "Sorry, they seem to be runnin' low on them particular gifs. Try spinning the wheel again."
  );
  // setPlayerFeedbackHidden('');
  console.error(`GAME ERROR: ${err}`);
};

export default respondToError;
