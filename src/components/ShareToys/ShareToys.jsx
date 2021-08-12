import {useSelector, useDispatch} from 'react-redux';
import {useState} from 'react';
import Button from '@material-ui/core/Button';
import axios from 'axios';
import Nav from '../Nav/Nav';
import React from 'react';
import './Share.css';
// const express = require('express');
// const fileUpload = require('express-fileupload');
// const app = express();

import AddCircleIcon from '@material-ui/icons/AddCircle';
import CancelIcon from '@material-ui/icons/Cancel';
import TextField from '@material-ui/core/TextField';
import swal from 'sweetalert';
import { makeStyles } from '@material-ui/styles';
import ToiChare from '../LandingPage/LandingPage';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import LogOutButton from '../LogOutButton/LogOutButton';

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
        text: "Please complete input form"
      });
    }else{

      swal({
        icon: "success",
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

  const useStyles = makeStyles((theme) => ({
    formControl: {
      // margin: theme.spacing(1),
      minWidth: 120,
    },
    selectEmpty: {
      // marginTop: theme.spacing(2),
    },
  }));


    const classes = useStyles();
    const [age, setAge] = React.useState('');
  
    const handleChange = (event) => {
      setAge(event.target.value);
    };

  return(
    <div className="share" >
            <h3 >Share New Toys</h3>
            <div>
              <label>
                Toy Name
              </label>
          <TextField 
            className="select"
            style={{top: '16px'}}
            value={toyName}
            type="input"
            placeholder="Name"
            onChange={(event) => setToyName(event.target.value)}
            />
        <FormControl className={classes.formControl}>
        <label 
          id="demo-simple-select-helper-label">Age</label>
        <Select
          className="select"
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={ageGroup}
          onChange={(event) => setAgeGroup(event.target.value)}
          >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value="0-3">0-3</MenuItem>
            <MenuItem value="3-5">3-5</MenuItem>
            <MenuItem value="5-10">5-10</MenuItem>
        </Select>
          </FormControl>
        <FormControl className={classes.formControl}>
        <label 
              id="demo-simple-select-label">Available
        </label>
              <Select
              className="select"
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={available}
              onChange={(event) => setAvailable(event.target.value)}
              >
              <MenuItem value="true">Available Now</MenuItem>
              <MenuItem value="false">Not Available</MenuItem>
            </Select>
        </FormControl>
        <label className="custom-file-label" htmlFor="customFile"></label>
          
          <button 
          className="select-button"
          size="small"
          onClick={shareToy}>
          Share Toy
          <AddCircleIcon />
          </button>

          <button
            className="select-button"
            size="small"
            onClick={cancelBtn}>
            Cancel
            <CancelIcon />
          </button>
      </div>
    </div>
    
  )

}


export default ShareToys;