import { useState } from "react";
import Card from "./Card";
import "./styles.css";
const Form = () =>
{
  const [fName, setFName] = useState("");
  const [fList, setFList] = useState([]);
  const [cal, setCal] = useState("");
  const [calList, setCalList] = useState([]);
  
  return(
  <form>
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

      <button className="add_btn" onClick={(event) => 
      {
        setFList([...fList, fName])
        setCalList([...calList, cal])
        setCal("");
        setFName("");
        event.preventDefault();
      }
      }>Add Item</button>

      {fList.map((fName, index) => {
          const calorie = calList[index];
          return(<Card key={index} 
              fName={fName}
              cal={calorie}
              setFList={setFList}
              fList={fList}
              setFName={setFName}/>);
      })
      }
    </div>
  </form>)
}

export default Form;