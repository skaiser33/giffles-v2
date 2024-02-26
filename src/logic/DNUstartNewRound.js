import React from 'react';

const startNewRound = () => {
  clearAll();
  setGifCounter(0);
  setTitle(getTitle(selectedCategory));
};
//
export default clearAll;
