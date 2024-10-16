import React, { Component } from 'react'

class classs extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         number:10
      }
    }
  render() {
    const handel=()=>{
        this.setState(prev=>{
            return{number:prev.number+5}
        })
    }
    return (
      <div>
        {this.state.number}
        <button onClick={handel}>click</button>
      </div>
    )
  }
}

export default classs