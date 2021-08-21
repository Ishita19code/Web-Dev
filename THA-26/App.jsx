import Api from "./App";

function click({url})
{
  return(
    window.location.href =url
  );
}

function App()
{
  return(
  <div>
    <button onClick={click}>Download</button>
  <Api />
  </div>
  );
}

export default App;