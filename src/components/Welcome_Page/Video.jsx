function Video() {


  return(
    <>


  <section className="showcase">
  <header>
    {/* <h2 className="logo">Travel</h2> */}
    <div className="toggle"></div>
  </header>
  <video src={process.env.PUBLIC_URL + '/kids_playing.mp4'} muted loop autoPlay> </video>
  <div className="overlay"></div>
  <div className="text">
    <h2> </h2> 
    <h3>Exploring ToiChare</h3>
    <p >Welcome to ToiChare, please Log in 
    or Register an account to begin using!</p>
    <a href="#login">Get Started!</a>
  </div>
  <ul className="social">
    <li><a href="#"><img src="https://i.ibb.co/x7P24fL/facebook.png"/></a></li>
    <li><a href="#"><img src="https://i.ibb.co/Wnxq2Nq/twitter.png"/></a></li>
    <li><a href="#"><img src="https://i.ibb.co/ySwtH4B/instagram.png"/></a></li>
    <li><a href="#"><img src="https://i.ibb.co/ySwtH4B/instagram.png"/></a></li>

  </ul>
</section>
<div class="menu">
  <ul>
    <li><a href="#">Home</a></li>
    <li><a href="#">News</a></li>
    <li><a href="#">Destination</a></li>
    <li><a href="#">Blog</a></li>
    <li><a href="#">Contact</a></li>
  </ul>
</div>


</>


)

}

export default Video;