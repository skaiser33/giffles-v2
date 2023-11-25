import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';

// import GifContainer from './GifContainer';
import fillGifContainer from '../../api/fillGifContainer';
import EmptyGifContainer from './EmptyGifContainer';

const CluesContainer = ({
  gifCounter,
  setGifCounter,
  gifSources,
  setGifSources,
  selectedCategory,
  title,
  setTitle,
}) => {
  // console.log('gifCounter in CluesContainer', gifCounter);
  // const [title, setTitle] = useState({
  //   titleString: [],
  //   gifWords: [],
  //   nonGifText: {},
  // });

  const [gifData, setGifData] = useState([]);
  // const [gifSources, setGifSources] = useState([]);

  // useEffect(() => {
  //   // *** MUST AVOID CALLING USEEFFECT ON INITIAL RENDER -- RIGHT?
  //   // https://stackoverflow.com/questions/53179075/with-useeffect-how-can-i-skip-applying-an-effect-upon-the-initial-render
  //   // https://typeofnan.dev/how-to-prevent-useeffect-from-running-on-mount-in-react/
  //   console.log('useEffect Called, gifCounter is', gifCounter);
  // }, [gifCounter]);

  // const startNewRound = () => {
  //   if (gifSources.length) {
  //     clearAll(gifSources.length);
  //   }
  //   setGifCounter(0);
  //   setTitle(getTitle(selectedCategory));
  // };

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
      } catch (error) {
        console.log(error);
        // SHOULD I JUST USE respondToError function here?
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
        {/* <p id="pre1"></p>*/}
        {title.nonGifText && title.nonGifText[1] ? (
          <p id='pre1'>{title.nonGifText[1]}</p>
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
