import React from 'react';
import Nav from '../Nav/Nav';
import ToiChare from '../LandingPage/LandingPage';


// This is one of our simplest components
// It doesn't have local state,
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is'

function AboutPage() {
  return (
    <div className="container">
      <ToiChare />
      <div>
        <p>If you have any questions or need assistance
          please use the following contact methods
        </p>
        <div>Email: toi_admin@gmail.com</div>
        <div>Phone: 801-010-8010</div>
      </div>
      <p><h3>Our History</h3>
      From our family to yours. Started as a father's passion project, ToiChare
      has been able to connect communities through the act of sharing. As we tell our kids, sharing is 
      caring, so let's be role models for this common phrase. Lets cut down on needless spending. Let's increase
      community communication, and hopefully step on a few less toys around our homes. </p>
      <h3>Our Future</h3>
      <p>Our next focus is to include our beloved pet owners in ToiChare! With options to use features for pets,
        children, or both we will be able to help more people and do our part in making the planet
        a more enjoyable place!
      </p>
    </div>
  );
}

export default AboutPage;
