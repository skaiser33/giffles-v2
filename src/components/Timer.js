import React, { useEffect } from 'react';

const Timer = ({
  secondsLeft,
  setSecondsLeft,
  countingDown,
  setCountingDown,
  setPlayerFeedback,
  // setPlayerFeedbackHidden,
  title,
}) => {
  const decreaseSeconds = () => {
    setSecondsLeft((prev) => {
      if (prev > 1) {
        return --prev;
      } else {
        setCountingDown(false);
        if (title.titleString.length) {
          setPlayerFeedback(
            `You're a little slow on the draw.\nThe correct answer was <em>${title.titleString}.</em>`
          );
          // setPlayerFeedbackHidden('');
        }
        // console.log("time's up");
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
