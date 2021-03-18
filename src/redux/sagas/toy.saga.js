import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

// worker Saga: will be fired on "FETCH_USER" actions
function* fetchToy() {
  console.log("fetch saga")
  try {
    const toys = yield axios.get('/api/toy');
   // console.log(toys.data, "toys in saga")
//set_toy sends to reducer
    yield put({ type: 'SET_TOY', payload: toys.data });
  } catch (error) {
    console.log('User get request failed', error);
  }
}


function* deleteToy(action) {
  const toyId = action.payload;
  //console.log(toyId, "action Payload saga")
  try {
    yield axios.delete(`/api/toy/${toyId}`);
    yield put ({type: 'FETCH_TOY'})
  } catch (error) {
    console.log('delete toy request failed', error);
  }
}



function* updateToy(action){
  const adjustedToy = action.payload.toyId;
  const adjustedAvailable = action.payload.available;
  //console.log("ADJUSTED AVAILABLE", adjustedAvailable)
  //console.log('IN UPDATE SAGA', adjustedToy)

  try{
     yield axios.put(`/api/toy/${adjustedToy}`, { adjustedAvailable });
     yield put({type: 'FETCH_TOY'});
  }
  catch(error) {
    console.log(error, "error updateToy sagas")
  }
}

function* searchedToy(action){
  //Start with a get *
console.log(action.payload.name, "name")
console.log(action.payload.ages, "ages")

  try{
   const thisToy = yield axios.get(`/api/toy`);
   console.log(thisToy.data, "TOY DATA")
   yield put({ type: 'SEARCH_RESULT', payload: thisToy.data });

  }
  catch (error){
    console.log(error, "err in searchedToy")
  }
}



function* toySaga() {
  yield takeLatest('FETCH_TOY', fetchToy);
  yield takeLatest('DELETE', deleteToy)
  yield takeLatest('UPDATE_TOY', updateToy)
  yield takeLatest('SEARCH_TOY', searchedToy)
}

export default toySaga;
