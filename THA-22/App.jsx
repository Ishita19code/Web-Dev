import React, { useEffect, useState } from "react";
import "./styles.css";
import FuncTemplate from "./components/Template";
import Meme from "./components/Meme";

function App()
{
  const [template, setTemplate] = useState([]);
  const [meme, setMeme] = useState(null);

  const fetchTemplate = async() => 
  {
    const response = await fetch('https://api.imgflip.com/get_memes');
    const data = await response.json();
    setTemplate(data.data.memes);
  }
  
  useEffect(() =>
  {
    fetchTemplate();
  }
  ,[])

  return(
    <div>
      <h1>Meme Generator</h1>
      {meme === null ? (<FuncTemplate template={template} setMeme={setMeme} />) : <Meme meme={meme} setMeme={setMeme}/>}
      
    </div>
  )
}

export default App;