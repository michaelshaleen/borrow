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

function RegisterForm() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [phone, setPhone] = useState('');
  const errors = useSelector((store) => store.errors);
  const dispatch = useDispatch();
  const registerUser = (event) => {
    event.preventDefault();

    dispatch({
      type: 'REGISTER',
      payload: {
        username: username,
        password: password,
        phone: phone
      },
    });
  }; // end registerUser

  return (
    <>
        <form className="formPanel" onSubmit={registerUser}>
          <div className="login-box">
            <h4>Register</h4>
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
                    style={{color:'white',
                    fontFamily:'cursive'}}>      
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
              <div>
                <i><PhoneAndroidIcon /></i>
              <label 
                htmlFor="phone"
                style={{color:'white', fontFamily: 'cursive'}}>
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
            </div>
            <input className="btn" type="submit" name="submit" value="Register" />
          </div>
       </form> 
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
*/