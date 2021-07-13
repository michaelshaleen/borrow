import React from 'react';
import Nav from '../Nav/Nav';
import ToiChare from '../LandingPage/LandingPage';
import LogOutButton from '../LogOutButton/LogOutButton';
<<<<<<< HEAD
import './About.css';
import pic from '../pictures/sharkKid.jpg';
import alphabet from '../pictures/alphabet.jpg';
import useScrollSnap from 'react-use-scroll-snap';
import RedoIcon from '@material-ui/icons/Redo';
=======
>>>>>>> 28d44e0030f5037cbc498b7b94cb2ff7d3dfb754


function AboutPage() {
  const scrollRef = React.useRef(null);
  useScrollSnap({ref: scrollRef, duration: 50, delay: 0});


  return (
<<<<<<< HEAD
    <>
      
    <div className="about-container">
      <section className="history">
          <h1><u>Our History</u></h1>
        <p>
          From our family to yours. Started as a father's passion project, ToiChare
          has been able to connect communities through the act of sharing. As we tell our kids, sharing is 
          caring, so let's practice what we preach. Lets cut down on needless spending, Let's empower
          community relationships, and hopefully step on a few less toys around our homes. 
=======
    <div className="container">
      {/* <ToiChare /> */}
      <Nav />
      <div>
        <p>If you have any questions or need assistance
          please use the following contact methods
>>>>>>> 28d44e0030f5037cbc498b7b94cb2ff7d3dfb754
        </p>
      </section>
      <section className="future">
          <p>
          <h3><u>Our Future</u></h3>
            Our next focus is to include our beloved pet owners in ToiChare! With options to use features for pets,
            children, or both we will be able to help more people and do our part in making the planet
            a more enjoyable place!
            (Scroll for our Gallery)
          </p>
      </section>
      <section 
        className="contact"
        ref={scrollRef}>
      <div >
        <h1><u>Contact</u></h1>
          <p>If you have any questions or need assistance
            please use the following contact methods
          </p>
        
          <div>
            <p>Email: toi_admin@gmail.com</p>
            <p>Phone: 801-010-8010</p>
          </div>
      </div>
      </section>
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
<<<<<<< HEAD
      
=======
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


      <footer><LogOutButton /> </footer>

>>>>>>> 28d44e0030f5037cbc498b7b94cb2ff7d3dfb754
    </div>
  </>);
}

export default AboutPage;
