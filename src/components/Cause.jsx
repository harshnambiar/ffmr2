
import React from "react";
import c3 from '../c3.png';
import logo from '../flow.png';
import {getFlowBalance, hi, sendFlow} from '../index.js';
const Cause = () => {
  return (
    <div className="App" onLoad={hi}>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <div className="cause" onClick={ getFlowBalance}>Help Keep My Startup Afloat
            <img alt ="c3" src={c3}/>
            
          </div>
          
          <a
            className="App-link"
            onClick={() => sendFlow("0x4b0c289a32303ee3", "1.0")}
          >
            Help Me With Your FLOW
          </a>
        <br/>
        <br/>
        
        </header>
        
      </div>
  );
};
  
export default Cause;