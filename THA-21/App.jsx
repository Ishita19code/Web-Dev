import { useState } from "react";
import Card from "./Card";
import "./styles.css";
import { v4 as uuidv4 } from 'uuid';

const Form = () =>
{
  const [fName, setFName] = useState("");
  const [list, setList] = useState([]);
  const [cal, setCal] = useState("");

  return(
    <div className="display"> 
      <label >
        <input 
        className="inputFood"
        type="text" 
        placeholder="Item Name" 
        value={fName} 
        onChange={(e) => setFName(e.target.value)}/>
      </label>

      <label>
        <input 
        className="inputCal"
        type="number" 
        placeholder="Calorie Count" 
        value={cal} 
        onChange={(e) => setCal(e.target.value)}/>
      </label> 

      <button className="add_btn" onClick={() => 
      {
        const obj = 
        {
          id:uuidv4(), 
          food: fName,
          calorie:cal
        }

        setList([...list, obj]);
        setCal("");
        setFName("");
      }
      }>Add Item</button>

      {list.map((obj, index) => {
          return(<Card 
            key={index} 
            obj={obj}
            setList={setList}
            list={list}/>);
      })
      }
    </div>
  )
}

export default Form;
