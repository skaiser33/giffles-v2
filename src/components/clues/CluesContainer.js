import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';

// import GifContainer from './GifContainer';
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
  const [gifData, setGifData] = useState([]);
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

        // ** OCT 28 ATTEMPT
        const gifDataArr = title.gifWords.map(async (word) => {
          const res = await axios.get(
            `https://api.giphy.com/v1/gifs/search?api_key=${process.env.REACT_APP_GIPHY_API_KEY}&q=${word}&limit=5&offset=0&lang=en`
          );
          const gifDataTest = await res.data.data;
          // console.log('res-->', res);
          console.log('gifDataTest-->', gifDataTest);
          // const gifDataTest = await resGifs. data;
          // console.log('gifDataTest-->', gifDataTest);
          // fixed height of 200px; width is variable
          // console.log(
          //   'gifDataArr[0].images.fixed_height',
          //   gifDataArr[0].images.fixed_height
          // );
          return gifDataTest;
        });

        // console.log('gifDataArr', gifDataArr);
        const gifDataArrHelper = await Promise.all(gifDataArr);

        // setGifData(await Promise.all(gifDataArr));
        setGifData(gifDataArrHelper);
        // console.log('gifData', gifData);
        // const gifSourcesHelper = await Promise.all(gifDataArrHelper)
        // setG
        if (gifData[0] && gifData[0][0]) {
          setGifSources(gifData[0][0].images.fixed_height);
          console.log('gifSources after update is', gifSources);
        }
        // console.log('NONGIFTEXT OBJ --->' + title.nonGifText);
        // ** END OCT 28 ATTEMPT
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
  // useEffect(() => {console.log('gifDataChanged'),[gifData]}
  // useEffect(() => {
  //   console.log('gifData changed! Called, gifData is', gifData);
  //   if (gifData[0] && gifData[0][0]) {
  //     console.log(
  //       'gifData[0][0].images.fixed_height',
  //       gifData[0][0].images.fixed_height
  //     );
  //     setGifSources(gifData[0][0].images.fixed_height);
  //   }
  //   // setGifSources()
  // }, [gifData]);

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
