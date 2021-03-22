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



{/* 
<AppBar position="static">
  <Toolbar />

   <Tabs variant="fullWidth" >
      <Link to="/home">
      <h2 className="nav-title">ToiChare</h2>< HomeIcon color="primary"/>
        <Tab label="Home here" icon={<HomeIcon />}/>
    </Link>


     <Link className="navLink" to="/search_toys">
       <Tab label="Search Toys" icon={<SearchIcon />} />
    </Link>


    <Link className="navLink" to="/share_toys">
     <Tab label="Share Toys" icon={<ShareIcon />}/>
      </Link>
      <Link className="navLink" to="/about">
     <Tab label="About" icon={<InfoIcon />}/>
     
  </Link>
     <Tab label="LogOut" icon={<ExitToAppIcon/> }/>
   </Tabs>
   <Toolbar />
</AppBar> */}



<Link to="/home">
 {/* <h2 className="nav-title">ToiChare</h2> */}
<Tab label="Home here" icon={<HomeIcon />}/>

</Link>
<div>
<Link className="navLink" to={loginLinkData.path}>
{loginLinkData.text}
</Link>

{user.id && (
  <>

  <Link className="navLink" to="/search_toys">
    <Tab label="Search Toys" icon={<SearchIcon />} />
  </Link>

  <Link className="navLink" to="/share_toys">
     <Tab label="Share Toys" icon={<ShareIcon />}/>
  </Link>

  <LogOutButton
  className="navLink" />
  </>
  )}
  
  <Link className="navLink" to="/about">
     <Tab label="About" icon={<InfoIcon />}/>
  </Link>
</div> 





    </div>
  );
}

export default Nav;


