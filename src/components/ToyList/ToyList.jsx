import axios from "axios";
import { useEffect, useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';



function ToyList({ toy }) {
  const [available, setAvailable] = useState(true);
  //useState for each .prop(toy.available) to put a body on 
  // it to use toy.id
  const dispatch = useDispatch();

  const availableBtn = (toyId, available) => {
    //setAvailable( !available )
    console.log(toyId, "id in avail function")
    console.log(available, "id in avail function")

    dispatch({
      type: 'UPDATE_TOY',
      payload: {
        toyId: toyId,
        available: available
      }
    })  
      
  }


  const deleteBtn = (toyId) => {
    console.log('delete content')
    dispatch({
      type: 'DELETE',
      payload: toyId
    })
  }




  return(
    <>
    <tr>
      <td>{toy.name}</td>
      <td>{toy.ages}</td>
      <td>{toy.available ? <span> true </span>:<span> false </span>}</td>
      <td><button onClick={() =>{ availableBtn(toy.id, toy.available) }}>Available</button></td>
      <td><button onClick={()=>{ deleteBtn(toy.id) }}>Delete</button></td> 
    </tr>

    </>
  )
}


export default ToyList;


// (
//   <tr key={toy.id}>
// <td>{toy.name}</td>
// <td>{toy.available}</td> 
// <td>{toy.ages}</td>
// </tr>

// <p>toy list page</p>
// <td>{toy.name}</td>
// <td>{toy.available}</td> 
// <td>{toy.ages}</td>