import React, { useState } from 'react';
import CluesContainer from './clues/CluesContainer';
import InteractionContainer from './interaction/InteractionContainer';
import Instructions from './Instructions';

const GameContainer = () => {
  const [selectedCategory, setSelectedCategory] = useState('movies');
  const [gifCounter, setGifCounter] = useState(0);
  const [title, setTitle] = useState({
    titleString: [],
    gifWords: [],
    nonGifText: {},
  });
  const [gifSources, setGifSources] = useState([]);

  return (
    <div className='game-container'>
      <CluesContainer
        selectedCategory={selectedCategory}
        gifCounter={gifCounter}
        setGifCounter={setGifCounter}
        gifSources={gifSources}
        setGifSources={setGifSources}
        title={title}
        setTitle={setTitle}
      />
      <InteractionContainer
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
        gifCounter={gifCounter}
        setGifCounter={setGifCounter}
        gifSources={gifSources}
        setGifSources={setGifSources}
        setTitle={setTitle}
      />
      <Instructions />
    </div>
  );
};

export default GameContainer;
