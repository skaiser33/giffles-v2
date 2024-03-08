//Clears gif frames, text between gif frames, and arrays
const clearAll = () => {
  // const clearAll = (gifSourcesLength) => {

  //Clear gif frames
  const clearGifFrames = () => {
    document
      .querySelectorAll('.giphy-embed')
      .forEach((gifFrame) => (gifFrame.src = '#'));

    // TO DELETE -- loop by id rather than class selector
    // for (let x = 1; x <= gifSourcesLength; x++) {
    //   document.getElementById(`gif${x}`).src = '#';
    // }
  };

  //Clears the text between gif frames
  const clearBetweenGifs = () => {
    document
      .querySelectorAll('.non-gif-text')
      .forEach((text) => (text.textContent = ''));

    // TO DELETE -- loop by id rather than class selector
    // for (let x = 1; x <= gifSourcesLength; x++) {
    //   if (document.getElementById(`pre${x}`))
    //     document.getElementById(`pre${x}`).textContent = '';
    // }
  };

  clearGifFrames();
  clearBetweenGifs();
  // gifWords = [];
  // titleArray = [];
};
//
export default clearAll;
