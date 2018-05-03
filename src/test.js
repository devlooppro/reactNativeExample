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


import Redux, {createStore} from 'redux';

const initialState = [];

const reducer = (currentState = initialState, action) => {
  switch (action.type) {
    case 'xsplit_text':
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
  type: 'split_text',
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