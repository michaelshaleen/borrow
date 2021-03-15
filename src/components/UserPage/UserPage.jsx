import React from 'react';
import LogOutButton from '../LogOutButton/LogOutButton';
import {useSelector, useDispatch} from 'react-redux';
import { useEffect } from 'react';


function UserPage() {
  // this component doesn't do much to start, just renders some user reducer info to the DOM
  const user = useSelector((store) => store.user);
  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch({
      type: 'FETCH_TOYS'
    })
  }, []);

  
  return (
    <div className="container">
      <h2>Welcome, {user.username}!</h2>
      <p>Your ID is: {user.id}</p>
      <table>
        <tr>
          <th>Description</th>
          <th>Available</th>
          <th>Age</th>
        </tr>
        <tr>
          <td>BasketBall</td>
          <td>Yes</td>
          <td><button>Delete</button></td>
        </tr>
        <tr>
          <td>Ice Skates</td>
          <td>No</td>
          <td><button>Delete</button></td>
        </tr>
      </table>
      <LogOutButton className="btn" />
    </div>
  );
}

// this allows us to use <App /> in index.js
export default UserPage;
