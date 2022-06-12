import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';

import GifContainer from './GifContainer';
import EmptyContainer from './EmptyContainer';
import getTitle from '../api/getTitle';
import clearAll from '../api/clearAll';

const GifflesContainer = () => {

  // const [title, setTitle] = useState("");
  const [title, setTitle] = useState([]);
  // const [gifSources, setGifSources] = useState(["#", "#", "#", "#"])
  const [gifSources, setGifSources] = useState([])

  const gifContainers = gifSources.map((gifSource, idx) => {
    // console.log(gifSource);
    return (
      <>
        <GifContainer key={gifSource} id={(idx + 1).toString()} title={(idx + 1).toString()} gif={gifSource}/>
        <p id={`pre${(idx + 2).toString()}`}></p>
        { (title[2][idx + 2]) ?
          <p id={`pre${(idx + 2).toString()}`}>{title[2][idx + 2]}</p>
          :
          <></>
        } 
      </>
    )
  })

  const loadGifs = () => {
    if (gifSources.length) {
      clearAll(gifSources.length);
    }  
    ;
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
  }

  useEffect(() => {
    const getGifs = async () => {
      try {
        // CREATE CONTROL IF title IS EMPTY
        const gifUrls = title[1].map(async(word) => {
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
        console.log('TITLE ---->' + title[0]);
        console.log('GIFWORDS ---->' + title[1]);
        console.log(title[2]);
      } catch (error) {
        console.log(error);
      }
    };
    getGifs();
      //resize iframes if needed
      //***TO BE UNCOMMENTED??*** (title.length === 4) ? shrinkGifs() : enlargeGifs();   
  }, [title]);
  
  return (
    // <h3>sanity check</h3>
    <>
      <div className="giffles-container">
        {/* <p id="pre1"></p>*/}
        { (title[2] && title[2][1]) ?
          <p id="pre1">{title[2][1]}</p>
          :
          <></>
        } 
        {gifSources.length 
          ? gifContainers 
          : <EmptyContainer/>}
        {/* <GifContainer id="1" title="one" word={title[0] ? title[0] : "Loading"}/> */}
      </div>
      <button onClick={loadGifs}>TESTER</button>
    </>  
  );
};

export default GifflesContainer;