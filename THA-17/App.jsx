import Card from "./Card";
import "./styles.css";

function App()
{
  return(
    <div className="bgcolor">
      <div className="container">
      <div className="header">
        <h1 style={{paddingLeft:130}}>Instructions</h1>
        <ul>
          <li>Search for the item/s you have eaten today.</li>
          <li>Check their calorie count.</li>
          <li>Add the calories of the items eaten to get total calorie count.</li>
        </ul>
        <h1 style={{paddingLeft:100, paddingTop:20}}>Calorie Read Only</h1>
      </div>
      <div className="list">
        <Card foodName="Pizza" calorie="56"/>
        <Card foodName="Burger" calorie="69"/>
        <Card foodName="Coke" calorie="500"/>
        <Card foodName="Brownie" calorie="180"/>
        <Card foodName="Fried Rice" calorie="90"/>
        <Card foodName="Lasagna" calorie="200"/>
        <Card foodName="Pani Puri" calorie="10"/>
      </div>
    </div>
    </div>
  )
}

export default App;