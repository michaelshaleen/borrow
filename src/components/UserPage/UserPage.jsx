import React from 'react';
import LogOutButton from '../LogOutButton/LogOutButton';
import {useSelector, useDispatch} from 'react-redux';
import { useEffect, useState} from 'react';
import axios from "axios";
import ToyList from '../ToyList/ToyList';
import Button from '@material-ui/core/Button';
import PersonIcon from '@material-ui/icons/Person';
import Nav from '../Nav/Nav';





function UserPage() {
  const user = useSelector((store) => store.user);
  const toys = useSelector((store) => store.toy);

  console.log(toys.image, "toys in user page")
  const dispatch = useDispatch();

  //const [available, setAvailable] = useState('');

  useEffect(()=>{
    dispatch({
      type: 'FETCH_TOY'
      //payload: user.id
    })
  }, []);

  const fetchToys = () => {
    console.log("fetch toys")
    dispatch({
      type: 'FETCH_TOY'
      //payload: user.id
    })
  }

  


  return (
    <div className="container">
      <h2>Welcome back, {user.username}! </h2>
      <Nav />
      <PersonIcon />
     
      {/* <h3>{user.phone}</h3> */}
      <h4>These are the toys you've shared!</h4>
      {/* <p>Your ID is: {user.id}</p> */}
      <table>
        <thead>
        <tr>
          <th>Description </th>
          <th>Age</th>
          <th>Available</th>
        </tr>
        </thead>
        <tbody>
            { toys.map(toy => {
              return <ToyList key={toy.id} toy={toy}/>              
            })}

        </tbody>
      </table>
      



    </div>
  );
}

export default UserPage;

