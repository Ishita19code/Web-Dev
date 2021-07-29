import Card from "./Card";
import { useState } from "react";

function App()
{
  var [foodList, setFoodList] = useState([
    {foodName:"Pizza", calorie:"56"},
    {foodName:"Burger", calorie:"69"},
    {foodName:"Coke", calorie:"500"},
    {foodName:"Brownie", calorie:"180"},
    {foodName:"Fried Rice", calorie:"90"},
    {foodName:"Lasagna", calorie:"200"},
    {foodName:"Pani Puri", calorie:"10"},
  ])
  return(
    <div className="container">
      <h1 className="instructions">Instructions</h1>
      <ul>
          <li>Search for the item/s you have eaten today.</li>
          <li>Check their calorie count.</li>
          <li>Add the calories of the items eaten to get total calorie count.</li>
        </ul>
        <h1 className="read">Calorie Read Only</h1>
        <div className="list">
          {
              foodList.length < 1?
              <h1 className="emptyList">The list is empty.</h1>:
              foodList.map((item, index)=>
              <Card 
                  key={index} 
                  foodName={item.foodName} 
                  calorie={item.calorie} 
                  item={item}
                  foodList={foodList}
                  setFoodList={setFoodList}/>)
          }
        </div>
    </div>
  )
}

export default App;
