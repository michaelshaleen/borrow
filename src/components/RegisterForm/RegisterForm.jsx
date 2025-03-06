import './RegisterForm.css';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
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
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import EnhancedEncryptionIcon from '@material-ui/icons/EnhancedEncryption';
import PhoneAndroidIcon from '@material-ui/icons/PhoneAndroid';
import { useHistory } from 'react-router-dom';

function RegisterForm() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [phone, setPhone] = useState('');
  const dispatch = useDispatch();
  const history = useHistory();
  const errors = useSelector((store) => store.errors);

  const registerUser = (event) => {
    console.log("here")
    event.preventDefault();
    dispatch({
      type: 'REGISTER',
      payload: {
        username: username,
        password: password,
        phone: phone
      },
    });
  };

  return (
    <>
        <section className="login-section">
        <div className="box">
        <div className="form">

        <form className="formPanel" onSubmit={registerUser}>
          <div className="login-box">
            <h2>Register</h2>
            {errors.loginMessage && (
              <h3 className="alert" role="alert">
                {errors.loginMessage}
              </h3>
            )}
            <div className="input-box">
              <i><AccountCircleIcon /></i>
                <input
                  value={username}
                  type="text"
                  placeholder="Username"
                  required
                  onChange={(event) => setUsername(event.target.value)}
                >
              </input>
            </div>
            <div className="input-box">
              <i><EnhancedEncryptionIcon /></i>
                  <input
                    value={password}
                    type="password"
                    id="myInput"
                    placeholder="Password"
                    required
                    onChange={(event) => setPassword(event.target.value)}
                    >
              </input>
              <div className="input-box">
                <i><PhoneAndroidIcon /></i>
                <input
                    placeholder="867-5309"
                    type="tel"
                    value={phone}
                    required
                    onChange={(event) => setPhone(event.target.value)}
                  >
                </input>
              </div>
            </div>
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
            {/* </form> */}

                <button
              type="button"
              className="register-btn"
              onClick={() => {
                history.push('/login');
              }}
            >
              Login
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </button>
              </div>
        </form> 
      </div>
      </div>
    </section>
    </>
    );
  }
  
  export default RegisterForm;


    // <form className="formPanel" onSubmit={registerUser}>
    //   <h2 style={{color:'white'}}>Register User</h2>
    //   {errors.registrationMessage && (
    //     <h3 className="alert" role="alert">
    //       {errors.registrationMessage}
    //     </h3>
    //   )}
    //    <div className="textbox">
    //     <label htmlFor="username"
    //     style={{color:'white', fontFamily: 'cursive'}}>
    //       Username:
    //       <TextField
    //         label="GreatParent1000"
    //         type="text"
    //         name="username"
    //         value={username}
    //         required
    //         onChange={(event) => setUsername(event.target.value)}
    //       />
    //     </label>
    //   </div>
    //   <div className="textbox">
    //     <label htmlFor="password"
    //     style={{color:'white', fontFamily: 'cursive'}}>
    //       Password:
    //       <TextField
    //         label="Something Unique!"
    //         type="password"
    //         name="password"
    //         value={password}
    //         required
    //         onChange={(event) => setPassword(event.target.value)}
    //       />
    //     </label>
    //   </div>
    //   <div>
    //     <label htmlFor="phone"
    //     style={{color:'white', fontFamily: 'cursive'}}>
    //       Phone Number:
    //       <TextField
    //         label="867-5309"
    //         type="tel"
    //         name="phone"
    //         value={phone}
    //         required
    //         onChange={(event) => setPhone(event.target.value)}
    //       />
    //     </label>
    //   </div>
    //   <div>
    //     <input className="btn" type="submit" name="submit" value="Register" />
    //   </div>
    // </form>



/*
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
      <div className="textbox">
      <i className="fas fa-lock"></i>
      <label htmlFor="password"
        style={{color:'white', fontFamily:'cursive'}}>
          
          <TextField
          label="Password"
      <div>
        <label htmlFor="password"
        style={{color:'white', fontFamily: 'cursive'}}>
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
      <input className="btn" type="submit" name="submit" value="Log In" />
    </div>
</form> 
*/
