// import React from 'react';
import Button from '@mui/material/Button';
// import { ThemeProvider } from '@mui/material/styles';

const NewCluesButton = () => {
  const handleClick = (e) => {
    console.log('new clues clicked');
    // g >= 4 ? g = 0 : g++;
    // gifFrame1.src = gif1Array[g].embed_url;
    // gifFrame2.src = gif2Array[g].embed_url;
    // if (gifWords.length >= 3) gifFrame3.src = gif3Array[g].embed_url;
    // if (gifWords.length === 4) gifFrame4.src = gif4Array[g].embed_url;
  };

  return (
    <Button
      variant='contained'
      id='newClue'
      className='hide'
      onClick={handleClick}
    >
      New Clues Please!
    </Button>
  );
};

export default NewCluesButton;
