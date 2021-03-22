import React from 'react';
import LogOutButton from '../LogOutButton/LogOutButton';
import {useSelector, useDispatch} from 'react-redux';
import { useEffect, useState} from 'react';
import axios from "axios";
import ToyList from '../ToyList/ToyList';
import Button from '@material-ui/core/Button';
import PersonIcon from '@material-ui/icons/Person';





function UserPage() {
  const user = useSelector((store) => store.user);
  const toys = useSelector((store) => store.toy);

  console.log(toys, "toys in user page")
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

  // const availableBtn = (event) => {
  //   console.log(event.target.id, "target id")
  //   // match event.target.id to id in toys list
  //   //for loop
  //   if(available === true){
  //     console.log()
  //     setAvailable(false);
  //   }
  //   if(available == false){
  //     setAvailable(true)
  //   }


  //   return available;
  // }

  // if (toys.length = 0) {
  //    <div> You have posted no toys</div>
  //   }
  //   else{ toys.map}


  function ButtonStyled() {
    const classes = UseStyles();
    return <Button className={classes.root}>Styled Button</Button>
  }


  return (
    <div className="container">
      <h2>Welcome back, {user.username}! </h2>
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

