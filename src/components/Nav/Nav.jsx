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


function Nav() {
  const user = useSelector((store) => store.user);

  let loginLinkData = {
    path: '/login',
    text: 'Login / Register',
  };

  if (user.id != null) {
    loginLinkData.path = '/user';
    loginLinkData.text = 'Home';
  }

  return (
    <div className="nav">



      <Link to="/home">
        <h2 className="nav-title">ToiChare</h2>< HomeIcon color="primary"/>
      </Link>
      <div>
        <Link className="navLink" to={loginLinkData.path}>
          {loginLinkData.text}
        </Link>

        {user.id && (
          <>
            <Link className="navLink" to="/search_toys">
              Search New Toy<SearchIcon />

            </Link>
            <Link className="navLink" to="/share_toys">
              Share New Toy<ShareIcon />
            </Link>
            <LogOutButton className="navLink" />
          </>
        )}

        <Link className="navLink" to="/about">
          About
        <InfoIcon 
          />
        </Link>
      </div>
    </div>
  );
}

export default Nav;





{/* <AppBar position="static">
  <Toolbar />
   <Typography>Home</Typography>
   <Tabs>
     <Tab label="Home here"/>
   </Tabs>

    <Tabs>
     <Tab label="Search Toys"/>
   </Tabs>

   <Toolbar />
</AppBar>

<TabPanel >
  Item One
</TabPanel>
<TabPanel>
  Item Two
</TabPanel>
<TabPanel>
  Item Three
</TabPanel> */}