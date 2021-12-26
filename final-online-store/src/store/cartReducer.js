const defaultState = [];

export const cartReducer = (state = defaultState, action) => {
  switch(action.type) {
    case 'ADD_PRODUCT':
      return [...state, action.payload];
    case 'REMOVE_PRODUCT':
      return state.filter((obj) => obj.id !== action.payload);
    default:
      return state;
  }
};