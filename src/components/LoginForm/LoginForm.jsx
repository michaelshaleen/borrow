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
<<<<<<< HEAD
import { useHistory } from 'react-router-dom';


=======
import ReactPlayer from 'react-player';
>>>>>>> 28d44e0030f5037cbc498b7b94cb2ff7d3dfb754

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
<<<<<<< HEAD
    <section className="login-section">
      <div className="box">
        <div className="form">
          <h2>Login</h2>
          {errors.loginMessage && (
                  <h3 className="alert" role="alert">
                    {errors.loginMessage}
                  </h3>
                )}
          <form onSubmit={login}>
            <div className="input-box">
            <i><AccountCircleIcon /></i>
              <input 
                value={username}
                required
                type="text" 
                placeholder="Username"
                onChange={(event) => setUsername(event.target.value)}>
              </input>
            </div>
            <div className="input-box">
            <i><EnhancedEncryptionIcon /></i>
              <input 
                value={password}
                required
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
            <div className="input-box">
            <button 
              className="register-btn-submit"
              type="submit" 
              name="submit"
            >
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            Submit
            </button>
            </div>
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
=======


    <body className="landing">

<div class="text">
  
    </div>
    </body>
    
    <form className="formPanel" onSubmit={login}>
      <h2 style={{color:'white', fontFamily:'cursive'}}>
        Login
      </h2>
      {errors.loginMessage && (
        <h3 className="alert" role="alert">
          {errors.loginMessage}
        </h3>
      )}
      <div>
        <label htmlFor="username"
        style={{color:'white', fontFamily: 'cursive'}}>
          Username:
          <input
            type="text"
            name="username"
            required
            value={username}
            onChange={(event) => setUsername(event.target.value)}
          />
        </label>
      </div>
      <div>
        <label htmlFor="password"
        style={{color:'white', fontFamily:'cursive'}}>
          Password:
          <input
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
    </form> 







>>>>>>> 28d44e0030f5037cbc498b7b94cb2ff7d3dfb754
    </>
  );
}

export default LoginForm;
