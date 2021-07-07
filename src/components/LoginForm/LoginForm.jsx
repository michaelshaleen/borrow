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
    <section className="login-section">
      <div className="box">
        <div className="form">
          <h2>Login</h2>
          <form onSubmit={login}>
            <div className="input-box">
            <i><AccountCircleIcon /></i>
              <input 
                value={username}
                type="text" 
                placeholder="Username"
                onChange={(event) => setUsername(event.target.value)}>
              </input>
            </div>
            <div className="input-box">
            <i><EnhancedEncryptionIcon /></i>
              <input 
                value={password}
                type="password" 
                placeholder="Password"
                onChange={(event) => setPassword(event.target.value)}>
              </input>
            </div> 
            <label className="remember">
              <input 
                type="checkbox">
              </input>
              Remember Me
            </label>
            {/* <div className="input-box">
              <input 
                type="submit" 
                placeholder="Login">
              </input>
            </div> */}
            <div className="input-box">
            </div>
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
          </form>
          <p>Forget
            <a href="#"> Password</a>
          </p>
          <p>Register an
            <a href="/registration"> Account</a>
          </p>
        </div>
      </div>
    </section>



          {/* <form className="formPanel" onSubmit={login}>
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
                  Login
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
          </form>  */}
    </>
  );
}

export default LoginForm;
