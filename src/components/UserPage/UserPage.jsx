import React from 'react';
import LogOutButton from '../LogOutButton/LogOutButton';
import {useSelector} from 'react-redux';
import { HashRouter as Router, Route, Link } from 'react-router-dom';

function UserPage() {
  // this component doesn't do much to start, just renders some user reducer info to the DOM
  const user = useSelector((store) => store.user);
  return (
    <div className="container">
      <nav>
        <Link>Search New Toy</Link>
        <Link>Share New Toy</Link>
        
      </nav>
      <h2>Welcome, {user.username}!</h2>
      <p>Your ID is: {user.id}</p>
      {/* <LogOutButton className="btn" /> */}
      <table>
        <thead>
          Toys I've Shared
        </thead>
          <tr>
            <th>Name</th>
            <th>Age Group</th>
          </tr>
          <tr>
            <td>BasketBall</td>
            <td>5-10</td>
            <td> <button onClick={()=>alert('deleted')}>Delete</button></td>
          </tr>
       </table>
    </div>
  );
}

// this allows us to use <App /> in index.js
export default UserPage;
