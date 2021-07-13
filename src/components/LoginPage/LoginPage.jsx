import React from 'react';
import LoginForm from '../LoginForm/LoginForm';
import { useHistory } from 'react-router-dom';
<<<<<<< HEAD
import './LoginPage.css';
=======
import Nav from '../Nav/Nav';
import ToiChare from '../LandingPage/LandingPage';

>>>>>>> 28d44e0030f5037cbc498b7b94cb2ff7d3dfb754

function LoginPage() {
  const history = useHistory();
  return (
    <>
<<<<<<< HEAD
      <div className="login_background">
        <LoginForm />
        
          {/* <button
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
          </button> */}
      </div>
=======
    <div className="login_background">
      {/* <Nav /> */}
      <LoginForm />

      <center>
        <button
          type="button"
          className="btn btn_asLink"
          onClick={() => {
            history.push('/registration');
          }}
        >
          Register
        </button>
      </center>
    </div>





    
>>>>>>> 28d44e0030f5037cbc498b7b94cb2ff7d3dfb754
    </>
  );
}

export default LoginPage;
