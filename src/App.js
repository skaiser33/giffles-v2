// import './App.css';

import Header from './components/Header';
import GifContainer from './components/GifContainer';


function App() {



  return (
    
    <div className="container">
      <Header />
      <div className="gifs-container">
        <GifContainer id="1" title="one"/>
        <GifContainer id="2" title="two"/>
        <GifContainer id="3" title="three"/>
      </div>
    </div>
  );
}

export default App;

