const newToyReducer = (state = {}, action) => {
  console.log(action.payload, "share reducer")
  switch (action.type) {
    case 'ADD_TOY':
      return action.payload;
    }
    return state;
};

// user will be on the redux state at:
// state.toy
export default newToyReducer;
