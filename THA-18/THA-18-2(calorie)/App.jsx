import Card from "./Card";

var arr = [
  {foodName:"Pizza", calorie:"56"},
  {foodName:"Burger", calorie:"69"},
  {foodName:"Coke", calorie:"500"},
  {foodName:"Brownie", calorie:"180"},
  {foodName:"Fried Rice", calorie:"90"},
  {foodName:"Lasagna", calorie:"200"},
  {foodName:"Pani Puri", calorie:"10"},
]

function App()
{
  return(
    <div className="heading">
      <h1 className="instructions">Instructions</h1>
      <ul>
          <li>Search for the item/s you have eaten today.</li>
          <li>Check their calorie count.</li>
          <li>Add the calories of the items eaten to get total calorie count.</li>
        </ul>
        <h1 className="read">Calorie Read Only</h1>
        <div className="list">
          {
            arr.map((item, index)=>
            <Card key={index} foodName={item.foodName} calorie={item.calorie}/>)
          }
        </div>
    </div>
  )
}

export default App;
