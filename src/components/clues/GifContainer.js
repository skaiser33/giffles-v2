import React from 'react';

const GifContainer = ({ id, title, gif }) => {
  // adjusts height proportionally if images that are too wide
  const imgDisplayHeight =
    gif.width > 250 ? `${(gif.height / gif.width) * 250}px` : `${gif.height}px`;

  return (
    <>
      <div
        className='gif-container'
        // style={{ width: 'min(35%, 300px)' }}
        style={{ minWidth: '265px', minHeight: '200px' }}

        // DELETE PLACEHOLDER COMMENT - to keep prettier happy
      >
        <img
          id={`gif${id}`}
          title={title}
          src={gif.url}
          className='giphy-embed'
          style={{ maxWidth: '250px', maxHeight: imgDisplayHeight }}
          alt={title}
        ></img>
      </div>
    </>
  );
};

export default GifContainer;
