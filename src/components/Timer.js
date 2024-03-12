import React, { useEffect } from 'react';
import stockGifs from '../models/stockGifs';
import clearAll from '../logic/clearAll';
import { timerValue } from '../logic/constants';

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
  // secondsLeftRef,
  title,
}) => {
  const decreaseSeconds = () => {
    // if (secondsLeftRef.current > 1) {
    //   secondsLeftRef.current = --secondsLeftRef.current;
    // } else {
    //   setCountingDown(false);
    //   if (isNewGame) {
    //     setIsNewGame(false);
    //   }
    //   if (title.titleString.length) {
    //     clearAll();
    //     setGifSources(stockGifs.loserGifs);
    //     setPlayerFeedback(
    //       `You're a little slow on the draw.\nThe correct answer was ${title.titleString.toUpperCase()}.`
    //     );
    //     // setPlayerFeedbackHidden('');
    //   }
    //   setGuess('');
    //   secondsLeftRef.current = timerValue;
    // }
    // console.log('secondsLeftRef.current', secondsLeftRef.current);
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
        return timerValue;
      }
    });
  };

  useEffect(() => {
    let timer;
    if (countingDown) {
      timer = setInterval(decreaseSeconds, 1000);
    } else {
      clearInterval(timer);
    }
    return () => clearInterval(timer);
  }, [countingDown]);

  let timerHidden = countingDown ? 'show' : 'hide';

  return (
    <div>
      <p id='timer' className={timerHidden}>
        0:
        {secondsLeft.toLocaleString('en-US', {
          minimumIntegerDigits: 2,
          useGrouping: false,
        })}
      </p>
    </div>
  );
};

export default Timer;
