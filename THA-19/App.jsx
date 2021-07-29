import { Component} from "react";
import "./App.css";

class App extends Component
{
  constructor(props)
  {
    super(props);
    this.state = 
    {
      count4: 0,
      count1: 0,
      count2: 0,
      count3: 0
    };
  }

  render()
  {
    return(
      <div className="display">
        <button onClick={() => 
          {
            this.setState({count1: this.state.count1 + 1});
          }}>{this.state.count1}</button>

          <button onClick={() => 
          {
            this.setState({count2: this.state.count2 + 1});
          }}>{this.state.count2}</button>

          <button onClick={() => 
          {
            this.setState({count3: this.state.count3 + 1});
          }}>{this.state.count3}</button>

          <button onClick={() => 
          {
            this.setState({count4: this.state.count4 + 1});
          }}>{this.state.count4}</button>
      </div>
    )
  }
}

// class App extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       count: 0
//     };
//   }

//   render() {
//     return (
//       <div>
//         <p>You clicked {this.state.count} times</p>
//         <button onClick={() => this.setState({ count: this.state.count + 1 })}>
//         {this.state.count}
//         </button>
//       </div>
//     );
//   }
// }

export default App;