import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';

import getTitle from '../api/getTitle';


const GifContainer = (props) => {

  const [gif1, setGif1] = useState("about:blank")

  useEffect(() => {
    const getGifs = async () => {
      try {
        const res = await axios.get(
          `https://api.giphy.com/v1/gifs/search?api_key=${process.env.REACT_APP_GIPHY_API_KEY}&q=${"dog"}&limit=5&offset=0&lang=en`
        );
        const resGifs = await res.data;
        // console.log(resGifs.data[0]);
        // setGif1(() => resGifs.data[0].embed_url);
        setGif1(() => resGifs.data[0].images.fixed_height.url);
        // console.log(resGifs.data[0].images.fixed_height.url);

      } catch (error) {
        console.log(error);
      }
    };
    getGifs();
  }, []);

  return (
    <>
      {/* <p id={`pre${props.id}`}></p> */}
      <div className="gif-container">
        <img id={`gif${props.id}`} title={props.title} src={gif1} className="giphy-embed"></img>
      </div>  
      {/* <p id="spacer"></p> */}
    </>
  );
};

export default GifContainer;