import LinkedInIcon from '@material-ui/icons/LinkedIn';
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
  
  const personalContact = () => {
    window.open("www.google.com", "_blank");
  }
 

  return(
    <>
    <div className="container">
        <section className="showcase">  
          <video src={process.env.PUBLIC_URL + '/kids_playing.mp4'} muted loop autoPlay> </video>
          <div>
              <a 
                className="neon"
                href="#login">Get Started!
                <span></span>
                <span></span> 
                <span></span>
                <span></span>
                </a>
          </div>
              <i className="arrow-icon">
              <RedoIcon />
              Scroll Down 
              </i>
      </section>
    </div>
    <section 
      className="about"
      ref={ scrollRef }>
        <About />
    </section>
</>
)
}

export default Video;
