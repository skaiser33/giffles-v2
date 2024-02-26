import React from 'react';

//Clears gif frames, text between gif frames, and arrays
const clearAll = (gifSourcesLength) => {
  //Clear gif frames
  const clearGifFrames = () => {
    document.querySelectorAll('.giphy-embed').src = '#';
    // TO DELETE -- loop by id rather than class selector
    // for (let x = 1; x <= gifSourcesLength; x++) {
    //   document.getElementById(`gif${x}`).src = '#';
    // }
  };

  //Clears the text between gif frames
  const clearBetweenGifs = () => {
    // document.querySelectorAll('.non-gif-text').textContent = '';

    // TO DELETE -- loop by id rather than class selector
    for (let x = 1; x <= gifSourcesLength; x++) {
      if (document.getElementById(`pre${x}`))
        document.getElementById(`pre${x}`).textContent = '';
    }
  };

  clearGifFrames();
  clearBetweenGifs();
  // console.log("clearAll called")
  // gifWords = [];
  // titleArray = [];
};
//
export default clearAll;
