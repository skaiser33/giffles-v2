import React from 'react';

//Clears gif frames, text between gif frames, and arrays
const clearAll = (items) => {
  //Clear gif frames
  const clearGifFrames = () => {
    for (let x = 1; x <= items; x++) {        
        document.getElementById(`gif${ x }`).src = "#"
    }
  };

  //Clears the text between gif frames
  const clearBetweenGifs = () => {
    for (let x = 1; x <= items; x++) {
        document.getElementById(`pre${ x }`).textContent = ""
    }
  };

  clearGifFrames();
  clearBetweenGifs();
  console.log("clearAll called")
  // gifWords = [];
  // titleArray = [];

}
//
export default clearAll;