const toyReducer = (state = [{}], action) => {
  //console.log(action.payload, "action toy reducer")
  // if(toys.available === true){
  //   toys.available = 'true'
  // }if(toys.available === false){
  //   toys.available = 'false'
  // }
  switch (action.type) {
    case 'SET_TOY':
      return action.payload;
    }
    return state;
};

export default toyReducer;

//not grabbing available