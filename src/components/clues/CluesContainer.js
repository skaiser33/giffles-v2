import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';

import GifContainer from './GifContainer';
import EmptyContainer from './EmptyContainer';
import getTitle from '../../api/getTitle';
import clearAll from '../../api/clearAll';

const CluesContainer = () => {
  const [title, setTitle] = useState({
    titleString: [],
    gifWords: [],
    nonGifText: {},
  });
  // const [gifSources, setGifSources] = useState(["#", "#", "#", "#"])
  const [gifSources, setGifSources] = useState([]);

  const fillGifContainers = gifSources.map((gifSource, idx) => {
    // console.log(gifSource);
    return (
      <>
        <GifContainer
          key={gifSource}
          id={(idx + 1).toString()}
          title={(idx + 1).toString()}
          gif={gifSource}
        />
        {/* <p id={`pre${(idx + 2).toString()}`}></p> */}
        {title.nonGifText[idx + 2] ? (
          <p
            key={`pre${(idx + 2).toString()}`}
            id={`pre${(idx + 2).toString()}`}
          >
            {title.nonGifText[idx + 2]}
          </p>
        ) : (
          <></>
        )}
      </>
    );
  });

  const loadGifs = () => {
    if (gifSources.length) {
      clearAll(gifSources.length);
    }
    setTitle(getTitle());
    // console.log("i'm alive");
    // const gettitle = async () => {
    //   try {
    //     const res = await getTitle();
    //     console.log('res --->' + res);
    //   } catch (error) {
    //     console.log(error);
    //   }
    //   gettitle();
    // }
  };

  useEffect(() => {
    const getGifs = async () => {
      try {
        // CREATE CONTROL IF title IS EMPTY
        const gifUrls = title.gifWords.map(async (word) => {
          const res = await axios.get(
            `https://api.giphy.com/v1/gifs/search?api_key=${process.env.REACT_APP_GIPHY_API_KEY}&q=${word}&limit=5&offset=0&lang=en`
          );
          const resGifs = await res.data;
          // console.log(resGifs.data[0]);
          // setGif1(() => resGifs.data[0].embed_url);
          // setGif1(() => res1Gifs.data[0].images.fixed_height.url);
          console.log('width-->' + resGifs.data[0].images.fixed_height.width);
          // fixed height of 200px; width is variable
          return resGifs.data[0].images.fixed_height;
        });
        setGifSources(await Promise.all(gifUrls));
        console.log('TITLE ---->' + title.titleString);
        console.log('GIFWORDS ---->' + title.gifWords);
        console.log('NONGIFTEXT OBJ --->' + title.nonGifText);
      } catch (error) {
        console.log(error);
      }
    };
    getGifs();
    //resize iframes if needed
    //***TO BE UNCOMMENTED??*** (title.gifWords.length === 4) ? shrinkGifs() : enlargeGifs();
  }, [title]);
  return (
    // <h3>sanity check</h3>
    <>
      <div className='clues-container'>
        {/* <p id="pre1"></p>*/}
        {title.nonGifText && title.nonGifText[1] ? (
          <p id='pre1'>{title.nonGifText[1]}</p>
        ) : (
          <></>
        )}
        {gifSources.length ? fillGifContainers : <EmptyContainer />}
        {/* <GifContainer id="1" title="one" word={title.titleString ? title.titleString : "Loading"}/> */}
      </div>
      <button onClick={loadGifs}>TESTER</button>
    </>
  );
};

export default CluesContainer;
