import { createStore } from "redux";

// Action generators - functions that return action objects

// object destructuring - incrementBy
const incrementCount = ({ incrementBy = 1 } = {}) => ({
  type: 'INCREMENT',
  incrementBy  //shorthand syntax
});

const decrementCount = ({ decrementBy = 1 } = {}) => ({
  type: 'DECREMENT',
  decrementBy
});

const setCount = ({count} = {}) => ({
  type: 'SET',
  count
});

const resetCount = () => ({
  type: 'RESET'
})


const countReducer = (state = { count: 0 }, action) => {
  switch (action.type) {
    case "INCREMENT":  
      return {
        count: state.count + action.incrementBy
      };
    case "DECREMENT":  
      return {
        count: state.count - action.decrementBy
      };
    case "SET": 
      return {
        count: action.count
      };    
    case "RESET":
      return {
        count: 0
      };
    default:
      return state;
  }
}

// state is the same as prevState and here it is initialise with default object value.
const store = createStore(countReducer);

const unsubscribe = store.subscribe(() => {
  console.log(store.getState()); // getState() returns the current state objects
});

// Action - is an object, it is the only way to get data into the store.

// store.dispatch({
//   // when dispatch is call the createStore function also called after it.
//   type: "INCREMENT" // action type name
// });

// store.dispatch({
//   type: "INCREMENT",
//   incrementBy: 5
// });

// store.dispatch({
//   type: "DECREMENT"
// });

// using functions
store.dispatch(incrementCount({ incrementBy: 5 }));

store.dispatch(incrementCount());

store.dispatch(decrementCount({ decrementBy: 2 }));

store.dispatch(setCount({ count: 101 }));

store.dispatch(resetCount());
