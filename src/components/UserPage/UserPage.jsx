import React from 'react';
import LogOutButton from '../LogOutButton/LogOutButton';
import {useSelector, useDispatch} from 'react-redux';
import { useEffect, useState} from 'react';
import axios from "axios";
import ToyList from '../ToyList/ToyList';



function UserPage() {
  const user = useSelector((store) => store.user);
  const toys = useSelector((store) => store.toy);
  //console.log(toys, "toys in user page")
  //console.log(user, "user in user page")
  const dispatch = useDispatch();

  const [available, setAvailable] = useState('');

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

  const deleteBtn = (toyId) => {
    console.log('delete content')
    axios.delete(`/api/toy/${toyId}`)
    .then((res) => {
      console.log("successful delete",res);
      fetchToys();
      
    })
    .catch(err => {
      console.log(err, "delete toy error")
    })
  }

  const availableBtn = (event) => {
    console.log(event.target.id, "target id")
    // match event.target.id to id in toys list
    //for loop
    if(available === true){
      console.log()
      //available = 'false',
      setAvailable(false);
    }
    if(available == false){
      setAvailable(true)
    }


    return available;
  }



  return (
    <div className="container">
      <h2>Welcome, {user.username}!</h2>
      <h4>These are the toys you've shared!</h4>
      {/* <p>Your ID is: {user.id}</p> */}
      <table>
          <tr>
          <th>Description</th>
          <th> Age</th>
          <th> Available </th>
        </tr>
        <tbody>
          <tr>
            {toys.map(toy => {
              return <ToyList key={toy.id} toy={toy}/>              
            })}
            </tr>
        </tbody>
      </table>
      {/* <LogOutButton className="btn" /> */}
    </div>
  );
}

// this allows us to use <App /> in index.js
export default UserPage;


// <tr key={toy.id}>
// <td>{toy.name}</td>
// <td>{toy.ages}</td>
// {/* <td>{toy.available}</td>  */}
// <td><button id={toy.id} onClick={availableBtn}>Available</button></td>

// <button onClick={()=>{ deleteBtn(toy.id) }}>Delete</button>
// </tr>
