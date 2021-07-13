import React from 'react';
import LoginForm from '../LoginForm/LoginForm';
import { useHistory } from 'react-router-dom';
import './LoginPage.css';

function LoginPage() {
  const history = useHistory();
  return (
    <>
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
    </>
  );
}

export default LoginPage;
