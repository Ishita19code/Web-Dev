import "./styles.css";

var rowNumber = [1, 2, 1, 2, 1, 2, 1, 2];
var cardColor1 = ["b", "w", "b", "w", "b", "w", "b", "w"];
var cardColor2 = ["w", "b", "w", "b", "w", "b", "w", "b"];

function CardBlack()
{
  return(<div className="card_black" />);
}

function CardWhite() 
{
  return(<div className="card_white" />);
}

const Card = () =>
{
  return( 
      <div className="card"> 
        {
          rowNumber.map(
            (item) => item===1?
            <div className="Row1">
              {
                  (cardColor1.map((item, index) => item === "b"?
                  (<CardBlack key={index} />):(<CardWhite key={index} />)))
              }
            </div>:
            <div className="Row1">
            {
                (cardColor2.map((item, index) => item === "b"?
                (<CardBlack key={index} />):(<CardWhite key={index} />)))
            }
          </div>
          )
        }
      </div>
  );
}



export default Card;
