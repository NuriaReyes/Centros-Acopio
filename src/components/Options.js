import React, { Component } from 'react'

class Options extends Component{


  render(){
    return (
      <select className = "selectOptions" name = {this.props.name} onChange = {this.props.onChange}>
        {this.props.places.map(element => {
          return (
            <option key={element.coord} value = {element.coord}> {element.name} </option>
          )
        })}
      </select>
    )
  }
}

export default Options
