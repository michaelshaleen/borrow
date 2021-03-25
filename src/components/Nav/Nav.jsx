import React from 'react';
import { Link } from 'react-router-dom';
import LogOutButton from '../LogOutButton/LogOutButton';
import './Nav.css';
import {useSelector} from 'react-redux';
import d from '@material-ui/icons/Home';
import InfoIcon from '@material-ui/icons/Info';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import HomeIcon from '@material-ui/icons/Home';
import SearchIcon from '@material-ui/icons/Search';
import ShareIcon from '@material-ui/icons/Share';
import {AppBar, Typography, Toolbar} from '@material-ui/core'
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Box from '@material-ui/core/Box';
import { height } from '@material-ui/system';
import MenuIcon from '@material-ui/icons/Menu';





function Nav() {
  const user = useSelector((store) => store.user);

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
    <nav className="nav">

      <div><Link className="navLink" to="/about" icon={<InfoIcon />}>
              <Tab variant="fullWidth" label="About" icon={<InfoIcon />}/>
            </Link> </div>
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

      </div>
    </nav> 

{/*  
    <div className="nav">
    <div className="overlay"></div>
    <div className="text">

  <div className="toggle">
      <div class="menu">
        <ul>
          <li>Hello</li>
          <li>
            <Link className="navLink" to="/about" icon={<InfoIcon />}>
              <Tab variant="fullWidth" label="About" icon={<InfoIcon />}/>
            </Link>
          </li>
          <li> 
            <Link className="navLink" 
              to={loginLinkData.path}>
              {loginLinkData.text}
            </Link>
          </li>
          <li>
            {user.id && (
              <>
              <Link className="navLink" to="/search_toys">
                <Tab variant="fullWidth" label="Search Toys" icon={<SearchIcon />} />
              </Link>
          <li>
            <Link className="navLink" to="/share_toys">
              <Tab variant="fullWidth" label="Share Toys" icon={<ShareIcon />}/>     
            </Link>
            </li>
            <li>
              <LogOutButton
              className="navLink" />
            </li>
          </>
        )} </li>
        </ul>
      </div>
  </div>

  </div> */}

        
       
        {/* <Link className="navLink" to="/landing">
          <Tab variant="fullWidth" label="Landing" icon={<HomeIcon />}/>
        </Link> */}

{/* </div>   */}

</>
  );
}

export default Nav;


