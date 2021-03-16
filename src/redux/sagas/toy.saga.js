import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

// worker Saga: will be fired on "FETCH_USER" actions
function* fetchToy() {
  try {
    const toys = yield axios.get('/api/toy');
    console.log(toys.data, "toys in saga")
//set_toy sends to reducer
    yield put({ type: 'SET_TOY', payload: toys.data });
  } catch (error) {
    console.log('User get request failed', error);
  }
}
function* deleteToy(toyId) {
  try {
    axios.delete(`/api/toy/${toyId}`);
  } catch (error) {
    console.log('delete toy request failed', error);
  }
}

function* updateToy(toyId){
  console.log("update in saga")
  try{
    const updatedToy = yield axios.put(`api/toy, ${toyId}`);
    yield put({type: 'FETCH_TOY', payload: updatedToy.data})
  }
  catch(error) {
    console.log(error, "error updateToy sagas")
  }
}

function* toySaga() {
  yield takeLatest('FETCH_TOY', fetchToy);
  yield takeLatest('DELETE', deleteToy)
  yield takeLatest('UPDATE_TOY', updateToy)
}

export default toySaga;
