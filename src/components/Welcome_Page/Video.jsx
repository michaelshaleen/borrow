import LinkedInIcon from '@material-ui/icons/LinkedIn';
<<<<<<< HEAD
import PersonIcon from '@material-ui/icons/Person';
import TwitterIcon from '@material-ui/icons/Twitter';
import './Video.css';
import React from 'react';
import About from '../AboutPage/AboutPage';
import useScrollSnap from 'react-use-scroll-snap';
import RedoIcon from '@material-ui/icons/Redo';

function Video() {
  const scrollRef = React.useRef(null);

  useScrollSnap({ref: scrollRef, duration: 50, delay: 0});


  const linkedIn = () => {
    window.open("https://www.linkedin.com/in/michael-s-57a181188/", "_blank");
  }
  const personalContact = () => {
    window.open("www.google.com", "_blank");
  }
  const twitterPage = () => {
    window.open("https://twitter.com/Michael58173715")
  }


  

=======

function Video() {
>>>>>>> 28d44e0030f5037cbc498b7b94cb2ff7d3dfb754


  return(
    <>
<<<<<<< HEAD
    <div className="container">
        <section className="showcase">  
          <video src={process.env.PUBLIC_URL + '/kids_playing.mp4'} muted loop autoPlay> </video>
          <div className="text">
            <h5>ToiChare</h5>
              {/* <p className="intro">Welcome to ToiChare, please Log in 
              or Register an account to begin using!</p> */}
          </div>
          
          <div>
              <a 
                className="neon"
                href="#login">Get Started!
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                </a>
              <ul className="social"> 
                <li onClick={linkedIn}><LinkedInIcon /></li> 
                {/* link personal website */}
                {/* <li onClick={personalContact}><PersonIcon /></li> */}
                <li onClick={twitterPage}><TwitterIcon /></li>
              </ul>
          </div>
              <i className="arrow-icon">
              <RedoIcon />
              Scroll Down
              </i>
      </section>
        
    </div>
      <section 
        className="about"
        ref={ scrollRef }
        >
          <About />
      </section>
=======
  <section className="showcase">
  
    <video src={process.env.PUBLIC_URL + '/kids_playing.mp4'} muted loop autoPlay> </video>
    {/* <div className="overlay"></div> */}
     <div className="text">
       <h3>Exploring ToiChare</h3>
        <p className="intro">Welcome to ToiChare, please Log in 
        or Register an account to begin using!</p>
        <a href="#login">Get Started!</a>
    </div>

    <ul className="social">
      <li><a href="#"><img src="https://i.ibb.co/x7P24fL/facebook.png"/></a></li>
      <li><a href="#"><img src="https://i.ibb.co/Wnxq2Nq/twitter.png"/></a></li>
      <li><a href="https://www.instagram.com/the_sabertoothwallaby/"><img src="https://i.ibb.co/ySwtH4B/instagram.png"/></a></li>
      {/* <li><a href="https://www.linkedin.com/in/michael-s-57a181188/"> <LinkedInIcon /></a> </li> */}
          {/* <li style={'size: 10px'}><a href="#"><img src={process.env.PUBLIC_URL + '/linkedIn.png'}/></a></li> */}
    </ul>
    
</section>
>>>>>>> 28d44e0030f5037cbc498b7b94cb2ff7d3dfb754
</>
)

}

export default Video;
<<<<<<< HEAD
=======
{/* 
  <div className="toggle">
      <div class="menu">
        <ul>
          <li><a href="#/user">Home</a></li>
          <li><a href="#">News</a></li>
          <li><a href="#">Destination</a></li>
          <li><a href="#">Blog</a></li>
          <li><a href="#/about">Contact</a></li>
        </ul>
      </div>
  </div> */}
>>>>>>> 28d44e0030f5037cbc498b7b94cb2ff7d3dfb754
