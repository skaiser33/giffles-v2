import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';

import GifContainer from './GifContainer';
import getTitle from '../api/getTitle';

const GifflesContainer = () => {

  // const [title, setTitle] = useState("");
  const [gifWords, setGifWords] = useState([]);
  const [gifSources, setGifSources] = useState(["about:blank", "about:blank", "about:blank"])

  const gifContainers = gifSources.map((gifSource, idx) => {
    // console.log(gifSource);
    return (
      <>
        <GifContainer key={gifSource} id={(idx + 1).toString()} title={(idx + 1).toString()} gif={gifSource}/>
        <p id={`pre${(idx + 2).toString()}`}></p>
      </>
    )
  })

  const loadGifs = () => {
    setGifWords(getTitle());
    // console.log("i'm alive");
    // const getGifWords = async () => {
    //   try {
    //     const res = await getTitle();
    //     console.log('res --->' + res);
    //   } catch (error) {
    //     console.log(error);
    //   }
    //   getGifWords();
    // }
  }

  useEffect(() => {
    const getGifs = async () => {
      try {
        // CREATE CONTROL IF GIFWORDS IS EMPTY
        const gifUrls = gifWords.map(async(word) => {
          const res = await axios.get(
                  `https://api.giphy.com/v1/gifs/search?api_key=${process.env.REACT_APP_GIPHY_API_KEY}&q=${word}&limit=5&offset=0&lang=en`
                );
                const resGifs = await res.data;
                // console.log(resGifs.data[0]);
                // setGif1(() => resGifs.data[0].embed_url);
                // setGif1(() => res1Gifs.data[0].images.fixed_height.url);
                return resGifs.data[0].images.fixed_height.url;
        })        
        setGifSources(await Promise.all(gifUrls));
        console.log('GIFWORDS ---->' + gifWords );
      } catch (error) {
        console.log(error);
      }
    };
    getGifs();
      //resize iframes if needed
      //***TO BE UNCOMMENTED??*** (gifWords.length === 4) ? shrinkGifs() : enlargeGifs();   
  }, [gifWords]);
  
  return (
    // <h3>sanity check</h3>
    <div className="giffles-container">
      <p id="pre1"></p>
      {gifContainers}
      {/* <GifContainer id="1" title="one" word={gifWords[0] ? gifWords[0] : "Loading"}/> */}
      <button onClick={loadGifs}>TESTER</button>
    </div>  
  );
};

export default GifflesContainer;