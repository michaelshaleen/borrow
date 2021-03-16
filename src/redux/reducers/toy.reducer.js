const toyReducer = (state = {}, action) => {
  switch (action.type) {
    case 'SET_TOY':
      return action.payload;
    case 'UNSET_TOY':
      return {};
    default:
      return state;
  }
};

// user will be on the redux state at:
// state.toy
export default toyReducer;
