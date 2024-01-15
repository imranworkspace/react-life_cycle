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

  // shouldComponentUpdate(nextprops,nextstate){
  //   if (this.state.mroll < 107){
  //     console.log('U_Marks - shouldComponentUpdate')
  //     console.log(nextprops,nextstate)
  //     return true
  //   }
  //   else{
  //     console.log(nextprops,nextstate)
  //     return  false
  //   } 
  // }

  render(){
    console.log('U_Marks - renderer')
    return (
      <>
        
      </>
    )
  }
}

export default U_Marks