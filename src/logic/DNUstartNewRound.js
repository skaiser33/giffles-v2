import React from 'react';

const startNewRound = () => {
  if (gifSources.length) {
    clearAll(gifSources.length);
  }
  setGifCounter(0);
  setTitle(getTitle(selectedCategory));
};
//
export default clearAll;
