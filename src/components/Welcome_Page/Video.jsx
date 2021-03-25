import LinkedInIcon from '@material-ui/icons/LinkedIn';

function Video() {


  return(
    <>
  <section className="showcase">
  <header>
    {/* <h2 className="logo">Travel</h2> */}
  </header>
  <video src={process.env.PUBLIC_URL + '/kids_playing.mp4'} muted loop autoPlay> </video>
  <div className="overlay"></div>
  <div className="text">


    <h2> </h2> 


  {/* <div className="toggle">
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



    <h3>Exploring ToiChare</h3>
    <p className="p">Welcome to ToiChare, please Log in 
    or Register an account to begin using!</p>
    <a href="#login">Get Started!</a>
  </div>
  <ul className="social">
    <li><a href="#"><img src="https://i.ibb.co/x7P24fL/facebook.png"/></a></li>
    <li><a href="#"><img src="https://i.ibb.co/Wnxq2Nq/twitter.png"/></a></li>
    <li><a href="https://www.instagram.com/the_sabertoothwallaby/"><img src="https://i.ibb.co/ySwtH4B/instagram.png"/></a></li>
    <li><a href="https://www.linkedin.com/in/michael-s-57a181188/"> <LinkedInIcon /></a> </li>
        {/* <li style={'size: 10px'}><a href="#"><img src={process.env.PUBLIC_URL + '/linkedIn.png'}/></a></li> */}


  </ul>
</section>



</>


)

}

export default Video;