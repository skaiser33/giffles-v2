import React, { useEffect } from 'react';
import stockGifs from '../models/stockGifs';
import clearAll from '../logic/clearAll';

const Timer = ({
  countingDown,
  setCountingDown,
  gifSources,
  setGifSources,
  guess,
  setGuess,
  isNewGame,
  setIsNewGame,
  setPlayerFeedback,
  secondsLeft,
  setSecondsLeft,
  title,
}) => {
  const decreaseSeconds = () => {
    setSecondsLeft((prev) => {
      if (prev > 1) {
        return --prev;
      } else {
        setCountingDown(false);
        if (isNewGame) {
          setIsNewGame(false);
        }
        if (title.titleString.length) {
          clearAll();
          setGifSources(stockGifs.loserGifs);
          setPlayerFeedback(
            `You're a little slow on the draw.\nThe correct answer was ${title.titleString.toUpperCase()}.`
          );
          // setPlayerFeedbackHidden('');
        }
        setGuess('');
        return 15;
      }
    });
  };

  useEffect(() => {
    let timer;
    if (countingDown) {
      timer = setInterval(decreaseSeconds, 1000);
      // timer.classList.remove('hide');
    } else {
      clearInterval(timer);

      // isPlayerCorrect.innerHTML = `You're a little slow on the draw.<br>The correct answer was <em>${masterArray[randomIndex]}.</em>`;
      // showLoserGifs();
      // clearBetweenGifs();
    }
    return () => clearInterval(timer);
  }, [countingDown]);

  // const startTimer = () => setCountingDown((prev) => !prev);

  let timerHidden = countingDown ? 'show' : 'hide';
  // let timerHidden = 'hide';

  return (
    <div>
      <p id='timer' className={timerHidden}>
        0:
        {secondsLeft.toLocaleString('en-US', {
          minimumIntegerDigits: 2,
          useGrouping: false,
        })}
      </p>
      {/* <button onClick={startTimer}>{countingDown ? 'Cancel' : 'Start'}</button> */}
    </div>
  );
};

export default Timer;
