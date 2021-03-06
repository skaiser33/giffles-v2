import React from 'react';
import Button from '@mui/material/Button';
import { ThemeProvider } from '@mui/material/styles';
import buttonTheme from '../themes/buttonTheme';

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