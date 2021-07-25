import "./styles.css";

const Card = ({foodName, calorie}) =>
{
  return(
    <div className="card">
      <h1 className="food">{foodName}</h1>
      <h5 className="cal">You have consumed {calorie} cals today.</h5>
    </div>
  )
}

export default Card;