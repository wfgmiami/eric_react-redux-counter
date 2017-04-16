import React,{Component} from 'react';
import store, { incrementBlue } from './store';
import { connect } from 'react-redux';


const Counter = ({count, increment}) => (
  <button className = 'btn btn-primary' onClick = { increment }>{ count }</button>
)

/*class CounterContainer extends Component {
  constructor(){
    super();
    this.state = { count: store.getState().counter.blue };
  }

componentDidMount(){
  this.unsubscribe = store.subscribe( ()=> this.setState( {count: store.getState().counter.blue }))
}

componentWillUnmount(){
  this.unsubscribe();
}

  render(){

    return(
      <div>
        <Counter count = { this.state.count } increment = { () => store.dispatch(incrementBlue()) } />
      </div>
    )
  }
}*/

// export default CounterContainer;

const mapStateToProps = (state) => {
  return {
    count: state.counter.blue
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    increment: () => dispatch(incrementBlue())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter)
