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
   


    
    <div className="nav">
      
    <Link to="/home">
      {/* <h2 className="nav-title">ToiChare</h2> */}
    </Link>


  
        <Link className="navLink" to={loginLinkData.path}>
          {loginLinkData.text}
        </Link>
        
        <Link className="navLink" to="/about">
          <Tab variant="fullWidth" label="About" icon={<InfoIcon />}/>
        </Link>
        {/* <Link className="navLink" to="/landing">
          <Tab variant="fullWidth" label="Landing" icon={<HomeIcon />}/>
        </Link> */}

      {user.id && (
        <>
            <Link className="navLink" to="/search_toys">
              <Tab variant="fullWidth" label="Search Toys" icon={<SearchIcon />} />
            </Link>

            <Link className="navLink" to="/share_toys">
              <Tab variant="fullWidth" label="Share Toys" icon={<ShareIcon />}/>     
            </Link>

            <LogOutButton
            className="navLink" />
          </>
        )}
  

</div>



  );
}

export default Nav;


