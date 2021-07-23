import "./styles.css";

const Card = ({foodName, calorie}) =>
{
  return(
    <div className="card">
      <h1 className="foodName" style={{paddingLeft:95}}>{foodName}</h1>
      <h3 className="calorie" style={{alignContent:"center"}}>You have consumed {calorie} calories today.</h3>
    </div>
  )
}

export default Card;