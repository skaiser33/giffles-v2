import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';

import GifContainer from './GifContainer';
import getTitle from '../api/getTitle';

const GifflesContainer = () => {

  const [title, setTitle] = useState("");
  const [gifWords, setGifWords] = useState([]);
  const [gifSources, setGifSources] = useState(["about:blank", "about:blank", "about:blank"])

  const gifContainers = gifSources.map((gifSource, idx) => {
    console.log(gifSource);
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
    console.log('GIFWORDS ---->' + gifWords );
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
        
        // console.log(await Promise.all(gifUrls));
        setGifSources(await Promise.all(gifUrls));
        // const res1 = await axios.get(
        //   `https://api.giphy.com/v1/gifs/search?api_key=${process.env.REACT_APP_GIPHY_API_KEY}&q=${gifWords[0]}&limit=5&offset=0&lang=en`
        // );
        // const res1Gifs = await res1.data;
        // // console.log(resGifs.data[0]);
        // // setGif1(() => resGifs.data[0].embed_url);
        // setGif1(() => res1Gifs.data[0].images.fixed_height.url);
        // // console.log(resGifs.data[0].images.fixed_height.url);
        // const res2 = await axios.get(
        //   `https://api.giphy.com/v1/gifs/search?api_key=${process.env.REACT_APP_GIPHY_API_KEY}&q=${gifWords[1]}&limit=5&offset=0&lang=en`
        // );
        // const res2Gifs = await res2.data;
        // // console.log(resGifs.data[0]);
        // // setGif1(() => resGifs.data[0].embed_url);
        // setGif2(() => res2Gifs.data[0].images.fixed_height.url);
        // // console.log(resGifs.data[0].images.fixed_height.url);
        // const res3 = await axios.get(
        //   `https://api.giphy.com/v1/gifs/search?api_key=${process.env.REACT_APP_GIPHY_API_KEY}&q=${gifWords[2]}&limit=5&offset=0&lang=en`
        // );
        // const res3Gifs = await res3.data;
        // // console.log(resGifs.data[0]);
        // // setGif1(() => resGifs.data[0].embed_url);
        // setGif3(() => res3Gifs.data[0].images.fixed_height.url);
        // // console.log(resGifs.data[0].images.fixed_height.url);

      } catch (error) {
        console.log(error);
      }
    };
    getGifs();
    // const loadGifs()
    // gifWords = getTitle();
    // console.log('GIFWORDS where i need it ---->' + gifWords);
    

      //resize iframes if needed
      //***TO BE UNCOMMENTED??*** (gifWords.length === 4) ? shrinkGifs() : enlargeGifs();   
  }, [gifWords]);
  
  return (
    // <h3>sanity check</h3>
    <div className="giffles-container">
      <p id="pre1"></p>
      {gifContainers}
      {/* <GifContainer id="1" title="one" word={gifWords[0] ? gifWords[0] : "Loading"}/> */}
      {/* <GifContainer id="1" title="one" gif={gifSources[0]}/>
      <p id="pre2"></p>
      <GifContainer id="2" title="two" gif={gifSources[1]}/>
      <p id="pre3"></p>
      <GifContainer id="3" title="three" gif={gifSources[2]}/>
      <p id="pre4"></p>
      <GifContainer id="4" title="four" word={gifSources[3]}/>
      <p id="pre5"></p> */}
      <button onClick={loadGifs}>TESTER</button>
    </div>  
  );
};

export default GifflesContainer;