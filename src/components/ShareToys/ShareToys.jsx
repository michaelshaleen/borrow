import {useSelector, useDispatch} from 'react-redux';
import {useState} from 'react';
import Button from '@material-ui/core/Button';
import axios from 'axios';
import Nav from '../Nav/Nav';


// const express = require('express');
// const fileUpload = require('express-fileupload');
// const app = express();

import AddCircleIcon from '@material-ui/icons/AddCircle';
import CancelIcon from '@material-ui/icons/Cancel';
import TextField from '@material-ui/core/TextField';
import swal from 'sweetalert';
import ToiChare from '../LandingPage/LandingPage';



function ShareToys() {
  const dispatch = useDispatch();

  const [toyName, setToyName] = useState('');
  const [ageGroup, setAgeGroup] = useState('');
  const [available, setAvailable] = useState('');
  const [toyImage, setImage] = useState({});
  const newToy = useSelector((store) => store.toy)
  const phone = useSelector((store) => store.user.phone);
  const userId = useSelector((store) => store.user.id);


  console.log(toyImage, "image");
  




  const shareToy = (action) => {
    console.log(toyImage, "image here")
    if(!toyName || !ageGroup || !available){
      swal({
        title: "please complete input form"
      });
    }else{

      swal({
        title: "Thanks for sharing",
      });    cancelBtn();
      dispatch({
        type: 'ADD_TOY',
        payload: {
          name: toyName,
          ages: ageGroup,
          available: available,
          phone: phone,
          ID: userId,
          image: toyImage
        }
      })
    }
      
    }


    const sendFile = (event) => {

      axios.post('/upload', toyImage)
      //how to send other data with form data
    }

    // dispatch({
    //   type: 'ADD_FILE',
    //   payload:{
    //     file: toyImage
    //   }
    const sendImage = (event) => {
      event.preventDefault();
      console.log(toyImage, "send image value")
     
      
        
      }
    


  const cancelBtn = () => {
    console.log("cancel")
    return(
      setToyName(''),
      setAgeGroup(''),
      setAvailable(''),
      setImage('')  
    )
  }
  return(
    <div className="divShare">
      <p>Share New Toys</p>

      
      {/* <ToiChare /> */}

      
      <Nav />
    <form 
    // ref='uploadForm'   
      id='uploadForm'
      //url='http://localhost:3000/upload' 
      action='http://localhost:3000/upload/file' 
      method='post'
      encType="multipart/form-data">

        <input type="file" name="sampleFile"
        onChange={(event)=> setImage(event.target.files)} />

        <input type='submit' value='Upload!'
         onClick={(event)=> sendFile(event) } />
    </form>


    <TextField 
    value={toyName}
    type="text"
    placeholder="Name"
    onChange={(event) => setToyName(event.target.value)}
    />
    <select 
    placeholder="Ages"
    value={ageGroup}
    name="Ages" 
    id="ages"
    onChange={(event) => setAgeGroup(event.target.value)}
    defaultValue="Choose-origin"
    >



      <option></option>
      <option value="0-3">0-3 Years Old</option>
      <option value="3-5">3-5 Years Old</option>
      <option value="5-10">5-10 Years Old</option>

    </select>

    <select 
    value={available}
    name="Available" 
    id="available"
    onChange={(event) => setAvailable(event.target.value)}>

      <option></option>
      <option value="true">Available Now</option>
      <option value="false">Not Available</option>

    </select>


  {/* <input 
  type="file" 
  // value={toyImage}
  className="custom-file-input"
  id="customFile" 
  onChange={(event) => setImage(event.target.value) }/> */}

 


  {/* <script>
    document.query.
  </script> */}

  <label className="custom-file-label" htmlFor="customFile"></label>
     
    <Button 
    variant="contained"
    color="default"
    size="small"
     endIcon={ <AddCircleIcon /> }
     onClick={shareToy}>
     Share Toy
    </Button>

    <Button 
      variant="contained"
      color="inherit"
      size="small"
      endIcon={ <CancelIcon /> }
      onClick={cancelBtn}>
      Cancel
    </Button>

    </div>
  )

}

export default ShareToys;