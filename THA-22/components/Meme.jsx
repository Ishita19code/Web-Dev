import { useState } from "react";

const Meme = ({meme, setMeme}) =>
{
  const [form, setForm] = useState({
    template_id: meme.id,
    username: "IshitaGupta19",
    password: "IshitaGupta",
    boxes: []
  });

  const fetchMeme = async(url) =>
  {
    const response = await fetch(url);
    const data = await response.json();
    setMeme({...meme, url: data.data.url}); //memes mein hi append kar diya
  }

  const generateMeme = () => 
  {
    let url = `https://api.imgflip.com/caption_image?template_id=${form.template_id}&username=${form.username}&password=${form.password}`

    form.boxes.map((box, index) => 
    (
      url += `&boxes[${index}][text]=${box.text}`
    ));
    fetchMeme(url);
  }

  return(
    <div className="meme">
      <img src={meme.url} alt={meme.name} />
      <div>
        {
          [...Array(meme.box_count)].map((_,index) =>
            (
              <input key={index}
                  type="text" 
                  placeholder={`Meme Caption ${index+1}`}
                  onChange={(e) =>
                    {
                      const newBoxes = form.boxes;
                      newBoxes[index] = {text: e.target.value};
                      setForm({...form, boxes: newBoxes})
                    }}/>
            ))
        }
      </div>
      <div>
        <button onClick={generateMeme}>Generate Meme</button>

        <button 
            onClick={() => {setMeme(null)}}
        >Choose Template</button>
      </div>
    </div>);
}

export default Meme;
