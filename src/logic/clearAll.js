//Clears gif frames, text between gif frames, and arrays
const clearAll = () => {
  //Clear gif frames
  const clearGifFrames = () => {
    document
      .querySelectorAll('.giphy-embed')
      .forEach((gifFrame) => (gifFrame.src = '#'));
  };

  //Clears the text between gif frames
  const clearBetweenGifs = () => {
    document
      .querySelectorAll('.non-gif-text')
      .forEach((text) => (text.textContent = ''));
  };
  clearGifFrames();
  clearBetweenGifs();
};

export default clearAll;
