import {useSelector, useDispatch} from 'react-redux';
import {useState} from 'react';
import Button from '@material-ui/core/Button';

import AddCircleIcon from '@material-ui/icons/AddCircle';
import CancelIcon from '@material-ui/icons/Cancel';
import TextField from '@material-ui/core/TextField';
import swal from 'sweetalert';



function ShareToys() {
  const dispatch = useDispatch();

  const [toyName, setToyName] = useState('');
  const [ageGroup, setAgeGroup] = useState('');
  const [available, setAvailable] = useState('');
  const [toyImage, setImage] = useState('');
  const newToy = useSelector((store) => store.toy)
  const phone = useSelector((store) => store.user.phone);
  const userId = useSelector((store) => store.user.id);





  const shareToy = (action) => {
    swal({
      title: "Here's a title!",
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
    <>
    {/* <h1>{phone}, This is phone</h1>
    <h1>{userId}, This is id</h1> */}

    <p>Share New Toys</p>
    <TextField 
    value={toyName}
    type="text"
    placeholder="Name"
    onChange={(event) => setToyName(event.target.value)}
    />
    <select 
    value={ageGroup}
    name="Ages" 
    id="ages"
    onChange={(event) => setAgeGroup(event.target.value)}>

      <option>  </option>
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


  <input 
  type="file" 
  // value={toyImage}
  className="custom-file-input"
  id="customFile" 
  onChange={(event) => setImage(event.target.files) }/>

  <label className="custom-file-label" htmlFor="customFile"></label>
     
    <Button 
    variant="contained"
    color="secondary"
    size="small"
     endIcon={ <AddCircleIcon /> }
     onClick={shareToy}>
     Share Toy
    </Button>

    <Button 
      variant="contained"
      color="primary"
      size="small"
      endIcon={ <CancelIcon /> }
      onClick={cancelBtn}>
      Cancel
    </Button>

    </>
  )

}

export default ShareToys;