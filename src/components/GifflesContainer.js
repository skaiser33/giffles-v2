import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';

import GifContainer from './GifContainer';
import getTitle from '../api/getTitle';


const GifflesContainer = () => {

  const [title, setTitle] = useState("");
  const [gifWords, setGifWords] = useState([]);
  const [gif1, setGif1] = useState("about:blank")
  const [gif2, setGif2] = useState("about:blank")
  const [gif3, setGif3] = useState("about:blank")
  const [gif4, setGif4] = useState("about:blank")

  // let gifWords = [];


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
    console.log('GIFWORDS where i need it ---->' + gifWords );
  }

  useEffect(() => {
    const getGifs = async () => {
      try {
        // CREATE CONTROL IF GIFWORDS IS EMPTY
        const res1 = await axios.get(
          `https://api.giphy.com/v1/gifs/search?api_key=${process.env.REACT_APP_GIPHY_API_KEY}&q=${gifWords[0]}&limit=5&offset=0&lang=en`
        );
        const res1Gifs = await res1.data;
        // console.log(resGifs.data[0]);
        // setGif1(() => resGifs.data[0].embed_url);
        setGif1(() => res1Gifs.data[0].images.fixed_height.url);
        // console.log(resGifs.data[0].images.fixed_height.url);
        const res2 = await axios.get(
          `https://api.giphy.com/v1/gifs/search?api_key=${process.env.REACT_APP_GIPHY_API_KEY}&q=${gifWords[1]}&limit=5&offset=0&lang=en`
        );
        const res2Gifs = await res2.data;
        // console.log(resGifs.data[0]);
        // setGif1(() => resGifs.data[0].embed_url);
        setGif2(() => res2Gifs.data[0].images.fixed_height.url);
        // console.log(resGifs.data[0].images.fixed_height.url);
        const res3 = await axios.get(
          `https://api.giphy.com/v1/gifs/search?api_key=${process.env.REACT_APP_GIPHY_API_KEY}&q=${gifWords[2]}&limit=5&offset=0&lang=en`
        );
        const res3Gifs = await res3.data;
        // console.log(resGifs.data[0]);
        // setGif1(() => resGifs.data[0].embed_url);
        setGif3(() => res3Gifs.data[0].images.fixed_height.url);
        // console.log(resGifs.data[0].images.fixed_height.url);

      } catch (error) {
        console.log(error);
      }
    };
    getGifs();
    // const loadGifs()
    // gifWords = getTitle();
    // console.log('GIFWORDS where i need it ---->' + gifWords);
    
      //If title length is too short / too long, pick another title
    // while (gifWords.length < 2 || gifWords.length > 4) {
    //   gifWords = getTitle();
    // }   
      //resize iframes if needed
      //***TO BE UNCOMMENTED??*** (gifWords.length === 4) ? shrinkGifs() : enlargeGifs();   
  }, [gifWords]);
  
  return (
    // <h3>sanity check</h3>
    <div className="giffles-container">
      <p id="pre1"></p>
      {/* <GifContainer id="1" title="one" word={gifWords[0] ? gifWords[0] : "Loading"}/> */}
      <GifContainer id="1" title="one" gif={gif1}/>
      <p id="pre2"></p>
      <GifContainer id="2" title="two" gif={gif2}/>
      <p id="pre3"></p>
      <GifContainer id="3" title="three" gif={gif3}/>
      <p id="pre4"></p>
      {/* <GifContainer id="4" title="four" word={gifWords[0]}/> */}
      <p id="pre5"></p>
      <button onClick={loadGifs}>TESTER</button>
    </div>  
  );
};

export default GifflesContainer;