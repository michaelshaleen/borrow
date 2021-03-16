import {useSelector, useDispatch} from 'react-redux';
import {useState} from 'react';


function ShareToys() {
  const dispatch = useDispatch();

  const [toyName, setToyName] = useState('');
  const [ageGroup, setAgeGroup] = useState('');
  const [available, setAvailable] = useState('');
  const newToy = useSelector((store) => store.toy)
  console.log(newToy, "new Toy")


//setToyname empty set age group empty

  const shareToy = (action) => {
    //console.log("share toy")
    dispatch({
      type: 'ADD_TOY',
      payload: {
        name: toyName,
        ages: ageGroup,
        available: available
      }
    })
    alert('Successful Add!')
    cancelBtn();
    
  }


  const cancelBtn = () => {
    console.log("cancel")
    // location.reload(); // setAgeGroup("0-3"); 
    // ageGroup.val(''),  // toyName.val('')
    // <input ref={inputRef} />
     // this.useRef["toyName"].value = "";
    return(
      setToyName(''),
      setAgeGroup('')   
    )
  }
  return(
    <>
    <p>Share New Toys</p>
    <input
    inputRef={el => this.inputElement = el}
    value={toyName}
    type="text"
    placeholder="description"
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