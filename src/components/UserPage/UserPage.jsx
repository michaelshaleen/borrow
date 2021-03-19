import React from 'react';
import LogOutButton from '../LogOutButton/LogOutButton';
import {useSelector, useDispatch} from 'react-redux';
import { useEffect, useState} from 'react';
import axios from "axios";
import ToyList from '../ToyList/ToyList';



function UserPage() {
  const user = useSelector((store) => store.user);
  const toys = useSelector((store) => store.toy);
  const sharkKid = require('../pictures/sharkKid.jpg');

  //console.log(toys, "toys in user page")
  //console.log(user, "user in user page")
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

  const availableBtn = (event) => {
    console.log(event.target.id, "target id")
    // match event.target.id to id in toys list
    //for loop
    if(available === true){
      console.log()
      setAvailable(false);
    }
    if(available == false){
      setAvailable(true)
    }


    return available;
  }



  return (
    <div className="container">
      <h2>Welcome back, {user.username}!</h2>
      {/* <h3>{user.phone}</h3> */}
      <h4>These are the toys you've shared!</h4>
      {/* <p>Your ID is: {user.id}</p> */}
      <table>
        <thead>
        <tr>
          <th>Description </th>
          <th> Age</th>
          <th> Available</th>
        </tr>
        </thead>
        <tbody>
            { toys.map(toy => {
              return <ToyList key={toy.id} toy={toy}/>              
            })}

        </tbody>
      </table>
      
      {/* <svg aria-hidden="true" 
      focusable="false" role="presentation" 
      className="icon icon-hamburger"
      viewBox="0 0 64 64" >
        <circle cx="50" cy="50" r="40" stroke="green" stroke-width="4" fill="yellow" />
        </svg> */}
      {/* <img src={sharkKid}/> */}



    </div>
  );
}

// this allows us to use <App /> in index.js
export default UserPage;

