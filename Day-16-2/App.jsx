import Row1 from "./Row1";
import Row2 from "./Row2";

function App()
{
  return(
    <div className="Display">
        <div className="outline">
        <div className="App">
        <Row1 />
        <Row2 />
        <Row1 />
        <Row2 />
        <Row1 />
        <Row2 />
        <Row1 />
        <Row2 />
        </div>
      </div>
    </div>
  );
}

export default App;