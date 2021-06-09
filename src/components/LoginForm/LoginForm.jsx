import './LoginForm.css'
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

import React, { useState } from 'react';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import EnhancedEncryptionIcon from '@material-ui/icons/EnhancedEncryption';
import VisibilityIcon from '@material-ui/icons/Visibility';
import VisibilityOffIcon from '@material-ui/icons/VisibilityOff';
import { useDispatch } from 'react-redux';
import {useSelector} from 'react-redux';
import ReactPlayer from 'react-player';
import alphabet from '../pictures/alphabet.jpg';


function LoginForm() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [visible, setVisible] = useState(true);
  const errors = useSelector(store => store.errors);
  const dispatch = useDispatch();

  const login = (event) => {
    event.preventDefault();

    if (username && password) {
      dispatch({
        type: 'LOGIN',
        payload: {
          username: username,
          password: password,
        },
      });
    } else {
      dispatch({ type: 'LOGIN_INPUT_ERROR' });
    }
  }; // end login


  const changeIcon = () => {    
    console.log("changed")
  }

  return (
    <>

<form className="formPanel" onSubmit={login}>
    <div className="login-box">
      <h4>Login</h4>
      {errors.loginMessage && (
        <h3 className="alert" role="alert">
          {errors.loginMessage}
        </h3>
      )}
      <div className="textbox">
        <i><AccountCircleIcon /></i>
        <label htmlFor="username">
          <TextField
            style={{color: "white"}}
            label="Username"
            type="text"
            name="username"
            required
            value={username}
            onChange={(event) => setUsername(event.target.value)}
          />
        </label>
      </div>
      <div className="textbox">
        <i><EnhancedEncryptionIcon /></i>
      <label htmlFor="password"
        style={{color:'white', fontFamily:'cursive'}}>      
            <TextField
              id="myInput"
              label="Password"
              type="password"
              name="password"
              required
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              />
        </label>
      </div>
      <input className="btn" type="submit" name="submit" value="Log In" />
    </div>
</form> 


    {/* <body className="landing">

<div class="text">
  
    </div>
    </body>
    
    <form className="formPanel" onSubmit={login}>
      <h2
        className="login">

        Login
      </h2>
      {errors.loginMessage && (
        <h3 className="alert" role="alert">
          {errors.loginMessage}
        </h3>
      )}
     
      
      <div>
      <label htmlFor="username"
        >
          
          
          <TextField
            style={{color: "white"}}
            label="Username"
            type="text"
            name="username"
            required
            value={username}
            onChange={(event) => setUsername(event.target.value)}
          />
        </label>
              {/* <AccountCircle />
      </div>

      <div>
        <label htmlFor="password"
        style={{color:'white', fontFamily:'cursive'}}>
          
          <TextField
          label="Password"
            type="password"
            name="password"
            required
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
        </label>
      </div>
      <div>
        <input className="btn" type="submit" name="submit" value="Log In" />
      </div>
    </form>  */}

 





    </>
  );
}

export default LoginForm;
