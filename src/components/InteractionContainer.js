import React from 'react';


const InteractionContainer = () => {

  return (
    <div className="interaction-container">
      <button id="newClue" className="hide">New Clues Please!</button>
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
        <input id="next" type="submit" value="Let's Play Giffles!"/>
      </form> 

      <div id="score-and-reset">
        <p className="playerScore">Your Score: 0</p>
        <button id="newPlayer" className="hide">New Player / Reset Game</button>
      </div>
    </div> 
  );
};

export default InteractionContainer;