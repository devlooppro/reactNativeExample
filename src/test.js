// import Redux, {createStore} from 'redux';
//
// const reducer = ()=>[];
//
// const store = createStore(reducer);
//
//
// console.log(store.getState());
//
//
// const action= {
//   type: 'split_string',
//   payload: 'abcd'
// };
//
// store.dispatch(action);
//
const actions = {
  split_text:'split_text',
  add_symbol:'add_symbol',
  refresh:'refresh',
  back_sort:'back_sort',
};

import Redux, {createStore} from 'redux';

const initialState = [];

const reducer = (currentState = initialState, action) => {
  switch (action.type) {
    case actions.split_text:
      return action.payload.split('');
    case 'add_symbol':
      return [...currentState, action.payload];
    case 'refresh':
      return [...initialState ];
    case 'back_sort':
      return [...currentState.reverse() ];


    default:
      return currentState;
  }

  return currentState;
};

const store = createStore(reducer);


console.log(store.getState());

const action = {
  type: action.split_text,
  payload: 'abcd'
};


store.dispatch(action);
console.log(store.getState());

store.dispatch({
  type: 'add_symbol',
  payload: 'e'
});
console.log(store.getState());

store.dispatch({
  type: 'back_sort'
});
console.log(store.getState());