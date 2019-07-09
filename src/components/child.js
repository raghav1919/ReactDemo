import React, { Component } from 'react';



class Child extends Component {    
    //constructor(props){
      //  super(props);
    //}   
  render() {
    return (
      <div className="row mt-5">
        <div className="col-md-4 offset-md-1">
       <p>{this.props.parentTextBoxValue}</p>
       </div>
      </div>
    );
  }
}
export default Child;
