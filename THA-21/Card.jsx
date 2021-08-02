import "./styles.css";

const Card = ({fName, cal, list, setList}) =>
{
  return( 
    <div className="card">
      <h4 style={{paddingLeft:"10px", fontSize:"20px"}}>{fName}</h4>
      <p style={{paddingLeft:"10px"}}>You have consumed {cal} calories today.</p>
      <button className="btn_delete" onClick={(event) => 
        {
          const deletedItem = list.filter((item) => item !== fName);
          setList(deletedItem);
          event.preventDefault();
        }
        }>Delete</button>

        <button className="btn_edit">Edit</button>
    </div>
  ) 
}

export default Card;