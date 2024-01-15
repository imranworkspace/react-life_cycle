import M_Student from "./Mounting/M_Student";

const { Component } = require("react");

class App extends Component{
  render(){
    return (
      <div>
        <h1>Hi</h1>
        <M_Student name='imran'/>
      </div>
    )
  }
}

export default App