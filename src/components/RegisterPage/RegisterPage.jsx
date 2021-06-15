import React from 'react';

import { useHistory } from 'react-router-dom';
import RegisterForm from '../RegisterForm/RegisterForm';
import Nav from '../Nav/Nav';
import ToiChare from '../LandingPage/LandingPage';


function RegisterPage() {
  const history = useHistory();

  return (
    <div className="container">
      {/* <Nav /> */}
      {/* <ToiChare /> */}
      <RegisterForm />

      <center>
        <button
          type="button"
          className="btn btn_asLink"
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
      </center>
    </div>
  );
}

export default RegisterPage;
