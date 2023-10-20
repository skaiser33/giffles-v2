import React from 'react';
import Button from '@mui/material/Button';
// import { ThemeProvider } from '@mui/material/styles';

const NewCluesButton = ({ gifCounter, setGifCounter }) => {
  const incrementGifCount = () => {
    gifCounter >= 4 ? setGifCounter(0) : setGifCounter(gifCounter + 1);
    // setGifCounter(gifCounter + 1);
    console.log('gifCounter in button', gifCounter);
  };

  const handleClick = (e) => {
    console.log('new clues clicked, g=', gifCounter);
    // gifCounter >= 4 ? (gifCounter = 0) : gifCounter++;
    incrementGifCount();
    // gifCounter >= 4
    //   ? {() => setGifCounter(0)}
    //   : {incrementGifCount};
    // () => setGifCounter(gifCounter + 1);
    // gifFrame1.src = gif1Array[gifCounter].embed_url;
    // gifFrame2.src = gif2Array[gifCounter].embed_url;
    // if (gifWords.length >= 3) gifFrame3.src = gif3Array[gifCounter].embed_url;
    // if (gifWords.length === 4) gifFrame4.src = gif4Array[gifCounter].embed_url;
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
