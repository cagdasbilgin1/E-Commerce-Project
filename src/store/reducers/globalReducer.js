const initialState = {
  theme: 'light',
  user: null,
};

const globalReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_THEME':
      return { ...state, theme: action.payload };
    case 'SET_USER':
      return { ...state, user: action.payload };
    default:
      return state;
  }
};

export default globalReducer;
