const defaultState = {
  userId: 0,
  name: '',
  username: '',
  password: '',
  wallet: 0,
  cart: []
};

export const currentUserReducer = (state = defaultState, action) => {
  switch (action.type) {
    case 'SET_USER':
      return {...action.payload};
    case 'ADD_PRODUCT':
      return {...state, cart: [...state.cart, action.payload]};
    case 'REMOVE_PRODUCT':
      return state;
    case 'BUY_PRODUCT':
      return state;
    default:
      return state;
  }
};