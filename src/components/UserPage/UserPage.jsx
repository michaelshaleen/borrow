import React from 'react';
import LogOutButton from '../LogOutButton/LogOutButton';
import {useSelector, useDispatch} from 'react-redux';
import { useEffect } from 'react';
import axios from "axios";



function UserPage() {
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

  const deleteBtn = (toyId) => {
    console.log('delete content')
    axios.delete(`/api/toy/${toyId}`)
    .then((res) => {
      console.log("successful delete",res);
      
    })
    .catch(err => {
      console.log(err, "delete toy error")
    })
  }

    // dispatch({
    //   type: 'DELETE',
    //   payload: toyId
 


  return (
    <div className="container">
      <h2>Welcome, {user.username}!</h2>
      <h4>These are the toys you've shared!</h4>
      {/* <p>Your ID is: {user.id}</p> */}
      {/* <button onClick={grabToys}>Grab data</button> */}
      {/* <table> */}
       
        {/* <tr>
          <td>{toys.name}</td>
          <td>Yes</td>
          <td>5-10</td>
          <td><button onClick={deleteBtn}>Delete</button></td>
        </tr>
        <tr>
          <td>Ice Skates</td>
          <td>No</td>
          <td>5-10</td>
          <td><button onClick={deleteBtn}>Delete</button></td>
        </tr>
      </table> */}


      <table>
          <tr>
          <th>Description</th>
          <th> Available </th>
          <th> Age</th>
        </tr>
        {toys.map((toy)=>{
          return(
            <tr key={toy.id}>
          <td>{toy.name}</td>
          <td>{toy.available}</td> 
          <td>{toy.ages}</td>
          
          <button onClick={()=>{ deleteBtn(toy.id) }}>Delete</button></tr>
            )
        })}
      </table>
      <LogOutButton className="btn" />
    </div>
  );
}

// this allows us to use <App /> in index.js
export default UserPage;
