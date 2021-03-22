import axios from "axios";
import { useEffect, useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';
import Checkbox from '@material-ui/icons/CheckBox';

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
    swal("Are you sure you want to delete?", {
  buttons: {
    cancel: "Nahhhh",
    delete: true,
  },
})
.then((value) => {
  switch (value) {
 
    case "delete":
      swal("okay, I guess children shouldn't be happy");
      console.log('delete content')
      dispatch({
        type: 'DELETE',
        payload: toyId
      })
      break;
    default:
      swal("okay, cool...");
  }
});

   
  }




  return(
    <>
    <tr>
      <td>{toy.name}</td>
      <td>{toy.ages}</td>
      <td>{toy.available ? <span> true </span>:<span> false </span>}</td>
      {/* <img src={toy.image} width="100px" height="100px"/> */}

      <td><Button 
      variant="contained"
      color="primary"
      onClick={() =>{ availableBtn(toy.id, toy.available) }}>
        Available
        </Button></td>

      <td><Button 
      startIcon={ <DeleteIcon /> }
      variant="contained"
      color="default"
      onClick={()=>{ deleteBtn(toy.id) }}>
        Delete
      </Button></td> 

    </tr>

    </>
  )
}


export default ToyList;

