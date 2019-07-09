import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Login from './components/login';
import Product from './components/ProductComponent';
import Parent from './components/parent';
import Child from './components/child';
import List from "./List";
import Form from "./Form";
import { nullLiteral } from '@babel/types';

import {addArticle} from  './js/actions/index'

import { connect} from 'react-redux'

class App extends Component {    
  constructor() {
    super();
    this.state = {
      name: 'React',
      parentTextBoxValue: ''
    };
  }
 
  handleParentData = (e) => {
     this.setState({parentTextBoxValue: e})
  }
  render() {
    {console.log("Current state is ", JSON.stringify(this.props.stateInfo))
    {this.props.stateInfo.users.map((user, index) => (
            console.log('title '+JSON.stringify(user.title)),
      console.log('id '+index)
    ))
    }
  }
    return (
    <Router>
<div className="row">
           <h2>Welcome :-) !!!!</h2>
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <ul className="navbar-nav mr-auto">
            <li><Link to={'/'} className="nav-link"> Home </Link></li>
            <li><Link to={'/contact'} className="nav-link">Contact</Link></li>
            <li><Link to={'/about'} className="nav-link">About</Link></li>
            <li><Link to={'/login'} className="nav-link">Login</Link></li>
            <li><Link to={'/product'} className="nav-link">Products</Link></li>
          </ul>
          </nav>
          <hr />
          <Switch>
              <Route exact path='/' component={Home}/>
              <Route path='/contact' component={Contact}/>
              <Route path='/about' component={About}/>
              <Route path='/login' component={Login}/>
              <Route path='/product' component={Product}/>
          </Switch>
        {/* <Parent handleData={this.handleParentData} />
        <Child parentTextBoxValue={this.state.parentTextBoxValue}/>    */}
       
  <div className="row mt-5">
    <div className="col-md-4 offset-md-1">
    <h2>Articles</h2>
      <List />
    </div>
  </div>
  <div className="col-md-4 offset-md-1">
      <h2>Add a new article</h2>
      <Form />
    </div> 
        </div>
      </Router>      
    );
  }
}

 //export default App;



const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    addArticleInfo(){
      console.log('test method')
      dispatch(addArticle("Test Forum"));
    }
  };
}

const mapStateToProps = (state, ownProps) => {
  return {
    stateInfo: state.userrootReducer
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)