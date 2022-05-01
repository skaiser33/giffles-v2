import React from 'react';
import GifContainer from './GifContainer';


const GifflesContainer = () => {

  return (
    // <h3>sanity check</h3>
    <div className="giffles-container">
      <p id="pre1"></p>
      <GifContainer id="1" title="one"/>
      <p id="pre2"></p>
      <GifContainer id="2" title="two"/>
      <p id="pre3"></p>
      <GifContainer id="3" title="three"/>
      <p id="pre4"></p>
      <GifContainer id="4" title="four"/>
      <p id="pre5"></p>
    </div>
  );
};

export default GifflesContainer;