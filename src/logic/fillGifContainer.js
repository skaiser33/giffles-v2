import React from 'react';
import GifContainer from '../components/clues/GifContainer';

const fillGifContainer = (title, gifSources) => {
  return gifSources.map((gifSource, idx) => {
    return (
      <>
        <GifContainer
          key={gifSource.url}
          id={(idx + 1).toString()}
          title={(idx + 1).toString()}
          gif={gifSource}
        />
        {title.nonGifText[idx + 2] ? (
          <p
            key={`pre${(idx + 2).toString()}`}
            id={`pre${(idx + 2).toString()}`}
            className='non-gif-text'
          >
            {title.nonGifText[idx + 2]}
          </p>
        ) : (
          <></>
        )}
      </>
    );
  });
};
//
export default fillGifContainer;
