import React, { useState, useRef, useEffect } from 'react';
import hideAfterAnswer from '../api/hideAfterAnswer';

const Timer = () => {
  //Starts and shows timer; gives protocol for time running out
  const [secondsLeft, setSecondsLeft] = useState(30);
  const [start, setStart] = useState(false);
  const intervalRef = useRef(null);

  const decreaseSeconds = () => {
    setSecondsLeft((prev) => {
      if (prev > 0) {
        return --prev;
      } else {
        setStart(false);
        console.log("time's up");
        // return 30
      }
    });
  };

  useEffect(() => {
    let timer;
    if (start) {
      timer = setInterval(decreaseSeconds, 1000);
    } else {
      clearInterval(timer);
    }
    return () => clearInterval(timer);
  }, [start]);

  const startTimer = () => setStart((prev) => !prev);

  // let timerFunction;
  // const countDown = () => {
  //   // seconds = 30;
  //   timerFunction = setInterval(function () {
  //     //    timer.textContent = `0:${seconds.toLocaleString('en-US', {
  //     //      minimumIntegerDigits: 2,
  //     //      useGrouping: false,
  //     //    })}`;
  //     // timer.classList.remove('hide');
  //     // seconds--;
  //     if (secondsLeft < 0) {
  //       console.log('timer is at 0'); // TO BE DELETED
  //       hideAfterAnswer();
  //       // isPlayerCorrect.innerHTML = `You're a little slow on the draw.<br>The correct answer was <em>${masterArray[randomIndex]}.</em>`;
  //       // showLoserGifs();
  //       // clearBetweenGifs();
  //     }
  //   }, 1000);
  // };

  return (
    <div>
      <p id='timer' className='hide'>
        {secondsLeft} seconds
      </p>
      <button onClick={startTimer}>{start ? 'Cancel' : 'Start'}</button>
    </div>
  );
};

export default Timer;
