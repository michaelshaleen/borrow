import React from 'react';
import LogOutButton from '../LogOutButton/LogOutButton';
import './Nav.css';
import {useSelector} from 'react-redux';
import HomeIcon from '@material-ui/icons/Home';
import Tab from '@material-ui/core/Tab';
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
      <div className="text-nav">
            <ul>
                <li><a href="#/landing">Welcome Page</a></li>
                <li><a href="#/user">My Profile</a></li>
                <li><a href="#/about">About</a></li>
                <li><a href="#/search_toys">Toys</a></li>
                <li><a href="#/edit">Edit My Profile</a></li>
                <li><a href="#">Our Team</a></li>
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
  );
}

export default Nav;
