// import './App.css';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Header from './components/Header';


function App() {

  const [gif1, setGif1] = useState("about:blank")

  useEffect(() => {
    const getGifs = async () => {
      try {
        const res = await axios.get(
          `https://api.giphy.com/v1/gifs/search?api_key=C45MMlNyrdjBOB9vgOy9BkNBfEhE4UOb&q=${"poo"}&limit=5&offset=0&lang=en`
        );
        const resGifs = await res.data;
        // console.log(resGifs.data[0]);
        setGif1(() => resGifs.data[0].embed_url);
      } catch (error) {
        console.log(error);
      }
    };
    getGifs();
  }, []);

  return (
    <div className="container">
      <Header />
      <div class="gif-container">
            {/* <p id="pre1"></p> */}
            <iframe id="gif1" title="one" src={gif1} width="300" height="200" class="giphy-embed"></iframe>
            {/* <p id="pre1"></p>
            <iframe id="gif1" title="one" src="about:blank" width="300" height="200" class="giphy-embed"></iframe> */}
            {/* <p id="pre2"></p>
            <iframe id="gif2" title="two" src="about:blank" width="300" height="200" class="giphy-embed"></iframe>
            <p id="pre3"></p>
            <iframe id="gif3" title="three" src="about:blank" width="300" height="200" class="giphy-embed"></iframe>
            <p id="pre4"></p>
            <iframe id="gif4" title="four" src="about:blank" width="300" height="200" class="hide"></iframe>
            <p id="pre5"></p> */}
        </div>

    </div>
  );
}

export default App;
