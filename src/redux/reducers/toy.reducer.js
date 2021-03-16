const toyReducer = (state = {}, action) => {
  console.log(action.payload, "action type reducer")
  switch (action.type) {
    case 'SET_TOY':
      return action.payload;
    }
    return state;
};

// user will be on the redux state at:
// state.toy
export default toyReducer;
