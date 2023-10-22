import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';

import GifContainer from './GifContainer';
import fillGifContainer from '../../api/fillGifContainer';
import EmptyGifContainer from './EmptyGifContainer';
import getTitle from '../../api/getTitle';
import clearAll from '../../api/clearAll';

const CluesContainer = ({ selectedCategory, gifCounter }) => {
  // console.log('gifCounter in CluesContainer', gifCounter);
  const [title, setTitle] = useState({
    titleString: [],
    gifWords: [],
    nonGifText: {},
  });
  // const [gifSources, setGifSources] = useState(["#", "#", "#", "#"])
  // const [gifData, setGifData] = useState([]);
  const [gifSources, setGifSources] = useState([]);

  // useEffect(() => {
  //   // *** MUST AVOID CALLING USEEFFECT ON INITIAL RENDER -- RIGHT?
  //   // https://stackoverflow.com/questions/53179075/with-useeffect-how-can-i-skip-applying-an-effect-upon-the-initial-render
  //   // https://typeofnan.dev/how-to-prevent-useeffect-from-running-on-mount-in-react/
  //   console.log('useEffect Called, gifCounter is', gifCounter);
  // }, [gifCounter]);

  const loadGifs = () => {
    if (gifSources.length) {
      clearAll(gifSources.length);
    }
    setTitle(getTitle(selectedCategory));
  };

  useEffect(() => {
    const getGifs = async () => {
      try {
        // CREATE CONTROL IF title IS EMPTY
        // const gifDataArray = title.gifWords.map(async (word) => {
        //   const res = await axios.get(
        //     `https://api.giphy.com/v1/gifs/search?api_key=${process.env.REACT_APP_GIPHY_API_KEY}&q=${word}&limit=5&offset=0&lang=en`
        //   );
        //   const resGifs = await res.data;
        //   // console.log(resGifs.data[0]);
        //   // fixed height of 200px; width is variable
        //   return resGifs.data;
        // });
        // console.log('gifDataArray', await Promise.all(gifDataArray));
        // setGifData(await Promise.all(gifDataArray));
        // console.log('gifData1', gifData);
        // // if (gifData[0] && gifData[0].images) {
        // //   setGifSources(gifData[0].images.fixed_height);
        // // }
        // ***HOW IT USED TO WORK***
        const gifUrls = title.gifWords.map(async (word) => {
          const res = await axios.get(
            `https://api.giphy.com/v1/gifs/search?api_key=${process.env.REACT_APP_GIPHY_API_KEY}&q=${word}&limit=5&offset=0&lang=en`
          );
          const resGifs = await res.data;
          console.log(resGifs.data);
          // fixed height of 200px; width is variable
          return resGifs.data[0].images.fixed_height;
        });
        console.log('gifUrls', gifUrls);
        setGifSources(await Promise.all(gifUrls));
        console.log('NONGIFTEXT OBJ --->' + title.nonGifText);
        // ***END OF HOW IT USED TO WORK***
      } catch (error) {
        console.log(error);
      }
    };
    getGifs();
    //***resize gifContainer if needed ***
    //***TO BE UNCOMMENTED??*** (title.gifWords.length === 4) ? shrinkGifs() : enlargeGifs();
  }, [title]);
  // console.log('gifData2', gifData);
  // console.log('gifSources', gifSources);
  return (
    <>
      <div className='clues-container'>
        {/* <p id="pre1"></p>*/}
        {title.nonGifText && title.nonGifText[1] ? (
          <p id='pre1'>{title.nonGifText[1]}</p>
        ) : (
          <></>
        )}
        {/* {gifSources.length ? fillGifContainers : <EmptyGifContainer />} */}
        {gifSources.length ? (
          fillGifContainer(title, gifSources)
        ) : (
          <EmptyGifContainer />
        )}
        {/* <GifContainer id="1" title="one" word={title.titleString ? title.titleString : "Loading"}/> */}
      </div>
      <button onClick={loadGifs}>TESTER</button>
    </>
  );
};

export default CluesContainer;
