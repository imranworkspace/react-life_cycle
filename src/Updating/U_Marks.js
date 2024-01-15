const { Component } = require("react");

class U_Marks extends Component{
  constructor(props){
    super(props)
    this.state={
      mroll : this.props.roll
    }
  }

  // example of virtualDOM with realDOM
  // to compare update value with props and state we use below function
  static getDerivedStateFromProps(props,state){
    console.log('U_Marks - getDerivedStateFromProps()')
    console.log(props)
    console.log(state)
    return null
  }

  shouldComponentUpdate(nextprops,nextstate){
    console.log('U_Marks - shouldComponentUpdate')
    console.log(nextprops)
    console.log(nextstate)
    return true
  }

  getSnapshotBeforeUpdate(prevProps,prevStates){
    console.log('U_Marks - getSnapshotBeforeUpdate before update')
    console.log(prevProps)
    console.log(prevStates)
    return 45
  }

  componentDidUpdate(prevProps,prevStates,snapshot){
    console.log('U_Marks - componentDidUpdate after update')
    console.log(prevProps)
    console.log(prevStates)
    console.log(snapshot)
  }

  render(){
    console.log('U_Marks - renderer')
    return (
      <>
        
      </>
    )
  }
}

export default U_Marks