const FuncTemplate = ({template, setMeme}) =>
{
    return (
      <div>
        {
          template.map((item) => 
          (
            <div 
                key={item.id} 
                className="item" 
                onClick={() =>
                {
                  setMeme(item) 
                }}>
              <div 
                  style={{ backgroundImage:`url(${item.url})` }} 
                  className="image">
              </div>
            </div>
          ))
        }
      </div>
    )
}

export default FuncTemplate;

