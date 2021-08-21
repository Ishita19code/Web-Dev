import React from 'react';
import ReactDOM from 'react-dom';
import App from "./App";

ReactDOM.render(

  //one method to write Hello World
  // React.createElement('h1',{},"Hello World!"),
  // document.getElementById('root')
  //Second way to write Hello World
  <App url="https://en.wikipedia.org/wiki/Taj_Mahal"/>, document.getElementById("root")
);



