import clearAll from './clearAll';
import stockGifs from '../models/stockGifs';

const respondToError = (err, gifSources, setGifSources, setPlayerFeedback) => {
  clearAll();
  // if (gifSources.length) {
  //   clearAll(gifSources.length);
  // }
  clearAll();
  setGifSources(stockGifs.errorGifs);

  setPlayerFeedback(
    "Sorry, they seem to be runnin' low on them particular gifs. Try spinning the wheel again."
  );
  console.error(`GAME ERROR: ${err}`);
};

export default respondToError;
