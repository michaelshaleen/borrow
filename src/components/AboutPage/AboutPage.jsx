import React from 'react';
import Nav from '../Nav/Nav';
import ToiChare from '../LandingPage/LandingPage';
import LogOutButton from '../LogOutButton/LogOutButton';
import './About.css';
import pic from '../pictures/sharkKid.jpg';
import alphabet from '../pictures/alphabet.jpg';


function AboutPage() {
  return (
    <>
      
    <div className="container aboutInfo">
      <p>
        <h3>Our History</h3>
        From our family to yours. Started as a father's passion project, ToiChare
        has been able to connect communities through the act of sharing. As we tell our kids, sharing is 
        caring, so let's practice what we preach. Lets cut down on needless spending, Let's empower
        community relationships, and hopefully step on a few less toys around our homes. 
      </p>
      <h3>Our Future</h3>
      <p>
        Our next focus is to include our beloved pet owners in ToiChare! With options to use features for pets,
        children, or both we will be able to help more people and do our part in making the planet
        a more enjoyable place!
        (Scroll for our Gallery)
      </p>
      <div >
          <p>If you have any questions or need assistance
            please use the following contact methods
          </p>
          <div>
            <p>Email: toi_admin@gmail.com</p>
            <p>Phone: 801-010-8010</p>
          </div>
      </div>
      <div className="outer-wrapper">
        <div className="wrapper">
          <div className="slide one">
              <div className="userBody">
                  <div className="container">
                     {/* <img src={pic} />
                      <div className="slide two">
                        <p>Hello</p>
                      </div> */}
                  </div>
              </div>
          </div>
        </div>
      </div>
      
    </div>
  </>);
}

export default AboutPage;
