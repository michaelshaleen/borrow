const toyReducer = (state = [{}], action) => {
  console.log(action.payload, "action toy reducer")
  switch (action.type) {
    case 'SET_TOY':
      return action.payload;
    }
    return state;
};

export default toyReducer;
