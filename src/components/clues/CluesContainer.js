import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';

import fillGifContainer from '../../logic/fillGifContainer';
import EmptyGifContainer from './EmptyGifContainer';
import respondToError from '../../logic/respondToError';

const CluesContainer = ({
  gifCounter,
  setGifCounter,
  gifSources,
  setPlayerFeedback,
  setGifSources,
  title,
}) => {
  // gifData holds fetched data before mapping to gifSources
  const [gifData, setGifData] = useState([]);

  // WHEN TITLE CHANGES, FETCH NEW GIFS AND POPULATE GIFCONTAINERS WITH THE FIRST SET OF GIFS
  useEffect(() => {
    const getGifs = async () => {
      try {
        // CREATE CONTROL IF title IS EMPTY

        // RESET GIF COUNTER
        setGifCounter(0);

        // FETCH DATA FROM GIPHY WITH TITLE WORDS and POPULATE AN ARRAY
        const gifDataArr = title.gifWords.map(async (word) => {
          const res = await axios.get(
            `https://api.giphy.com/v1/gifs/search?api_key=${process.env.REACT_APP_GIPHY_API_KEY}&q=${word}&limit=5&offset=0&lang=en`
          );
          const gifDataHelper = await res.data.data;
          return gifDataHelper;
        });

        const gifDataArrHelper = await Promise.all(gifDataArr);
        setGifData(gifDataArrHelper);
        const gifSourcesHelper = await Promise.all(
          gifDataArrHelper.map((gifWord) => {
            // // *** TRYING TO FIGURE OUT HOW TO GET RID OF KEY ERROR
            // const tempObj = data[0].images.fixed_height;
            // tempObj['key'] = tempObj.url;
            // return tempObj;
            return gifWord[gifCounter].images.fixed_height;
          })
        );
        setGifSources(gifSourcesHelper);
        console.log('gifSourcesHelper -->', gifSourcesHelper);
      } catch (error) {
        respondToError(
          `getGifs Error ${error}`,
          gifSources,
          setGifSources,
          setPlayerFeedback
        );
      }
    };
    getGifs();
    //***resize gifContainer if needed ***
    //***TO BE UNCOMMENTED??*** (title.gifWords.length === 4) ? shrinkGifs() : enlargeGifs();
  }, [title]);

  // WHEN GIFCOUNTER CHANGES AND IS >0, POPULATE GIFCONTAINERS WITH THE NEXT SET OF GIFS
  useEffect(() => {
    // does not change gifs until gifCounter is > 0 and determines set of gifs using gifCounter %5
    if (gifCounter > 0) {
      const gifSourcesHelper = gifData.map((gifWord) => {
        return gifWord[gifCounter % 5].images.fixed_height;
      });
      setGifSources(gifSourcesHelper);
    }
  }, [gifCounter]);

  return (
    <>
      <div className='clues-container'>
        {title.nonGifText && title.nonGifText[1] ? (
          <p id='pre1' className='non-gif-text'>
            {title.nonGifText[1]}{' '}
          </p>
        ) : (
          <></>
        )}
        {gifSources.length ? (
          fillGifContainer(title, gifSources)
        ) : (
          <EmptyGifContainer />
        )}
      </div>
    </>
  );
};

export default CluesContainer;
