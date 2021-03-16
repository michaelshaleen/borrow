import React from 'react';
import LogOutButton from '../LogOutButton/LogOutButton';
import {useSelector, useDispatch} from 'react-redux';
import { useEffect } from 'react';


function UserPage() {
  // this component doesn't do much to start, just renders some user reducer info to the DOM
  const user = useSelector((store) => store.user);
  const toys = useSelector((store) => store.toy);
  console.log(toys, "toys in user page")
  console.log(user, "user in user page")
  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch({
      type: 'FETCH_TOY'
      //payload: user.id
    })
  }, []);

  // const grabToys = () => {
  //   console.log('grab toys')
  //   dispatch({
  //     type: 'FETCH_TOY'
  //   })
  // }


  return (
    <div className="container">
      <h2>Welcome, {user.username}!</h2>
      <p>Your ID is: {user.id}</p>
      {/* <button onClick={grabToys}>Grab data</button> */}
      <table>
        <tr>
          <th>Description</th>
          <th>Available</th>
          <th>Age</th>
        </tr>
        <tr>
          <td>{toys.name}</td>
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
