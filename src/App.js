import React from "react";
import './App.css';
import  Quote from "./texts"
import Info from "./info"
import Head from "./head"
function App({notes}) {
  
  return (
    <div>
      {/* <Quote /> */}
      < Head />
      <Info />
      
    </div>
    
  );
}

export default App;
