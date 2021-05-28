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
import AccountCircle from '@material-ui/icons/AccountCircle';
import InputAdornment from '@material-ui/core/InputAdornment';

import { useDispatch } from 'react-redux';
import {useSelector} from 'react-redux';
import ReactPlayer from 'react-player';
import alphabet from '../pictures/alphabet.jpg';


function LoginForm() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
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

  return (
    <>

<form className="formPanel" onSubmit={login}>


    <div className="login-box">
      <h2>Login</h2>
      {errors.loginMessage && (
        <h3 className="alert" role="alert">
          {errors.loginMessage}
        </h3>
      )}
      <div className="textbox">
        <i className="fas fa-user"></i>
        <i class='fa fa-space-shuttle' ></i>
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
      </div>
      <div className="textbox">
      <i className="fas fa-lock"></i>
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
