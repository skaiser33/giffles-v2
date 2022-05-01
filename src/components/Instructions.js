import React from 'react';


const Instructions = () => {

  return (
    <div className="instructions">
    <p><em>How To Play</em><br />
    <small>Choose a category and guess the title of a movie, song, or book based on the gifs.<br/>
        You have 30 seconds for each title. Quicker answers get additional points.<br/>
        Each gif corresponds to one word of the title, excluding common articles, prepositions, etc which will be provided free of charge.We'll also help out with punctuation where we can.<br/>
        Each word will perform a real time search of the top gifs under that search term on Giphy, so each game of Giffle is a totally unique experience.<br/>
        If you don't like your gifs, just hit the "New Clues Please!" button and receive another set of gifs for the same title. You can ask for new clues up to four times per round.</small></p>
  </div>
  );
};

export default Instructions;