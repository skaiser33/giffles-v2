// import React from 'react';
import Button from '@mui/material/Button';
// import { ThemeProvider } from '@mui/material/styles';

const NewCluesButton = () => {
  // const [selectedCategory, setSelectedCategory] = useState('movies');

  return (
    <Button
      variant='contained'
      id='newClue'
      className='hide'
      onClick={(e) => console.log('new clues clicked')}
    >
      New Clues Please!
    </Button>
  );
};

export default NewCluesButton;
