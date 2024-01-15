import M_Student from "./Mounting/M_Student";
import U_Student from "./Updating/U_Student";

const { Component } = require("react");

class App extends Component{
  render(){
    return (
      <div>
        <h1>Hi</h1>
        {/* <M_Student name='imran'/> */}

        <U_Student name='updating'/>
      </div>
    )
  }
}

export default App