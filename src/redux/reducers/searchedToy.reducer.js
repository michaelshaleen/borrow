const searchedReducer = (state = [{ id: 0 , name: '', ages: '' }], action) => {
  switch (action.type) {
    case 'SEARCH_RESULT':
      return action.payload;
    }
    return state;
};

export default searchedReducer;

//not grabbing available