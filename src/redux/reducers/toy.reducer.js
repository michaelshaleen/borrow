const toyReducer = (state = [{ id: 0 , name: '', ages: '', available: true }], action) => {
  switch (action.type) {
    case 'SET_TOY':
      return action.payload;
    }
    return state;
};

export default toyReducer;

//not grabbing available