import React from 'react';
import Button from '@mui/material/Button';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { withTheme } from '@emotion/react';

const buttonTheme = createTheme({
  palette: {
    primary: {
      // light: will be calculated from palette.primary.main,
      main: 'rgb(46, 3, 132)',
      // dark: will be calculated from palette.primary.main,
      // contrastText: will be calculated to contrast with palette.primary.main
    },
    secondary: {
      light: '#0066ff',
      main: 'rgb(115, 171, 120)',
      // dark: will be calculated from palette.secondary.main,
      contrastText: '#FFFFFF',
    },
    // Used by `getContrastText()` to maximize the contrast between
    // the background and the text.
    contrastThreshold: 3,
    // Used by the functions below to shift a color's luminance by approximately
    // two indexes within its tonal palette.
    // E.g., shift from Red 500 to Red 300 or Red 700.
    tonalOffset: 0.2,
  },
  typography: {
    fontSize: 20,
    fontFamily: [
      'Big Shoulders Display',
      'cursive',
    ].join(','),
  },
});

const InteractionContainer = () => {

  return (
    <div className="interaction-container">
      {/* <button id="newClue" className="hide">New Clues Please!</button> */}
      <ThemeProvider theme={buttonTheme}>
        <Button  variant="contained" id="newClue" className="hide">New Clues Please!</Button>
      <p className="hide" id="is-player-correct"></p>
        
      <form id="answ" className="hide">
        <label for="answer">Guess the title:</label>
        <input type="text" id="answer" name="answer"/>
        <input id="answerButton" type="submit" value="Submit Answer"/>
      </form>

      <form id="nextRoundForm">
        <label for="categories">Choose your category:</label>    
        <select name="categories" id="categories">
            <option value="movies">Movies</option>
            <option value="songs">Songs</option>
            <option value="books">Books</option>
        </select>
        {/* <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={age}
          label="Age"
          onChange={handleChange}
        >
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select> */}
        <input id="next" type="submit" value="Let's Play Giffles!"/>
      </form> 

      <div id="score-and-reset">
        <p className="playerScore">Your Score: 0</p>
        {/* <button id="newPlayer" className="hide">New Player / Reset Game</button> */}
        <Button variant="contained" color="secondary" id="newPlayer" className="hide">New Player / Reset Game</Button>
      </div>
      </ThemeProvider>
    </div> 
  );
};

export default InteractionContainer;