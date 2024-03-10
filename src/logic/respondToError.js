import clearAll from './clearAll';
import stockGifs from '../models/stockGifs';

const respondToError = (err, gifSources, setGifSources, setPlayerFeedback) => {
  let displayedErrorMessage = '';
  switch (err) {
    case 'No more titles in this category':
      displayedErrorMessage =
        "Looks like we've run out of titles in this category. Let's start over! (or you can choose a new category)";
      break;
    default:
      displayedErrorMessage =
        "Sorry, they seem to be runnin' low on them particular gifs. Try spinning the wheel again.";
  }

  clearAll();
  setGifSources(stockGifs.errorGifs);

  setPlayerFeedback(displayedErrorMessage);
  console.error(`GAME ERROR: ${err}`);
};

export default respondToError;
