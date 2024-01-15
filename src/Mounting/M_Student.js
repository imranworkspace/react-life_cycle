import M_Marks from "./M_Marks";

const { Component } = require("react");

class M_Student extends Component{
    constructor(props){
        super(props)
        console.log('M_Student - constructor')
    }
    state={
        name:this.props.name
    }

    componentDidMount(){
        console.log('M_Student - componentDidMount')
    }

  render(){
    console.log('M_Student - renderer')
    return (
      <div>
        <h2>{this.props.name}</h2>
        <M_Marks />
      </div>
    )
  }
}

export default M_Student