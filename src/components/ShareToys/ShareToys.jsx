import {useSelector, useDispatch} from 'react-redux';
import {useState} from 'react';


function ShareToys() {
  const dispatch = useDispatch();

  const [toyName, setToyName] = useState('');
  const [ageGroup, setAgeGroup] = useState('');
  const newToy = useSelector((store) => store.toy)
  console.log(newToy, "new Toy")


//setToyname empty set age group empty

  const shareToy = (action) => {
    //console.log("share toy")
    dispatch({
      type: 'ADD_TOY',
      payload: {
        name: toyName,
        ages: ageGroup
      }
    })
  }


  const cancelBtn = () => {
    console.log("cancel")
    // location.reload();
    // setAgeGroup("0-3");
  }
  return(
    <>
    <p>Share New Toys</p>
    <input
    type="text"
    placeholder="description"
    onChange={(event) => setToyName(event.target.value)}
    />
    <select name="Ages" id="ages"
      onChange={(event) => setAgeGroup(event.target.value)}>
      <option>  </option>
      <option value="0-3">0-3 Years Old</option>
      <option value="3-5">3-5 Years Old</option>
      <option value="5-10">5-10 Years Old</option>
    </select>
    <button onClick={shareToy}>Share Toy</button>
    <button onClick={cancelBtn}>Cancel</button>

    </>
  )

}

export default ShareToys;