import React from 'react';
import LoginForm from '../LoginForm/LoginForm';
import { useHistory } from 'react-router-dom';
import Nav from '../Nav/Nav';
import ToiChare from '../LandingPage/LandingPage';


function LoginPage() {
  const history = useHistory();

  return (
    <>
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





    
    </>
  );
}

export default LoginPage;
