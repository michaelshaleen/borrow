import React from 'react';
import LogOutButton from '../LogOutButton/LogOutButton';
import {useSelector, useDispatch} from 'react-redux';
import { useEffect, useState} from 'react';
import axios from "axios";
import ToyList from '../ToyList/ToyList';
import Button from '@material-ui/core/Button';
import PersonIcon from '@material-ui/icons/Person';
import Nav from '../Nav/Nav';
import ToiChare from '../LandingPage/LandingPage';





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
    <>
    <div>
      <ToiChare />
    </div>
    <div>
      <Nav />
    </div>
    <div className="userBody">
    <div className="container">
      <h2>Welcome back, {user.username}! </h2>
      <PersonIcon />
      <div className="overlay"></div>
        <div className="text">


      <div className="_toggle">
      <div class="menu">
        <ul>
          <li><a href="#/user">Home</a></li>
          <li><a href="#">News</a></li>
          <li><a href="#">Destination</a></li>
          <li><a href="#">Blog</a></li>
          <li><a href="#/about">Contact</a></li>
        </ul>
      </div>
  </div>
  </div>
     
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

      <LogOutButton />
    </div>

    </>
  );
}

export default UserPage;

