import { useSelector } from 'react-redux';


const toyReducer = (state = [], action) => {
  switch (action.type) {
    case 'SET_TOY':
      return action.payload;
    }
    return state;
};

export default toyReducer;

//not grabbing available

//return toys that have user id
//reducer needs access to currently logged in user
// how would we get that into reducer?