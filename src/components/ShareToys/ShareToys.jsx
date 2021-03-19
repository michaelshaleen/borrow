import {useSelector, useDispatch} from 'react-redux';
import {useState} from 'react';


function ShareToys() {
  const dispatch = useDispatch();

  const [toyName, setToyName] = useState('');
  const [ageGroup, setAgeGroup] = useState('');
  const [available, setAvailable] = useState('');
  const newToy = useSelector((store) => store.toy)
  const phone = useSelector((store) => store.user.phone);
  const userId = useSelector((store) => store.user.id);

  //console.log(newToy, "is this new Toy?")



  const shareToy = (action) => {
    dispatch({
      type: 'ADD_TOY',
      payload: {
        name: toyName,
        ages: ageGroup,
        available: available,
        phone: phone,
        ID: userId
      }
    })
    alert('Successful Add!')
    cancelBtn();
    
  }


  const cancelBtn = () => {
    console.log("cancel")
    return(
      setToyName(''),
      setAgeGroup(''),
      setAvailable('')   
    )
  }
  return(
    <>
    {/* <h1>{phone}, This is phone</h1>
    <h1>{userId}, This is id</h1> */}

    <p>Share New Toys</p>
    <input
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
    name="Ages" 
    id="ages"
    onChange={(event) => setAvailable(event.target.value)}>

      <option></option>
      <option value="true">Available Now</option>
      <option value="false">Not Available</option>

    </select>
    <button onClick={shareToy}>Share Toy</button>
    <button onClick={cancelBtn}>Cancel</button>

    </>
  )

}

export default ShareToys;