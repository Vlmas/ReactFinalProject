import { createStore } from 'redux';

const cartReducer = (state, action) => {
  switch(action.type) {
    default:
      return state;
  }
};

export const cartStore = createStore(cartReducer);