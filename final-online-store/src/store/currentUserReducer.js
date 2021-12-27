const defaultState = {
  userId: 0,
  name: '',
  username: '',
  password: '',
  wallet: 0,
  image: '',
  cart: []
};

export const currentUserReducer = (state = defaultState, action) => {
  switch (action.type) {
    case 'SET_USER':
      return {...action.payload};
    case 'ADD_PRODUCT':
      return {...state, cart: [...state.cart, action.payload]};
    case 'REMOVE_PRODUCT':
      return {...state, cart: state.cart.filter((item) => item.id !== action.payload)};
    case 'BUY_PRODUCT':
      return {...state, wallet: state.wallet - action.payload[1], cart: state.cart.filter((item) => item.id !== action.payload[0])};
    default:
      return state;
  }
};