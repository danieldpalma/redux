// const incrementAction = {type: 'INCREMENT', payload: 1};
// const increment2Action = {type: 'INCREMENT', payload: 2};
const incrementAction = (value) => {
  return {
    type: 'INCREMENT',
    payload: value || 1,
  }
};

const decrementAction = {type: 'DECREMENT'};

module.exports = {
  incrementAction,
  decrementAction
}