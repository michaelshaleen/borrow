import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

// worker Saga: will be fired on "FETCH_USER" actions
function* shareToy(action) {
  console.log(acton.payload, "payload in share saga")
  try {
    const response = yield axios.post('/api/toy', action.payload);
    yield put({ type: 'ADD_TOY', payload: response.data });
  } catch (error) {
    console.log('User get request failed', error);
  }
}

function* shareSaga() {
  yield takeLatest('ADD_TOY', shareToy);
}

export default shareSaga;
