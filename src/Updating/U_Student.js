import U_Marks from "./U_Marks";

const { Component } = require("react");

class U_Student extends Component{
    constructor(props){
        super(props)
        console.log('U_Student - constructor')
        this.state={
          name:this.props.name,
          roll:101
      }
    }
  
    valueChange=()=>{
      console.log('button clicked')
      this.setState({roll:this.state.roll + 2})
    }

  render(){
    console.log('U_Student - renderer')
    return (
      <>
        <h2>you are in : {this.props.name}</h2>
        <h2>{this.state.roll}</h2>
        <U_Marks roll={this.state.roll}/>
        <button onClick={this.valueChange}>Change</button>
      </>
    )
  }
}

export default U_Student