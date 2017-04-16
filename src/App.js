import React,{Component} from 'react';
import store from './store';
import Nav from './Nav';

export default class App extends Component{
  constructor(){
    super();
    this.state = store.getState();
  }

  render(){
    return(
      <div>
        <Nav />
        { this.props.children }
      </div>
    )
  }

}
