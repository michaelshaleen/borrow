import React, { useState } from 'react';
import {
  TextField,
  MenuItem,
  FormControl,
  Select,
  Paper,
  Fade,
  Tooltip,
  Grid,
  InputLabel,
} from '@material-ui/core';
import {useSelector, useDispatch} from 'react-redux';
import Nav from '../Nav/Nav';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import PhoneAndroidIcon from '@material-ui/icons/PhoneAndroid';
import EnhancedEncryptionIcon from '@material-ui/icons/EnhancedEncryption';




function Edit() {
  const user = useSelector((store) => store.user.id);

  const dispatch = useDispatch();


  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [phone, setPhone] = useState('');
  const [editUser, setEditUser] = useState(0);


  const edit = (event) => {
  
    event.preventDefault();

    dispatch({
      type: 'EDIT',
      payload: {
        id: user,  
        username: username,
        password: password,
        phone: phone
      },
    });
  };



  return (<>
  <Nav />
  <p>{user} User Id</p>
    <div>
      <form className="formPanel" onSubmit={edit}>
      <h2>Edit User</h2>
      <div>
      <i><AccountCircleIcon /></i>

        <label htmlFor="username">
          <TextField
            label="username"
            type="text"
            name="username"
            value={username}
            required
            onChange={(event) => setUsername(event.target.value)}
          />
        </label>
      </div>
      <div>
      <i><EnhancedEncryptionIcon /></i>
        <label htmlFor="password">
          <TextField
            label="password"
            type="password"
            name="password"
            value={password}
            required
            onChange={(event) => setPassword(event.target.value)}
          />
        </label>
      </div>
      <div>
      <i><PhoneAndroidIcon /></i>
        <label htmlFor="phone">
          <TextField
            label="867-5309"
            type="tel"
            name="phone"
            value={phone}
            required
            onChange={(event) => setPhone(event.target.value)}
          />
        </label>
      </div>
      <div>
        <input className="btn edit" type="submit" name="submit" value="Submit Change" />
      </div>
    </form>
      
    </div>
  </>)
}

export default Edit;
