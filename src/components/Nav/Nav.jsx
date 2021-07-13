import React from 'react';
import LogOutButton from '../LogOutButton/LogOutButton';
import './Nav.css';
import {useSelector} from 'react-redux';
import HomeIcon from '@material-ui/icons/Home';
import Tab from '@material-ui/core/Tab';
<<<<<<< HEAD
import { useDispatch } from 'react-redux';
=======
import Box from '@material-ui/core/Box';
import { height } from '@material-ui/system';
import MenuIcon from '@material-ui/icons/Menu';



>>>>>>> 28d44e0030f5037cbc498b7b94cb2ff7d3dfb754


function Nav() {
  const user = useSelector((store) => store.user);
  const dispatch = useDispatch();
  let loginLinkData = {
    path: '/login',
    text: 'Login / Register',
  };

  if (user.id != null) {
    loginLinkData.path = '/user';
    loginLinkData.text =<Tab variant="fullWidth" label="Home" icon={<HomeIcon />}/>
    ;
  }

  return (
    <>
<<<<<<< HEAD
      <div className="text-nav">
            <ul>
                <li><a href="#/landing">Welcome Page</a></li>
                <li><a href="#/user">My Profile</a></li>
                <li><a href="#/search_toys">Toys</a></li>
                <li><a href="#/edit">Edit My Profile</a></li>
                <li
                  onClick={() => 
                  dispatch({ type: 'LOGOUT' })}>
                    <a exact component={LogOutButton}>
                      Leave
                    </a>
                </li>
            </ul>
      </div>
    </>
=======
    <div>

    <nav className="nav">
    {/* <div className="nav"> */}
    <div className="text">

    <div className="toggle">
      <div class="menu">
        <ul>
          {/* <li><a href="#/user">Home</a></li> */}
          <li><a href="#/landing">Welcome Page</a></li>
          <li><a href="#/user">My Profile</a></li>
          <li><a href="#/search_toys">Search</a></li>
          <li><a href="#/share_toys">Share</a></li>
          <li><a href="#/about">About</a></li>
          {/* <li><a href="#">Logout</a></li> */}
          {/* <li><LogOutButton /></li> */}
        </ul>
      </div>
  </div>

      {/* <div></div>
      <div><Link className="navLink" 
              to={loginLinkData.path}>
              {loginLinkData.text}
            </Link>
      </div>
      <div>
      {user.id && (
              <div className="nav">
              <div>
              <Link className="navLink" to="/search_toys">
                <Tab variant="fullWidth" label="Search Toys" icon={<SearchIcon />} />
              </Link>
              </div>
              <div>
            <Link className="navLink" to="/share_toys">
              <Tab variant="fullWidth" label="Share Toys" icon={<ShareIcon />}/>     
            </Link>
              </div>
              <div>
              <LogOutButton
              className="navLink" />
              </div>
            </div>
          
        )}
      </div>
      <div>
</div> */}

      </div>
</nav> 
</div>

 
</>
>>>>>>> 28d44e0030f5037cbc498b7b94cb2ff7d3dfb754
  );
}

export default Nav;
