import LinkedInIcon from '@material-ui/icons/LinkedIn';
import PersonIcon from '@material-ui/icons/Person';
import './Video.css';

function Video() {


  const linkedIn = () => {
    window.open("https://www.linkedin.com/in/michael-s-57a181188/", "_blank");
  }
  const personalContact = () => {
    window.open("www.google.com", "_blank");
  }


  return(
    <>
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
      <li onClick={linkedIn}><LinkedInIcon /></li> 
      <li onClick={personalContact}><PersonIcon /></li>
      <li><a href="#"><img src="https://i.ibb.co/x7P24fL/facebook.png"/></a></li>
      <li><a href="#"><img src="https://i.ibb.co/Wnxq2Nq/twitter.png"/></a></li>
    </ul>
    
</section>
</>
)

}

export default Video;
