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
import { useDispatch } from 'react-redux';
import {useSelector} from 'react-redux';
import { useHistory } from 'react-router-dom';



function LoginForm() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [visible, setVisible] = useState(true);
  const errors = useSelector(store => store.errors);
  const dispatch = useDispatch();
  const history = useHistory();


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
                      onChange={(event) => setUsername(event.target.value)}/>
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
                        onChange={(event) => setPassword(event.target.value)}/>
                  </label>
                </div>
                <button className="btn" type="submit" name="submit" value="Log In">
                  Submit
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                </button>
                <button
            type="button"
            className="register-btn"
            onClick={() => {
              history.push('/registration');
            }}>
            Register 
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </button>
              </div>
          </form> 
    </>
  );
}

export default LoginForm;
