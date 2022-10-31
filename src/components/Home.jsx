import React from "react";
import logo from '../flow.png';
import c1 from '../c1.png';
import c2 from '../c2.png';
import c3 from '../c3.png';
import c4 from '../c4.png';
import {hi, goTo} from '../index.js';


const Home = () => {
    return (
        <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          
          
          <div className="causelist">
          <div className="cause">Fund My Music Video
              <img alt ="c1" src={c1}/>
          </div>
          <div className="cause" onClick={hi}>Fund My Animal Shelter
            <img alt ="c2" src={c2}/>
          </div>
          <div className="cause" onClick={goTo}>Help Keep My Startup Afloat
            <img alt ="c3" src={c3}/>
          </div>
          <div className="cause">Help Me Launch My Game
            <img alt ="c4" src={c4}/>
          </div>
        </div>
        <br/>
        <br/>
        <a
            className="App-link"
            href="./cause"
            target="_blank"
          >
            I Want To Fundraise Too!
          </a>
        </header>
        
      </div>
    
    );
  };
    
  export default Home;