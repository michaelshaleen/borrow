import {useSelector, useDispatch} from 'react-redux';
import {useState} from 'react';
import ToyList from '../ToyList/ToyList';
import DisplayToys from '../DisplayToys/DisplayToys';
import Button from '@material-ui/core/Button';
import Nav from '../Nav/Nav';
import React from 'react';



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


function SearchToys() {
  const dispatch = useDispatch();
  const searchedToys = useSelector((store) => store.searchedToy)
  console.log(searchedToys, "toys heeree")
  const user = useSelector((store) => store.user);

  if(searchedToys.length == 0){
     
    }
  else{
    console.log("more than zero")
  }

  
  const [toyName, setToyName] = useState('');
  const [ageGroup, setAgeGroup] = useState('');

  const searchBtn = (action) => {
    if(!toyName || !ageGroup){
      swal({
        title: "please enter input values"
      });
    }else{

      dispatch({
        type:'SEARCH_TOY',
        payload: {
          name: toyName,//input value being sent on search click
          ages: ageGroup      
        }
      })
     }
  }
//

  const cancelBtn = () => {
    console.log("cancel")
    return(
      setToyName(''),
      setAgeGroup('')
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
    <div className="container">

        <div className="search_Container">
            <p><h3>Search Toys</h3></p>
        <div>
        <TextField 
                style={{top: '16px'}}
                value={toyName}
                type="text"
                placeholder="Name"
                onChange={(event) => setToyName(event.target.value)} />
        <FormControl className={classes.formControl}>


                    <InputLabel id="demo-simple-select-label">Ages</InputLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      value={ageGroup}
                      onChange={(event) => setAgeGroup(event.target.value)}
                      >
                      <MenuItem value="0-3">0-3</MenuItem>
                      <MenuItem value="3-5">3-5</MenuItem>
                      <MenuItem value="5-10">5-10</MenuItem>
                    </Select>
                  </FormControl>
          

              <Button 
                    color="default"
                    size="small"
                    endIcon={ <AddCircleIcon /> }
                    onClick={searchBtn}>
                    Search Toy
                    </Button>

                    <Button 
                      color="inherit"
                      size="small"
                      endIcon={ <CancelIcon /> }
                      onClick={cancelBtn}>
                      Cancel
                      </Button>
              </div>

 

    <table >
    <thead>
        <tr>
          <th>Description </th>
          <th>Age </th>
          <th>Available </th>
          <th>Owner's Phone</th>
        </tr>
        </thead>
        <tbody>
                {searchedToys.map(toy => {
                return <DisplayToys key={toy.id} toy={toy}/>  
              }
              )}
              </tbody>
      </table>
      





      
</div>
              </div>
  )
}

export default SearchToys;
    