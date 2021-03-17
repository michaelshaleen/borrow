import axios from "axios";
import { useEffect, useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';



function ToyList({ toy }) {
  const [available, setAvailable] = useState(true);
  const dispatch = useDispatch();

  const availableBtn = (toyId) => {
    //setAvailable( !available )
    console.log(toyId, "id in avail function")
    dispatch({
      type: 'UPDATE_TOY',
      payload: 
        toyId,
        //available
    })    


    // console.log(toyId, "target id")
    // setAvailable(toy.available)
    // console.log(available, "available val")
    // // match event.target.id to id in toys list
    // //for loop
    // if(available === true){
    //   setAvailable(false);
    // }
    // if(available == false){
    //   setAvailable(true)
    // }


    //return available;
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

  return(
    <>
    <tr>
      <td>{toy.name}</td>
      <td>{toy.ages}</td>
      {/* <td>{toy.available}</td> */}
      <td><button onClick={() =>{ availableBtn(toy.id) }}>Available</button></td>
      <td><button onClick={()=>{ deleteBtn(toy.id) }}>Delete</button></td> 
    </tr>

    {/* id={toy.id} */}
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