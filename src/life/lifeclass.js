import React, { Component } from 'react'

export class lifeclass extends Component {
    constructor(){
        super()
        this.state={
            count:0,
        }
        console.log("constructor")
    }
    componentDidMount(){
        console.log("componentDidMount")
        setInterval(() =>{
            this.setState({count:this.state.count+1})
            console.log(this.state.count)
        },1000);
    }
    componentDidUpdate(prevProps,prevState){
        console.log("componentDidUpdate",prevState)
    }
    shouldComponentUpdate(){
        return true;
    }
  render() {
    console.log("render")
    return (
        <div>
        <h1>{this.state.count}</h1>
      lifeclass</div>
    )
  }
}

export default lifeclass