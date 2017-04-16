import React,{ Component } from 'react';
import store, { incrementRed } from './store';
import { connect } from 'react-redux';

const Counter = ({ count, increment }) => (
  <button className = 'btn btn-danger' onClick = { increment }>{ count }</button>
)

// class CounterContainer extends Component{
//   constructor(){
//     super();
//     this.state = { count: store.getState().counter.red }
//   }

// componentDidMount(){
//   this.removeWatch = store.subscribe( ()=> this.setState( {count: store.getState().counter.red }))
// }

// componentWillUnmount(){
//   this.removeWatch();
// }

//   render(){
//     return(
//       <Counter count={this.state.count} increment = {()=> store.dispatch( incrementRed()) } />
//     )
//   }
// }

// export default CounterContainer;
// const mapStateToProps = (state) => {
//   return {
//     count: state.counter.red
//   }
// }

const mapStateToProps = (state) => (
  {
    count: state.counter.red
  }
)
// const mapDispatchToProps = (dispatch) => {
//   return {
//     increment: () => dispatch(incrementRed())
//   }
// }

const mapDispatchToProps = (dispatch) => (
  {
    increment: () => dispatch(incrementRed())
  }
)
export default connect(mapStateToProps, mapDispatchToProps)(Counter)
