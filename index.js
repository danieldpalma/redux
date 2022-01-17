const redux = require('redux');
const { incrementAction, decrementAction } = require('./actions/CounterActions');
const { addItemAction } = require('./actions/ListActions');
const counterReducer = require('./reducers/CounterReducer');
const listReducer = require('./reducers/ListReducer');

const createStore = redux.createStore;
const combineReducer = redux.combineReducers;


const allReducers = combineReducer({
  counter: counterReducer,
  list: listReducer,
});

const store = createStore(allReducers);

console.log(store.getState());

store.subscribe(() => {
  console.log(store.getState().counter)
});

store.dispatch(addItemAction('Caneta'))
store.dispatch(decrementAction);
store.dispatch(incrementAction());
store.dispatch(incrementAction(2));
store.dispatch(incrementAction(5));

