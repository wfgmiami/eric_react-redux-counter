import { createStore, combineReducers } from 'redux';


const initialState = {
  blue: 0,
  red: 0
}

const counterReducer = ((state = initialState,action)=>{
  switch(action.type){
    case 'INCREMENT_BLUE':
      state = Object.assign({}, state, { blue: state.blue + 1});
      break;
    case 'INCREMENT_RED':
      state = Object.assign({}, state, { red: state.red + 1 });
      break;
    default:
      state;

  }
  return state;

})

const combined = combineReducers({
  counter: counterReducer
})

const store = createStore(combined);

// const incrementBlue = () => store.dispatch({ type: 'INCREMENT_BLUE'})
// const incrementRed = () => store.dispatch({ type: 'INCREMENT_RED' })

const incrementRed = () => ({ type: 'INCREMENT_RED' })
const incrementBlue = () => ({ type: 'INCREMENT_BLUE' })

export { incrementBlue, incrementRed }
export default store;
