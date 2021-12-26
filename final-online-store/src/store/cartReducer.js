const defaultState = [];

export const cartReducer = (state = defaultState, action) => {
  switch(action.type) {
    case 'ADD':
      return [...state, action.payload];
    case 'REMOVE':
      return state.filter((obj) => obj.id !== action.payload);
    default:
      return state;
  }
};