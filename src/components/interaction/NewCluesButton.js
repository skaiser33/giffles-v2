import React from 'react';
import Button from '@mui/material/Button';
// import { ThemeProvider } from '@mui/material/styles';

const NewCluesButton = ({ gifCounter, setGifCounter }) => {
  const incrementGifCount = () => {
    // INCREMENTS ABOVE 4 and PERFORM gifCounter % 5 IN CLUESCONTAINER useEffect
    setGifCounter(gifCounter + 1);
    // gifCounter >= 4 ? setGifCounter(0) : setGifCounter(gifCounter + 1); OLD WAY
    // console.log('gifCounter in button', gifCounter);
  };

  const handleClick = (e) => {
    // gifCounter >= 4 ? (gifCounter = 0) : gifCounter++;
    incrementGifCount();
    console.log('new clues clicked, g=', gifCounter);
  };

  return (
    <Button
      variant='contained'
      id='newClue'
      className='hide'
      onClick={handleClick}
      // onClick={incrementGifCount}
    >
      New Clues Please!
    </Button>
  );
};

export default NewCluesButton;
