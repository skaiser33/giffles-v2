import React, { useState, useRef, useEffect } from 'react';
import hideAfterAnswer from '../api/hideAfterAnswer';

const Timer = ({
  secondsLeft,
  setSecondsLeft,
  countingDown,
  setCountingDown,
}) => {
  // const intervalRef = useRef(null);

  const decreaseSeconds = () => {
    setSecondsLeft((prev) => {
      if (prev > 0) {
        return --prev;
      } else {
        setCountingDown(false);
        console.log("time's up");
        return 30;
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
      hideAfterAnswer();
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
