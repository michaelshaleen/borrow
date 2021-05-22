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
import { useDispatch } from 'react-redux';






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
    <div className="nav-container">

    <nav className="nav">
    {/* <div className="nav"> */}
    <div className="text">

    <div className="toggle">
      <div class="menu">
        <ul>
          {/* <li><a href="#/user">Home</a></li> */}
          <li><a href="#/landing" className="link">Welcome Page</a></li>
          <li><a href="#/user" className="link">My Profile</a></li>
          <li><a href="#/about" className="link">About</a></li>
          <li><a href="#/search_toys" className="link">Toys</a></li>
          <li><a href="#/edit" className="link">Edit My Profile</a></li>
          {/* <Route path="/" exact component={Pages}/> */}
          <li
            onClick={() => dispatch({ type: 'LOGOUT' })}><a className="link" exact component={LogOutButton}>Leave</a></li>
          {/* <li><LogOutButton /></li> */}
        </ul>
      </div>
  </div>

    

      </div>
</nav> 
</div>

 
</>
  );
}

export default Nav;








// <div className="nav-container">
// <li><a href="#/landing" className="link">Welcome Page</a></li>
// <li><a href="#/search_toys" className="link">Toys</a></li>
// <li><a href="#/user" className="link">My Profile</a></li>
// <li><a href="#/edit" className="link">Edit My Profile</a></li>
// <li><a href="#/about" className="link">About Us</a></li>
// <li><a 
//       onClick={() => dispatch({ type: 'LOGOUT' })}
//         className="link">Log Out</a></li>

// </div>