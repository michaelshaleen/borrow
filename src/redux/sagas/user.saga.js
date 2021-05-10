import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

// worker Saga: will be fired on "FETCH_USER" actions
function* fetchUser() {
  try {
    const config = {
      headers: { 'Content-Type': 'application/json' },
      withCredentials: true,
    };

    // the config includes credentials which
    // allow the server session to recognize the user
    // If a user is logged in, this will return their information
    // from the server session (req.user)
    const response = yield axios.get('/api/user', config);

    // now that the session has given us a user object
    // with an id and username set the client-side user object to let
    // the client-side code know the user is logged in
    yield put({ type: 'SET_USER', payload: response.data });
  } catch (error) {
    console.log('User get request failed', error);
  }
}

function* editUser(action) {
  const newUser = action.payload;
  console.log(newUser);
  const userId = newUser.id;
  const newUserName = newUser.username;
  const newPassword = newUser.password;
  const newPhone = newUser.phone;
  
  try {
    // const config = {
    //   headers: { 'Content-Type': 'application/json' },
    //   withCredentials: true,
    // };
    const response = yield axios.put(
      '/api/user/update', { 
        userId,
        newUserName, 
        newPassword, 
        newPhone 
      });
    yield put({ 
      type: 'FETCH_USER', payload: response.data
    });
  } catch(error) {
    console.log("Edit user failed", error);
  }
}

function* userSaga() {
  yield takeLatest('FETCH_USER', fetchUser);
  yield takeLatest('EDIT', editUser);
}

export default userSaga;
