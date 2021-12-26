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
    default:
      return state;
  }
};