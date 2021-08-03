import "./styles.css";
import { useState } from "react";

const Card = ({obj, setList, list}) =>
{
  const [edit, setEdit] = useState(true);
  const [fUpdated, setFUpdated] = useState("");
  const [calUpdated, setCalUpdated] = useState("");

  const updatedList = (updatedObj) =>
  {
      const update = list.map((item, index) => 
        (item.id === updatedObj.id) ?
          item[index] = updatedObj : item
      )
      setList(update);
  };

  return( 
    <div className="card">
      {edit ? 
      (<>
        <h4 style={{paddingLeft:"10px", fontSize:"20px"}}>{obj.food}</h4>
        <p style={{paddingLeft:"10px"}}>You have consumed {obj.calorie} calories today.</p>
      </>) : 
      <>  
      <input 
            type="text" 
            placeholder="Update FoodItem"
            className="inputFood"
            value={fUpdated} 
            onChange={(e) => setFUpdated(e.target.value)}/>

      <input 
            type="number" 
            placeholder="Update Calorie"
            className="inputFood"
            value={calUpdated}
            onChange={(e) => setCalUpdated(e.target.value)}/>
      </>}

      <button className="btn_delete" onClick={() => 
        {
          const newArray = list.filter((item) => item.id !== obj.id);
          setList(newArray);
        }
        }>Delete</button>

        <button className="btn_edit" 
        onClick={() => 
        {
          const updatedObj = 
          {
            id: obj.id,
            food:fUpdated,
            calorie:calUpdated
          }
          updatedList(updatedObj);
          setEdit(!edit);
        }}>{edit ? "Edit" : "Save"}</button>
    </div>
  ) 
}

export default Card;
