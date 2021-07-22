import "./styles.css";

const Image = () =>
{
  return(
    <div style={{paddingLeft: 50, paddingTop: 20,}}>
    <img src="https://www.memecreator.org/static/images/memes/4757465.jpg" alt="Here is a pic" />
    </div>
  );
}

const Card = () =>
{
  return(
    <div className = "card">
      <Image />
      <h1 style={{paddingLeft: 110}}>React Card</h1>
      <h4 style={{paddingLeft: 47}}>Your main THA is to make MEME-Cards</h4>
    </div>
  );
}

export default Card;