import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import './LandingPage.css';

// CUSTOM COMPONENTS
import RegisterForm from '../RegisterForm/RegisterForm';

function LandingPage() {
  const [heading, setHeading] = useState('Welcome To ToiChare');
  const history = useHistory();

  const onLogin = (event) => {
    history.push('/login');
  };

  return (
    <div className="container">
      <h2>{heading}</h2>

      <div className="grid">
        <div className="grid-col grid-col_8">
          <p>
          Since it's inception in 2021, TOICHARE HAS HELPED CHILDREN AND PARENTS
           CONNECT WITH NEIGHBORS IN AN EFFECTIVE WAY TO SHARE TOYS THAT OTHERWISE 
           WOULD GO UNUSED OR MISPLACED.
          </p>

          <p>
              Please Register or Login to start using our application! 
              Once logged in you'll notice your profile page will have options 
              to search or add new toys that others may borrow from you!
          </p>
        </div>
        <div className="grid-col grid-col_4">
          <RegisterForm />

          {/* <center> */}
            <h4>Already a Member?</h4>
            <button className="btn btn_sizeSm" onClick={onLogin}>
              Login
            </button>
          {/* </center> */}
        </div>
      </div>

      

    </div>
  );
}

export default LandingPage;
