import React, { Component } from 'react';
import {Button} from 'reactstrap';

class Parent extends Component {
  
constructor(props){
    super(props);
    this.state={TextBoxValue: ""}
}   

  SubmitValue = (e) => {
     this.props.handleData(this.state.TextBoxValue)
  }
    
   onChange=(e)=>{
this.setState({TextBoxValue: e.target.value})
   } 
  render() {
    return (
      <div className="row mt-5">
        <div className="col-md-4 offset-md-1">
        <input type="text" name="TextBox"  onChange={this.onChange}
         />
        <Button onClick={this.SubmitValue}>Submit Value</Button>
        </div>
      </div>
    );
  }
}

export default Parent;
