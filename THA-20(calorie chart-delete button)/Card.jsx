import "./styles.css";

const Card = ({foodName, calorie, item, foodList, setFoodList}) =>
{
  return(
    <div className="card">
      <h1 style={{paddingLeft:95}}>{foodName}</h1>
      <h3 style={{alignContent:"center"}}>You have consumed {calorie} calories today.</h3>
      <button onClick={() => 
        {
          const deletedItem = foodList.filter((element) => element !== item);
          setFoodList(deletedItem);
        }
        }>Delete</button>
    </div>
  )
}

export default Card;